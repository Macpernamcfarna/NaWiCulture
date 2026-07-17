const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const Datastore = require("@seald-io/nedb");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/naWeCulture').then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Import Contact ROUTES - FIXED PATH
const Contact = require('./routes/Contact');

// NeDB for subscribers (you can keep this or move it to MongoDB later)
const database = new Datastore({filename: "subscribers.db",autoload: true});

// Pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "home.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "public", "about.html")));
app.get("/heritage", (req, res) => res.sendFile(path.join(__dirname, "public", "heritage.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "public", "contact.html")));


// Contact form route - NOW IT WILL WORK
app.post('/post', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newContact = await Contact.create({ name, email, phone, subject, message });
    res.status(201).json({success: true,    message: "Message sent successfully",   data: newContact});

  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// Newsletter
app.post("/subscribe", (req, res) => {
    console.log("POST /subscribe received");
    console.log(req.body);

    // Get the name and email from the request body
    const { name, email } = req.body;

    // Check if both fields were provided
    if (!name || !email)
        return res.status(400).json({success: false, error: "Name and email are required."});

    // Save the subscriber to the database
    database.insert({ name, email, createdAt: new Date().toISOString() }, (err, newDoc) => {
        if (err)
            return res.status(500).json({
                success: false, error: "Failed to save subscription."
            });

        // Log the saved subscriber to the console
        console.log("Subscriber saved:", newDoc);

        // Send a success response back to the client
        res.json({success: true, message: "Subscription successful!", subscriber: newDoc});
    });
});

// 404
app.use((req, res) => res.status(404).send("<h1>404 - Page Not Found</h1>"));

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));