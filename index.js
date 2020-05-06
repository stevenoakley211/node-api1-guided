// require the express npm module, needs to be added to the project using "npm install express"
const express = require('express');

// creates an express application using the express module
const server = express();
 let hubs =[];
 let lessons = [];
// configures our server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get('/', (req, res) => {
    res.json({message:"hello World!!!"})


  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
    
});

server.post('/api/hubs', (req,res)=>{
  
})

// once the server is fully configured we can have it "listen" for connections on a particular "port"
// the callback function passed as the second argument will run once when the server starts
server.listen(8000, () => console.log('API running on port 8000!!!!'));