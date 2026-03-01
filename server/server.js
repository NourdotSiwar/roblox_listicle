import express from 'express'
import './config/dotenv.js'
import gamesRouter from './routes/games.js'

const app = express()

app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Roblox Listicle API</h1>')
})

const PORT = process.env.PORT || 3002
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})

app.use('/games', gamesRouter)