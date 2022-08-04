const express = require('express')
require('dotenv').config()
require('./database')
const User = require('./model')

const PORT = 9999;

const app = express()
app.use(express.json())

app.get("/", async (req,res)=> {

    const user = await User.find()

    res.status(200).json({
        success:true,
        message:user
    })
})

app.post('/', (req,res)=> {
    const {name, contact} = req.body;

    const user = new User({name, contact})

    user.save()

    res.status(200).json({
        success: true, 
        message: user
    })
})

app.listen(PORT, (req,res)=> {
    console.log(`The server is live on http://localhost:${PORT}`)
})