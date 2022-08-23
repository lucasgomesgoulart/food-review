import Sequelize from "sequelize";
import connection from "../config/db.js";

const Review = connection.define(
    'review',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            AllowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idRestaurant: {
            type: Sequelize.INTEGER,
            AllowNull: false,
            references: {
                model: 'restaurants',
                key: 'id'
            }
        },
        comment: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        stars: {
            type: Sequelize.INTEGER,
            AllowNull: false
        }
    }

)
export default Review;