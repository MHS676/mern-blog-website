import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mern-blog.tl1lwtp.mongodb.net/?retryWrites=true&w=majority&appName=mern-blog`).then(() => {
    console.log('mongodb is connected')
})
.catch((err) => {
    console.log(err)
})


const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});