const keys = require('./keys');

// express app setup
const express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// postgres client setup

const { Pool } = require('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    
});