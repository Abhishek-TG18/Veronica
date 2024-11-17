const express = require('express');
const app = express();
require('dotenv');

const authRouter = require('./router/authRoute.js');
const databaseconnect = require('./config/databaseConfig.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// connect to db
databaseconnect();

app.use(express.json()); 
app.use(cookieParser()); 

const corsOptions = {
  origin: `${process.env.CLIENT_URL}`, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true 
};
app.use(cors(corsOptions));

// Auth router
app.use('/api/auth', authRouter);

app.use('/', (req, res) => {
  res.status(200).json({ data: 'JWTauth server ;)' });
});

module.exports = app;
