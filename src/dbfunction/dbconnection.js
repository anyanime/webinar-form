import * as dotenv from 'dotenv';
require('dotenv').config();

dotenv.config();
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASS}@${process.env.DB_NORM}.vuxpwvn.mongodb.net/?retryWrites=true&w=majority`;

const connectToDatabase = new MongoClient(uri);
//connection to database
// const client = MongoClient.connect(url, { useNewUrlParser: true }, (error) => {
//     if (error) {
//       return console.log("Connection failed for some reason");
//     }
//     console.log("Connection established");
   
//   });

// connection to database

// client.connect(); 
// console.log('Connected')
//  (err) => {
  
//   if (err) console.log(err.name);
  
//   console.log("Connected successfully to server");

//   });

export {connectToDatabase};