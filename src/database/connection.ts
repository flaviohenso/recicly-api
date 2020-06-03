import knex from 'knex'

const connection = knex({
    client: 'mysql',
    version: '5.7',
    connection: {
        host: '127.0.0.1',
        user: 'developer',
        password: 'A1b2_B2a1',
        database: 'my_api_rest_dev'
    }
})

export default connection