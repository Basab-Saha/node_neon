// db.js
require('dotenv').config();

const { drizzle } = require('drizzle-orm/node-postgres');

// Connect to the database using Neon PostgreSQL URL
const db = drizzle(process.env.DATABASE_URL);

module.exports = db;
