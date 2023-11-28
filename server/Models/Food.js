import sequelize from "../DB/db.js";
import { DataTypes } from "sequelize";
import Restaurant from "./Restaurant.js";

const Food = sequelize.define('Food', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(5000),

    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Rid: {
        type: DataTypes.UUID,
        references: {
            model: Restaurant,
            key: "id"
        }
    },
    photo:{
        type: DataTypes.TEXT('medium')
    },
    category: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('category').split(';')
        },
        set(val) {
            this.setDataValue('category', val.join(';'));
        }

    }
})

export default Food