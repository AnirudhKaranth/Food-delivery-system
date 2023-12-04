import sequelize from "../DB/db.js";
import { DataTypes } from "sequelize";
import Restaurant from "./Restaurant.js";
import Food from "./Food.js";
import User from "./User.js";

const Cart = sequelize.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Fid: {
        type: DataTypes.UUID,
        references: {
            model: Food,
            key: "id"
        }
    },
    Uid: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    },
    
    
    
   
})


Cart.belongsTo(Food, { foreignKey: 'Fid' });

export default Cart