const express = require('express')
const { join } = require('path')
const { exec } = require('child_process')
const login = require('./handlers/login')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(express.static(join(__dirname, '..', 'frontend')))
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '..', 'frontend', 'html', 'index.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(join(__dirname, '..', 'frontend', 'html', 'login.html'))
})
app.post('/login', login)
exec(`xdg-open http://${process.env.HOST}:${process.env.PORT}`)
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Backend is running on port ${process.env.PORT}`)
})