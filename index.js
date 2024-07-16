// app.js
const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to log all request data
app.use((req, res, next) => {
	console.log("Request Method:", req.method);
	console.log("Request URL:", req.url);
	console.log("Request Headers:", req.headers);
    console.log("Request Body:", req.body);
    
    console.log("---------------\n whole request", req);
	next();
});

// Route to handle /data endpoint
app.get("/data", (req, res) => {
    myResponseBody = {}
    myResponseBody.myheaders = req.headers
    myResponseBody.environments = process.env;
	res.status(200).json(myResponseBody);
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
