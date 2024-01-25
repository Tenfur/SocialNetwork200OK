import { DataTypes } from 'sequelize'

const User = (conn) => { 
    console.log('ola4')
    return conn.define('ArianTest', {
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
        }
    )
}
export default User