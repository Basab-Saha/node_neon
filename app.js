// app.js
const express = require('express');
const path = require('path');
const db = require('./db');
const { users } = require('./models/user.js');
const app = express();


const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3001' // The URL where your frontend is running
}));

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Render the form
app.get('/', (req, res) => {
    res.send('Backend Server is Running 🖥️');
});

// Handle form submission
app.post('/add-user', async (req, res) => {
    console.log('Request body:', req.body);  // Log request body
    const { name, email } = req.body;
    if (!name || !email ) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    try {
        await db.insert(users).values({ name, email }).execute();
        res.send('User added successfully!');
    } catch (error) {
        res.status(500).json({ error: 'Error adding user: ' + error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
