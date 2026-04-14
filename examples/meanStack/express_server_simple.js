const express = require('express');
const path = require('path');
const app = express();


// IMPORTANT: This says "look in the 'public' folder for static files like HTML/CSS/JS/images. So if you have a file called 'public/index.html', it will be served at http://localhost:3000/index.html"
//I can show the cors problem if a file is directly accessed from the browser without going through the server. If you want to serve files, just uncomment this line and make sure your files are in a folder called 'public' in the same directory as this server file.
//so yeah...you don't need it, but the cors problem will come up and this is a good solution. You can also specify cors headers directly.
app.use(express.static(path.join(__dirname, 'public')));


// Middleware to parse URL‑encoded form data (from HTML <form> posts)
// IMPORTANT: Note for students: This is needed to access req.body for POST requests with form data. If you forget this, req.body will be undefined and you'll be confused why your form data isn't showing up!
// If you also want to parse JSON bodies (e.g., from fetch POST requests), you can add:
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/users', (req, res) => {
    // Access the parsed form data (e.g., from an HTML form with fields "name" and "email")
    const { name, email } = req.body;
    
    // Process data (e.g., save to DB)
    console.log(name, email);
    
    // Send back a JSON response (could also send plain text/HTML)
    res.json({ message: "User received", name, email });
});

app.get('/api/users', (req, res) => {
    // Access the parsed form data (e.g., from an HTML form with fields "name" and "email")
    //const { name, email } = req.body;
    
    // Process data (e.g., save to DB)
    console.log("yeep. it's workn");
    
    // Send back a JSON response (could also send plain text/HTML)
    res.json({ message: "If you can see this...good. and that is cool. and here is a new change. can you see it?"});
});

app.listen(3000, () => console.log('Server running on port 3000'));