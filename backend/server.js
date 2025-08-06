import express from 'express'
import dotenv from 'dotenv'
import { join } from 'path'
dotenv.config()
const app = express()
app.use(express.static(join(__dirname, '..', 'frontend')))
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '..', 'frontend', 'html', 'index.html'))
})
app.listen(process.env.PORT, () => {
    console.log(`Backend is running on port ${process.env.PORT}`)
})