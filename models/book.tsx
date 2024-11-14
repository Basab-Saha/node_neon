// models/user.js
const { pgTable, serial, text , integer , timestamp } = require('drizzle-orm/pg-core');


// Define the "users" table
const books = pgTable('books', {
    id: serial('id').primaryKey(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
   
    
});

module.exports = { books };
