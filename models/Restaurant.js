import Sequelize from "sequelize";
import connection from "../config/db.js";

const Restaurant = connection.define(
    'restaurant',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        address: {
            type: Sequelize.STRING,
            AllowNull: false
        }
    }

)
export default Restaurant;