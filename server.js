const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/suggestions', require('./routes/api/suggestions'));
app.use('/api/articles', require('./routes/api/articles'));
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/quotes', require('./routes/api/quotes'));
app.use('/api/toolatetoasks', require('./routes/api/toolatetoasks'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Yay, server started on port ${PORT}!`));
