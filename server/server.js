import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import postRoute from './routes/post.js'


const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoute)

// Mongoose
const CONNECTION_URL = "mongodb+srv://delaquarsh:Equarshie85@mern-memory-app.acsl8.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
  .catch((error) => {
      console.log(error.message);
  })

mongoose.set('useFindAndModify', false)


const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));