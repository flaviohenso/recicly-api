import Knex from 'knex'

export async function up(knex: Knex){
    //create a table
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.specificType('latitude','Double').notNullable()
        table.specificType('longitude','Double').notNullable()
        table.string('city').notNullable()
        table.string('uf').notNullable()
    })
}

export async function down(knex: Knex){
    //roback
    return knex.schema.dropSchema('points')
}

