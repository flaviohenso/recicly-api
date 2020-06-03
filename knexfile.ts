import path from 'path'

module.exports = {

    development: {
        client: 'mysql',
        version: '5.7',
        connection: {
            host: '127.0.0.1',
            user: 'developer',
            password: 'A1b2_B2a1',
            database: 'my_api_rest_dev',
            charset: 'utf8'
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        }
    },
    staging: {
        client: 'mysql',
        version: '5.7',
        connection: {
            host: '127.0.0.1',
            user: 'developer',
            password: 'A1b2_B2a1',
            database: 'my_api_rest_test',
            charset: 'utf8'
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        }
    },
    production: {
        client: 'mysql',
        version: '5.7',
        connection: {
            host: '127.0.0.1',
            user: 'developer',
            password: 'A1b2_B2a1',
            database: 'my_api_rest_prod',
            charset: 'utf8'
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        }
    }
}