const express = require('express')
const cors = require('cors');
const connectDB = require('./config/mongodb');
require('dotenv').config();


const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

const PORT = process.env.PORT || 8080;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening on http://localhost:${PORT}`);
    });

})