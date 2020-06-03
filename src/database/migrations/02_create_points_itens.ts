import Knex from 'knex'

export async function up(knex: Knex){
    //create a table
    return knex.schema.createTable('points_itens', table => {
        table.increments('id').unsigned().primary()
        //unsigned() é nescessário no mysql para não ocorrer erro durante a cricao das chave estrangeiras
        table.integer('point_id').unsigned().references('id').inTable('points')
        table.integer('iten_id').unsigned().references('id').inTable('itens')
    })
}

export async function down(knex: Knex){
    //roback
    return knex.schema.dropSchema('points_itens')
}
