import fetch from 'node-fetch';

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

let accessToken = null;
let tokenExpiry = 0;

async function getAccessToken() {
  // Si le token est encore valide, le retourner
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  const auth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=refresh_token&refresh_token=' + SPOTIFY_REFRESH_TOKEN,
    });

    const data = await response.json();
    accessToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in * 1000);
    return accessToken;
  } catch (error) {
    console.error('Erreur lors de la récupération du token Spotify:', error);
    throw error;
  }
}

export default async (req, context) => {
  // CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Gérer les requêtes OPTIONS pour CORS
  if (req.method === 'OPTIONS') {
    return new Response('OK', { headers, status: 200 });
  }

  try {
    const token = await getAccessToken();

    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    // Si rien n'est en cours de lecture
    if (response.status === 204 || !response.ok) {
      return new Response(
        JSON.stringify({
          is_playing: false,
          item: null,
        }),
        { headers, status: 200 }
      );
    }

    const data = await response.json();

    // Si c'est une publicité ou un podcast
    if (!data.item) {
      return new Response(
        JSON.stringify({
          is_playing: false,
          item: null,
        }),
        { headers, status: 200 }
      );
    }

    // Formater la réponse
    const formattedData = {
      is_playing: data.is_playing,
      item: {
        name: data.item.name,
        artists: data.item.artists,
        album: data.item.album,
        external_urls: data.item.external_urls,
        duration_ms: data.item.duration_ms,
        progress_ms: data.progress_ms,
      },
    };

    return new Response(JSON.stringify(formattedData), {
      headers,
      status: 200,
    });
  } catch (error) {
    console.error('Erreur Spotify:', error);
    return new Response(
      JSON.stringify({
        error: 'Erreur lors de la récupération des données Spotify',
        is_playing: false,
      }),
      { headers, status: 500 }
    );
  }
}
