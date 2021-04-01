const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Server init
const app = express();

// Main config
const PORT = process.env.PORT || 5000;
const ADMIN = process.env.DB_ADMIN;
const PASSWORD = process.env.DB_PASSWORD;
const NAME = process.env.DB_NAME;

// Middlewares
app.use(cors());
app.get('/api/test', (req, res) => {
   const response = 'it works';
   res.json(response);
});

const start = () => {
   try {
      mongoose.connect(`mongodb+srv://${ADMIN}:${PASSWORD}@cluster0.l30qd.mongodb.net/${NAME}`, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      })
      app.listen(PORT, () => {console.log(`Server has been started on ${PORT}`)});
   } catch(error) {
      console.log(`Error: ${error}`);
   }
}

start();
