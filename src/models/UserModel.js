import { DataTypes } from 'sequelize'
import {create_connection} from '../config/DatabaseConnection.js'

const User = async () => { 
    console.log('ola4')
    const conn = await create_connection()
    console.log(create_connection)
    const schema = conn.define('ArianTests', {
        nombres: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos: {
            type: DataTypes.STRING,
            allowNull: false
        }},
    {
        schema: 'Test'
    });

    return schema;
}
export default User