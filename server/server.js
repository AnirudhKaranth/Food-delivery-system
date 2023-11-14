import express from 'express'
import 'dotenv/config'

import sequelize  from './DB/db.js';
import bodyParser from 'body-parser'
import cors from 'cors'

import restaurantRouter from './routes/restaurantRoutes.js'
import userRouter from './routes/userRoutes.js'
import foodRouter from './routes/foodRoutes.js'
import reviewRouter from './routes/reviewRoutes.js'

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json({ limit : "30mb", extended: true}));
app.use(cors());


app.use('/api/v1/user', userRouter)
app.use('/api/v1/restaurant', restaurantRouter)
app.use('/api/v1/food', foodRouter)
app.use('/api/v1/review', reviewRouter)

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log(`Server is running on port ${port}`);
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

  (async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    }

   
    app.listen(port, () => {
        connectToDatabase();
    });
})();


    