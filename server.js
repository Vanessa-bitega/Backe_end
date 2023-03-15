import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

mongoose.set('strictQuery', false);
// // configuring dotenv
dotenv.config();

// // define some my env variables
// // define some my env variables
const port = process.env.PORT;
const host = process.env.HOST;
const startServer = () => app.listen(port);
Promise.all([startServer()])
  .then(() => {
    console.log(`Server is listening at http://${host}:${port}`);
  })
  .catch((err) => console.log(err))

// Set up Swagger documentation
import swaggerDefinition from './swagger.json' assert { type: "json" };
const options = {
    swaggerDefinition,
    apis: ['../routes/*.js'], // Path to the API routes files
};
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));