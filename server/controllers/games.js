import { pool } from '../config/database.js'

const getGames = async (req, res) => {
      try {
    const results = await pool.query(`
      SELECT 
        id,
        gamename AS "gameName",
        image,
        gamedescription AS "gameDescription",
        genre,
        subgenre AS "subGenre",
        serversize AS "serverSize",
        created,
        visits
      FROM games
      ORDER BY id ASC
    `)
            res.status(200).json(results.rows)
      } catch (err) {
            console.error(err)
            res.status(409).json( { error: err.message } )
      }
} 

export default { getGames }