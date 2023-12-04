import sequelize from "../DB/db.js";
import { DataTypes } from "sequelize";
import Restaurant from "./Restaurant.js";
import Food from "./Food.js";
import User from "./User.js";

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Rid: {
        type: DataTypes.UUID,
        references: {
            model: Restaurant,
            key: "id"
        }
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
    orderTime:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    },
    status:{
        type: DataTypes.ENUM,
        values: ["pending", "done"],
        defaultValue:"pending"
    },
    address:{
        type: DataTypes.STRING,

    }, 
    phone:{
        type:DataTypes.STRING
    }
    
   
})

Order.belongsTo(Food, { foreignKey: 'Fid' });
Order.belongsTo(User, { foreignKey: 'Uid' });

export default Order