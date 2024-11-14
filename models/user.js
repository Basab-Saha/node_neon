// models/user.js
const { pgTable, serial, text } = require('drizzle-orm/pg-core');
const { password } = require('pg/lib/defaults');

// Define the "users" table
const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
   
    
});

module.exports = { users };
