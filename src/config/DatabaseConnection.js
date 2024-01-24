import {Sequelize} from 'sequelize';

class Database {
    constructor() {
        this._sequelize = new Sequelize({
            dialect: "mssql",
            dialectOptions: {
                options: {
                    encrypt: true // for Azure
                }
            },
            host: process.env.MSSQL_SERVER,
            database: process.env.MSSQL_DATABASE,
            username: process.env.MSSQL_USERNAME,
            password: process.env.MSSQL_PASSWORD
        })

        this.connect()
    }

    get sequelize() {
        return this._sequelize
    }

    async connect() {
        try {
            await this._sequelize.authenticate()
            console.log('Connection has been established successfully')
        }catch (e){
            console.error(`Error to conect to database: ${e}`)
        }
    }

    sync_database() {
        // call this methods after we have defined all models
        // use this when you want to create tables but it will replace the existing ones: ({force: true})
        try {
            this._sequelize.sync()
                .then(() => {
                    console.log('Database syncronized successfully')
                })
        }catch (e){
            console.error(`Error to sync database: ${e}`)
        }
    }
}

export default Database
