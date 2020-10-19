const express = require('express');
const server = express();
const cors = require('cors');
const axios = require('axios');

const graphDriver = require('./utils/Graph');
const addressesToParam = require('./utils/addressesToParam');

require('dotenv').config();

server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 5000;
const { GOOGLE_API_KEY } = process.env;

server.post('/create-route', (req, res) => {
    const BASE_URL = 'https://maps.googleapis.com/maps/api/distancematrix/json';

    // Format address to acceptable query param for google's API url string
    const locations = addressesToParam(req.body);

    // Make a SINGLE request to the google API
    axios.get(`${BASE_URL}?origins=${locations}&destinations=${locations}&key=${GOOGLE_API_KEY}`)
    .then(response => {
        res.status(200).json(graphDriver(response.data));
    })
    .catch(err => {
        console.log(err);
    })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})