// Import necessary modules and set up your Express app
const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

// Your other route handlers and middleware go here

// Route for rendering the dashboard.html page
app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/Users/maya/bootcamp/FullStack-Tech-Blog/index placeholders/dashboard.html'); // Replace with your actual file path
});

// Start your server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
