import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';   
import userRoutes from './routes/user.route.js';

dotenv.config();  

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mern-blog.tl1lwtp.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog`)
    .then(() => {
        console.log('mongodb is connected');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use('/api/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
