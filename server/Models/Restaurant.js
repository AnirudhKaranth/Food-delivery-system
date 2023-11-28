import sequelize from "../DB/db.js";
import {  DataTypes } from "sequelize";
import useBcrypt from "sequelize-bcrypt"

const Restaurant = sequelize.define('Restaurant', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      },
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    phone:{
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     description:{
        type: DataTypes.STRING(5000),
        allowNull: false
     },
     photo:{
       type: DataTypes.TEXT('medium')
      },
      category:{
         type:DataTypes.STRING,
         allowNull: false,
         get() {
           return this.getDataValue('category').split(';')
         },
         set(val) {
           this.setDataValue('category',val.join(';'));
         }   
      },
      rating:{
         type: DataTypes.INTEGER,
         defaultValue:0
       
      },
      role:{
      type:DataTypes.STRING,
      defaultValue:"owner "
    },
  }, {
   
  });


  useBcrypt(Restaurant, {
   field: 'password', 
   rounds: 12, 
   compare: 'authenticate',
 });
 

  
  export default Restaurant