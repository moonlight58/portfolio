// backend/spotify.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Tes credentials Spotify (à mettre dans .env)
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

router.get('/now-playing', async (req, res) => {
  try {
    // 1. Récupérer un access token
    const tokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      'grant_type=refresh_token&refresh_token=' + REFRESH_TOKEN,
      {
        headers: {
          'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // 2. Récupérer la musique en cours
    const nowPlayingResponse = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      }
    );

    res.json(nowPlayingResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération' });
  }
});

module.exports = router;