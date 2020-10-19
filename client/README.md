## Running development client on local machine
1. `npm install`
2. Create `.env` file in the current directory
3. Add `REACT_APP_SERVER_URL=http://localhost:3000` to the newly created env file
4. `npm start`
5. The client should now be running on `localhost:3000`.

## Server Scripts
`npm start` starts the development client

`npm test` runs jest watch for all test files with hot reloads

`npm build` creates a build of the project for production

## Dependencies
- [axios](https://github.com/axios/axios)
- [styled-components](https://styled-components.com/)

## Env Variables
`REACT_APP_SERVER_URL` - Specifies the base server url