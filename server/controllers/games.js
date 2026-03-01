import { pool } from '../config/database.js'

const getGames = async (req, res) => {
      try {

             const { search, genre } = req.query

            let query = `
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
            `

            const values = []

            if (search) {
            query += `
            WHERE 
                  LOWER(gamename) LIKE LOWER($1)
                  OR LOWER(genre) LIKE LOWER($1)
                  OR LOWER(subgenre) LIKE LOWER($1)
            `
            values.push(`%${search}%`)
            }

            query += ` ORDER BY id ASC`

            const results = await pool.query(query, values)

            res.status(200).json(results.rows)
      } catch (err) {
            console.error(err)
            res.status(409).json( { error: err.message } )
      }
} 

export default { getGames }