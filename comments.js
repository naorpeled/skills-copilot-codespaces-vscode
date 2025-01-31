// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create comments array
const comments = [
    {id: 1, author: 'John Doe', text: 'Hello, World!'},
    {id: 2, author: 'Jane Doe', text: 'Hello, World!'},
    {id: 3, author: 'John Smith', text: 'Hello, World!'},
    {id: 4, author: 'Jane Smith', text: 'Hello, World!'},
    {id: 5, author: 'John Brown', text: 'Hello, World!'},
];

// Handle GET request
app.get('/comments', (req, res) => {
    res.send(comments);
});