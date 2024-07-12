const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files
app.use('/FrontEnd', express.static(path.join(__dirname, 'FrontEnd')));
app.use(express.static(path.join(__dirname, 'public')));


// MongoDB Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'PORTFOLIO'; // Updated database name

// Connect to MongoDB
MongoClient.connect(url)
  .then(client => {
    console.log('Connected successfully to MongoDB');
    const db = client.db(dbName);
    const contactCollection = db.collection('Contact'); // Collection named Contact

    // Contact route
    app.post('/api/contact', (req, res) => {
      const newContact = req.body;
      contactCollection.insertOne(newContact)
        .then(result => {
          console.log('Message sent successfully');
          res.json({ success: true });
        })
        .catch(err => {
          console.error('Error sending message', err);
          res.status(500).json({ error: 'Internal Server Error' });
        });
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });

  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });
