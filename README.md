# Book Exchange Backend Service

## Overview

This backend service provides an API to manage a collection of books in a MongoDB database. The collection includes fields such as `title`, `author`, `description`, `price`, and `status`.

## Database Setup

To set up the database, use the following MongoDB commands to insert dummy data into the `books` collection in the `app` database.

```javascript
use('app');

db.books.insertMany([
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A novel set in the Roaring Twenties.",
    "price": 10.99,
    "status": "available"
  },
  {
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian social science fiction novel.",
    "price": 8.99,
    "status": "available"
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A novel about racial injustice in the Deep South.",
    "price": 12.99,
    "status": "checked out"
  },
  {
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "description": "A novel about the voyage of the whaling ship Pequod.",
    "price": 15.50,
    "status": "available"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "description": "A romantic novel of manners.",
    "price": 9.99,
    "status": "checked out"
  }
]);