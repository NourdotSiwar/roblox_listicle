import { pool } from './database.js';
import './dotenv.js';
import gamesData from '../data/games.js';

const createGamesTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS games;

    CREATE TABLE IF NOT EXISTS games (
      id SERIAL PRIMARY KEY,
      gameName TEXT NOT NULL,
      image TEXT NOT NULL,
      gameDescription TEXT NOT NULL,
      genre TEXT NOT NULL,
      subGenre TEXT NOT NULL,
      serverSize INTEGER NOT NULL,
      created TEXT NOT NULL,
      visits TEXT NOT NULL
    );
  `;

  try {
    await pool.query(createTableQuery);
    console.log('🎉 games table created successfully');
  } catch (err) {
    console.error('⚠️ error creating games table', err);
  }
};

const seedGamesTable = async () => {
  await createGamesTable();

  for (const game of gamesData) {
    const insertQuery = `
      INSERT INTO games (gameName, image, gameDescription, genre, subGenre, serverSize, created, visits)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `;

    const values = [
      game.gameName,
      game.image,
      game.gameDescription,
      game.genre,
      game.subGenre,
      game.serverSize,
      game.created,
      game.visits,
    ];

    try {
      await pool.query(insertQuery, values);
      console.log(`✅ ${game.gameName} added successfully`);
    } catch (err) {
      console.error('⚠️ error inserting game', err);
    }
  }
};

seedGamesTable();