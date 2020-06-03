import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {

    async index(request: Request, response: Response) {
        const { city, uf, itens } = request.query

        console.log(city,uf,itens)
        
        const parsedItens = String(itens).split(',').map(iten => 
            Number(iten.trim())
        )

        const points = await knex('points')
        .join('points_itens', 'points.id', '=', 'points_itens.point_id')
        .whereIn('points_itens.iten_id',parsedItens)
        .where('city',String(city))
        .where('uf',String(uf))
        .distinct()
        .select('points.*')

        return response.json(points)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const point = await knex('points').where('id', id).first()

        if (!point) {
            return response.status(400).json({ message: 'Point not found!' })
        }

        const itens = await knex('itens').join('points_itens', 'itens.id', '=', 'points_itens.iten_id')
            .where('points_itens.point_id', id).select('title')

        //point.itens = itens

        return response.json({ point, itens })
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            itens
        } = request.body

        const trx = await knex.transaction()

        const insertedIds = await trx('points').insert({
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        })

        const point_id = insertedIds[0]

        const poinstItens = itens.map((iten_id: Number) => {
            return {
                iten_id,
                point_id
            }
        })

       await trx('points_itens').insert(poinstItens)

        await trx.commit();

        return response.json({
            id: point_id,
                    })
    }

}

export default PointsController