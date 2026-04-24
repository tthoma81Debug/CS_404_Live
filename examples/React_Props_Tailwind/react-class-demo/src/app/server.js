const express = require("express");
const app = express();
const PORT = 4000;

// Simple CORS middleware so the browser can call this API from port 3000
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Basic route – just to check that the server runs
app.get("/", (req, res) => {
  res.send("Express server is running.");
});

// Simple API route returning JSON
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Another API route example
app.get("/api/teacher", (req, res) => {
  res.json({
    teacherName: "Your Name",
    course: "React + Next.js + Express",
  });
});

app.listen(PORT, () => {
  console.log(`Express API listening on http://localhost:${PORT}`);
});