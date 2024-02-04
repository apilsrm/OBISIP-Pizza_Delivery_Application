// const express = require('express');
import express from "express";

// const mongoose = require('mongoose');
// mongoose.set("strictQuery", true);
// const ConnectionDB = require('./config/db.js');
import ConnectionDB from './config/db.js'

// const bodyParser = require("bodyParser");
import bodyParser from "body-parser";

// const cors = require('cors');
import cors from "cors";

// const dotenv = require('dotenv');
import dotenv from "dotenv";

// const errorHandler = require('./middleware/errorHandler.js')
import errorHandler from "./middleware/errorHandler.js"

//routes import
import pizzaRoutes from "./routes/pizzaRoutes.js"
// import inventoryRoutes from "./routes/inventoryRoutes.js"
// import orderRoutes from "./routes/orderRoutes.js"
import userRoutes from "./routes/userRoutes.js"



//load environment variables
dotenv.config();

//intialize  express app
 const app = express();

 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
//  app.use(logger("dev"));

//middleware
app.use(bodyParser.json());
app.use(cors());


//connect MongoDb
//  mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,

//  });

//  const db = mongoose.connection;
//  db.on('error',console.error.bind(console, 'MongoDB connection error'));
//  db.once('open',() => {
//     console.log('Connected to MongoDB');
//  });

 ConnectionDB();


 //routes
// app.use("/api/v1", require('./routes/pizzaRoutes.js'));
app.use("/api/v1",pizzaRoutes)
// app.use("/api/v1",inventoryRoutes);
// app.use("/api/v1",orderRoutes);
app.use("/api/v1",userRoutes);



 //error handling middlewars call 
 app.use(errorHandler);





 //port
 //start the server
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(
    `Server is running at port: http://localhost:${PORT}`
  );
});




 //to handeled promise rejection
process.on("", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting  down the server to handled promise rejection`);
    server.close(() => {
      process.exit(1);
    });
  });
