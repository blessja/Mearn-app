const path = require('path')
const express = require('express')
const colors = require("colors");
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

// connect to database
connectDB()

// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)

// console.log(process.env.MONGO_URI)

const port = process.env.PORT  || 5000

const app = express()

// adding middleware

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use(errorHandler)

app.use('/api/goals', require('./routes/goalRoutes'))

app.use('/api/users', require('./routes/userRoutes'))

// serve frontend

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}



app.listen(port, () => console.log(`Port is running ${port}`))
