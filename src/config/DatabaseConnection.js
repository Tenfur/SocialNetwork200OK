import { Sequelize } from 'sequelize';

const create_connection = () => {
    const conn = new Sequelize({
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
    conn.authenticate()
        .then(()=> {
            console.info('Database connected successfully')
        })
        .catch((e)=> {
            console.error(`Error to connect database: ${e}`)
        })

    return conn
}


const sync_database = async (conn) => {
    try {
        await conn.sync()
            .then(()=>{
                console.info('Database syncronized successfully')
            })
    } catch(e) {
        console.error(`Error to sync database: ${e}`)
    }
}

const connect_database = async () => {
    const conn = await create_connection();
    await sync_database(conn);
}

export {create_connection, connect_database}