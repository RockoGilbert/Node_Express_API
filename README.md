Node Express API
A simple Node.js/Express API for serving data.

Requirements
Node.js
npm
Installation
Clone this repository
bash
Copy code
git clone https://github.com/RockoGilbert/node-express-api.git
Install dependencies
Copy code
npm install
Start the server
sql
Copy code
npm start
Endpoints
The API has the following endpoints:

GET /api/data
Returns a JSON array of data
POST /api/data
Adds new data to the array
Example Usage
kotlin
Copy code
GET /api/data

[
  {
    id: 1,
    data: "Example data 1"
  },
  {
    id: 2,
    data: "Example data 2"
  }
]

POST /api/data

{
    data: "Example data 3"
}
Built With
Node.js
Express
Author
Rocko Gilbert



