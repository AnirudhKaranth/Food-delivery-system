import sequelize from "../DB/db.js";
import {  DataTypes } from "sequelize";
import useBcrypt from "sequelize-bcrypt"

const User = sequelize.define('User', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4 ,
        unique:true,
        primaryKey:true,
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
      photo:{
        type: DataTypes.TEXT 
      },
      role:{
        type:DataTypes.STRING,
        defaultValue:"customer"
      }
      
    }, {
      indexes: [
        {
          unique: true,
          fields: ['id']
        },
      ]
    });

  
    
  useBcrypt(User, {
    field: 'Upassword', 
    rounds: 12, 
    compare: 'authenticate',
  });
  
  export default User