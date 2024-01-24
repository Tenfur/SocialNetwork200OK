import {DataTypes} from 'sequelize'

const User = (sequelize) => { 
    return sequelize.define('ArianTest', {
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
    })
}
export default User