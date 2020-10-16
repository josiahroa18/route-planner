# route-planner
My solution to the PRC take home coding challenge.

## Running Application Locally
Both the client and server should be running at the same time to get a fully functional application.

### Client (Starting from the root directory)
1. `cd client`
2. `npm install`
3. Create `.env` file in current directory
4. Add `REACT_APP_SERVER_URL=http://localhost:3000`
5. `npm start`
6. The client should now be running on `localhost:3000` and can be viewed in your browser.

### Server (Starting from the root directory)
1. `cd server`
2. `npm install`
3. Create `.env` file in current directory
4. Add `GOOGLE_API_KEY=<api_key_here>`
5. `npm run server`
6. The server should now be running on `localhost:5000`.

## Tech Stack
1. React.js
2. Node.js/Express

