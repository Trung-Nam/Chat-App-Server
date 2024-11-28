const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./src/config/connectDB')
const router = require('./src/routes/index')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./src/socket/index')

// const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 8080

app.get('/', (request, response) => {
    response.json({
        message: "Server running at " + PORT
    })
})

//api endpoints
app.use('/api', router)

connectDB().then(() => {
    server.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    })
})