const express = require('express')
const cors = require('cors')
const connectDB = require('./src/config/connectDB')
const router = require('./src/routes/index')
const app = express();
require('dotenv').config()

// const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())

const PORT = process.env.PORT || 8080

app.get('/',(request,response)=>{
    response.json({
        message : "Server running at " + PORT
    })
})

//api endpoints
app.use('/api',router)

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening on http://localhost:${PORT}`);
    })
})