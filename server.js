const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/articles', require('./routes/api/articles'));
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/quotes', require('./routes/api/quotes'));
app.use('/api/toolatetoasks', require('./routes/api/toolatetoasks'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Yay, server started on port ${PORT}!`));
