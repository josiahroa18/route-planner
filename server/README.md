## Running development server on local machine
1. `npm install`
2. Create `.env` file in the current directory
3. Add `GOOGLE_API_KEY=<api_key_here>` to the newly created env file
4. `npm run server`
5. The server should now be running on `localhost:5000`.

## Server Scripts
`npm run server` starts a development server using nodemon for hot reloads

`npm start` starts a production server

`npm test` runs jest watch for all test files with hot reloads

## Dependencies
- [express](https://expressjs.com/)
- [axios](https://github.com/axios/axios)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Dev Dependencies
- [nodemon](https://www.npmjs.com/package/nodemon)
- [jest](https://jestjs.io/docs/en/getting-started)

## Env Variables
`GOOGLE_API_KEY` - Necessary key to interact with google's API

