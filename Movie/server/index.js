import express from 'express'
import { urlencoded, json } from 'body-parser'
import cors from 'cors'
import { join } from 'path'
import { on } from './db'
import movieRouter from './router/movie_router'

const app = express()
const PORT = process.env.PORT || 3000

app.use(urlencoded({extended: true}))
app.use(cors())
app.use(json())

on('error', (error) => {
    console.error.bind(console, 'MongoDB connection error: '+error)
})

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../public', 'welcome.html'))
})

app.use('/api/movies', movieRouter)

app.listen(PORT, () => console.log(`Server started at post ${PORT}`))

