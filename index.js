const express = require("express");
const mongoose = require("mongoose");
const { json, urlencoded } = require("express");
const http = require('http');
const tasks = require("./Controller/tasksController");
const routes = require('./Routes/tasksRoute');
const app = express();

app.use(json());


//Port to listen to
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('server is running on port ${port}');
});


//connecting replit with created mongo database
//mongoClient

const MongoClient = require('mongodb').MongoClient;

const mongo_username = process.env['MONGO_USERNAME']

const mongo_password = process.env['MONGO_PASSWORD']

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0-zrtwi.gcp.mongodb.net/crmdb?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });