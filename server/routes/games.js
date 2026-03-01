import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import GamesController from '../controllers/games.js'
import { pool } from '../config/database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GamesController.getGames)

router.get('/:gameId', async (req, res) => {

  try {
      const id = parseInt(req.params.gameId)

      const result = await pool.query(
      'SELECT * FROM games WHERE id = $1',
      [id]
    )

      if (result.rows.length === 0) {
      return res.status(404).sendFile(
        path.join(__dirname, '../public/404.html')
      )
    }

      res.sendFile(
      path.join(__dirname, '../public/game.html')
      )

  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router