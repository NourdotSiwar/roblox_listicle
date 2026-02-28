import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import gamesData from '../data/games.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(gamesData)
})

router.get('/:gameId', (req, res) => {
  const id = parseInt(req.params.gameId)
  const game = gamesData.find(g => g.id === id)

  if (!game) {
    return res.status(404).sendFile(
      path.join(__dirname, '../public/404.html')
    )
  }

  res.sendFile(
    path.join(__dirname, '../public/game.html')
  )
})

export default router