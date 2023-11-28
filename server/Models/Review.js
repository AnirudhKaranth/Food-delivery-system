import sequelize from "../DB/db.js";
import {  DataTypes } from "sequelize";
import User from "./User.js";
import Food from "./Food.js";
import Restaurant from "./Restaurant.js";

const Review = sequelize.define('Review', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 ,
        primaryKey:true,
        unique:true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating:{
        type: DataTypes.INTEGER,
        
    },
    date:{
        type: DataTypes.DATE ,
        defaultValue: DataTypes.NOW
    }, 
    userName:{
        type:DataTypes.STRING,
    }   ,
    Uid:{
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id'
          }
    },
    Fid:{
        type: DataTypes.UUID,
        references:{
            model:Food,
            key: 'id'
        },
        allowNull:true
    }
     
  }, {
   
  });
  
  export default Review