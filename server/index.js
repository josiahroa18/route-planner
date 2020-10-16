const express = require('express');
const server = express();
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();

server.use(express.json());
server.use(cors());

const PORT = process.env.PORT || 5000;
const { GOOGLE_API_KEY } = process.env;

// TODO: Separate into own file
/**
 * Converts an address to an acceptable query param for google's API url string
 * All spaces and comman-spaces must be converted to '+'
 * Expected format: single spaced string with or without commas
*/
const addressesToParam = (addresses) => {
    let locations = '';
    let i = 0;
    const length = Object.keys(addresses).length;

    for (const [key, value] of Object.entries(addresses)){
        const formattedAddress = value.replace(/\s/g, '+').replace(/,/g, '');
        if(i < length - 1){
            locations += `${formattedAddress}|`;
        } else {
            locations += formattedAddress;
        }
        i++;
    }
    return locations;
}

// TODO: Separate into own file
class Graph {
    constructor(){
        this.vertices = {}

        // ********************************
        // Private Methods
        // ********************************

        // Add address node to vertices array
        this.addVertex = function(addressName){
            this.vertices[addressName] = {
                edges: [],
                visited: false
            };
        }

        // Create edge from addressOne to addressTwo (one-direction)
        this.addEdge = function(addressOneName, addressTwo){
            const addressTwoName = addressTwo.name;
            const distanceToAddressTwo = addressTwo.distanceTo;
    
            if(addressOneName in this.vertices && addressTwoName in this.vertices){
                this.vertices[addressOneName].edges.push({
                    address: addressTwoName,
                    distanceTo: distanceToAddressTwo
                })
            }
        }
    }

    /**
     * Adding vertices:
     * @param {*} origins - Comes from google's response.origin_addresses
     * For each origin address, add it to the vertices hashmap
     */
    addVertices(origins){
        origins.forEach(origin => {
            this.addVertex(origin);
        })
    }

    /**
     * Adding edges: 
     * @param rows - Comes from google's response.rows
     * @param origins - Comes from google's response.origin_addresses
     * For each origin address, there are n-1 possible edges
     *   - If origin address === destination -> skip
    */
    addEdges(rows, origins){
        for(let i=0; i<rows.length; i++){
            const currentRow = rows[i].elements;
            for(let j=0; j<currentRow.length; j++){
                if(i !== j){
                    const addressOneName = origins[i];
                    const addressTwo = {
                        name: origins[j],
                        distanceTo: rows[i].elements[j].distance
                    }                
                    this.addEdge(addressOneName, addressTwo);
                }
            }
        }
    }

    // Traverse through the graph and find the most efficient route via distance
    createRoute(startingAddress){
        const route = [];
        console.log(startingAddress);
    }

    printVerticesList(){
        return this.vertices
    }
}

// TODO: Separate into own file
// Driver function to construct and traverse the graph
const graphDriver = (response) => {
    const rows = response.rows;
    const origins = response.origin_addresses;

    // Create instance of graph, create nodes, and connect nodes
    const map = new Graph();
    map.addVertices(origins);
    map.addEdges(rows, origins);
    
    return map.printVerticesList();
    // return map.createRoute(origins[0]);
}

// TODO: Delete after proper testing
const mockResponse = {
    "destination_addresses": [
        "19163 Cottonwood Dr, Parker, CO 80138, USA",
        "11603 Hot Springs Dr, Parker, CO 80138, USA",
        "Boulder, CO, USA"
    ],
    "origin_addresses": [
        "19163 Cottonwood Dr, Parker, CO 80138, USA",
        "11603 Hot Springs Dr, Parker, CO 80138, USA",
        "Boulder, CO, USA"
    ],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "1 m",
                        "value": 0
                    },
                    "duration": {
                        "text": "1 min",
                        "value": 0
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "3.9 km",
                        "value": 3912
                    },
                    "duration": {
                        "text": "7 mins",
                        "value": 411
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "81.1 km",
                        "value": 81111
                    },
                    "duration": {
                        "text": "52 mins",
                        "value": 3111
                    },
                    "status": "OK"
                }
            ]
        },
        {
            "elements": [
                {
                    "distance": {
                        "text": "3.6 km",
                        "value": 3567
                    },
                    "duration": {
                        "text": "6 mins",
                        "value": 335
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "1 m",
                        "value": 0
                    },
                    "duration": {
                        "text": "1 min",
                        "value": 0
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "82.8 km",
                        "value": 82832
                    },
                    "duration": {
                        "text": "53 mins",
                        "value": 3189
                    },
                    "status": "OK"
                }
            ]
        },
        {
            "elements": [
                {
                    "distance": {
                        "text": "80.2 km",
                        "value": 80201
                    },
                    "duration": {
                        "text": "51 mins",
                        "value": 3054
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "81.9 km",
                        "value": 81927
                    },
                    "duration": {
                        "text": "52 mins",
                        "value": 3149
                    },
                    "status": "OK"
                },
                {
                    "distance": {
                        "text": "1 m",
                        "value": 0
                    },
                    "duration": {
                        "text": "1 min",
                        "value": 0
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}

server.post('/create-route', (req, res) => {
    /**
     * Benefits of this algorithm: 
     * - Only one fetch from google's API is needed
     * - Time complexity is ?
     * 
     * Step 2: Build a weighted graph
     * Step 3: Move through the graph, marking visited nodes, and moving to the next non-visited and shortest from origin node.
     * Step 4: Append final destination to the end of the array and return
    */

    // Format address to acceptable query param for google's API url string
    // TODO: Uncomment after proper testing
    // const locations = addressesToParam(req.body);

    // Make a request to the google API
    // TODO: Uncomment after proper testing
    // axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${locations}&destinations=${locations}&key=${GOOGLE_API_KEY}`)
    // .then(response => {
    //     graphDriver(response.data);
    //     res.status(200).send(response.data);
    // })
    // .catch(err => {
    //     console.log(err);
    // })

    // Build graph with the response
    res.status(200).send(graphDriver(mockResponse));
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})