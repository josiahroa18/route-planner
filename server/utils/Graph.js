
class Graph {
    constructor(){
        this.vertices = {}

        // ********************************
        // PRIVATE METHODS

        // Add address node to vertices array
        this.addVertex = function(addressName){
            this.vertices[addressName] = {
                address: addressName,
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
        // ********************************
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
    /**
     * Creating the efficient route:
     * @param startingAddress - A string that matches a key in the vertices hashmap to represent the starting location
     */
    createRoute(startingAddress){
        const route = [];
        let visitedCount = 0;
        let locationCount = Object.keys(this.vertices).length;

        // Loops while there are still unvisited locations
        let currentLocation = this.vertices[startingAddress]
        while(visitedCount < locationCount){
            currentLocation.visited = true;
            visitedCount ++;
            route.push(currentLocation.address);

            // Find next current location
            let min = Number.MAX_VALUE;
            let minIndex = 0;
            let edges = currentLocation.edges

            for(let i=0; i<edges.length; i++){
                if(this.vertices[edges[i].address].visited){
                    continue;
                }
                if(edges[i].distanceTo.value < min){
                    min = edges[i].distanceTo.value;
                    minIndex = i;
                }
            }

            // Update current location
            let nextLocation = edges[minIndex].address;
            currentLocation = this.vertices[nextLocation];
        }
        return route;
    }

    printVerticesList(){
        return this.vertices
    }
}

// Driver function to construct and traverse the graph
const graphDriver = (response) => {
    const rows = response.rows;
    const origins = response.origin_addresses;

    // Create instance of graph, create nodes, and connect nodes
    const map = new Graph();
    map.addVertices(origins);
    map.addEdges(rows, origins);
    
    // return map.printVerticesList();
    return map.createRoute(origins[0]);
}

module.exports = graphDriver;