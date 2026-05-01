require("dotenv").config({ path: ".env.local" }); // Load MONGODB_* env vars

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = 4000;

// Parse JSON bodies for POST/PUT requests
app.use(express.json());

// Simple CORS so the browser can call this API from Next.js on port 3000
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ---- MongoDB setup ----

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME || "react_class_demo";

if (!uri) {
  throw new Error("Please set MONGODB_URI in .env.local");
}

const client = new MongoClient(uri);

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbName);

    // Make db available on req.app.locals
    app.locals.db = db;

    // ---- Routes ----

    // Basic test route
    app.get("/", (req, res) => {
      res.send("Express server is running.");
    });

    // Simple message route (from earlier)
    app.get("/api/message", (req, res) => {
      res.json({ message: "Hello from Express!" });
    });

    // Simple teacher route (from earlier)
    app.get("/api/teacher", (req, res) => {
      res.json({
        teacherName: "Dude in Jacket",
        course: "React + Next.js + Express + MongoDB",
      });
    });

    // List all notes (most recent first)
    app.get("/api/notes", async (req, res) => {
      try {
        const notes = await req.app.locals.db
          .collection("notes")
          .find({})
          .sort({ createdAt: -1 })
          .toArray();

        res.json(notes);
      } catch (err) {
        console.error("Error fetching notes", err);
        res.status(500).json({ error: "Failed to fetch notes" });
      }
    });

    // Create a new note
    app.post("/api/notes", async (req, res) => {
      const { text } = req.body;

      if (!text || !text.trim()) {
        return res.status(400).json({ error: "Text is required" });
      }

      const note = {
        text: text.trim(),
        createdAt: new Date(),
      };

      try {
        const result = await req.app.locals.db
          .collection("notes")
          .insertOne(note);

        res.status(201).json({ ...note, _id: result.insertedId });
      } catch (err) {
        console.error("Error inserting note", err);
        res.status(500).json({ error: "Failed to create note" });
      }
    });

    // Get a single note by id
    app.get("/api/notes/:id", async (req, res) => {
      const { id } = req.params;

      let objectId;
      try {
        objectId = new ObjectId(id);
      } catch {
        return res.status(400).json({ error: "Invalid note id" });
      }

      try {
        const note = await req.app.locals.db
          .collection("notes")
          .findOne({ _id: objectId });

        if (!note) {
          return res.status(404).json({ error: "Note not found" });
        }

        res.json(note);
      } catch (err) {
        console.error("Error fetching note by id", err);
        res.status(500).json({ error: "Failed to fetch note" });
      }
    });

    // Start the Express server only after Mongo is ready
    app.listen(PORT, () => {
      console.log(`Express API listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
}

startServer();
