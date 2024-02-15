const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Define a route to proxy requests to the WordPress API for posts
app.get('/wp-api/posts', async (req, res) => {
  try {
    const response = await fetch('https://dev.relationalearning.com/wp-json/wp/v2/posts');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a route to proxy requests to the WordPress API for media
app.get('/wp-api/media/:id', async (req, res) => {
  const { id } = req.params; // Get the media ID from the request parameters
  try {
    const response = await fetch(`https://dev.relationalearning.com/wp-json/wp/v2/media/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error proxying request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
