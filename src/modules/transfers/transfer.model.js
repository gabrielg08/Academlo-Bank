import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database/database.js";

const Transfers = sequelize.define('transfers', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    sendUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    receiverUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Transfers