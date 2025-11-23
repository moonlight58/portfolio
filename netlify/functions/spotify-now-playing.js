export default async (req, context) => {
  const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
  const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

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

  // Vérifier que les variables d'environnement sont définies
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    console.error('Variables d\'environnement Spotify manquantes:', {
      hasClientId: !!SPOTIFY_CLIENT_ID,
      hasClientSecret: !!SPOTIFY_CLIENT_SECRET,
      hasRefreshToken: !!SPOTIFY_REFRESH_TOKEN,
    });
    
    return new Response(
      JSON.stringify({
        error: 'Variables d\'environnement Spotify manquantes',
        is_playing: false,
      }),
      { headers, status: 500 }
    );
  }

  try {
    // Étape 1: Obtenir un access token
    const auth = Buffer.from(
      `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
    ).toString('base64');

    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text();
      console.error('Erreur lors de la récupération du token:', tokenResponse.status, errorData);
      
      return new Response(
        JSON.stringify({
          error: 'Impossible de récupérer le token Spotify',
          is_playing: false,
        }),
        { headers, status: 401 }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Étape 2: Récupérer la piste en cours de lecture
    const playerResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    // Si rien n'est en cours de lecture (204 No Content)
    if (playerResponse.status === 204) {
      return new Response(
        JSON.stringify({
          is_playing: false,
          item: null,
        }),
        { headers, status: 200 }
      );
    }

    if (!playerResponse.ok) {
      console.error('Erreur Spotify API:', playerResponse.status);
      return new Response(
        JSON.stringify({
          is_playing: false,
          item: null,
        }),
        { headers, status: 200 }
      );
    }

    const playerData = await playerResponse.json();

    // Si c'est une publicité ou autre
    if (!playerData.item) {
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
      is_playing: playerData.is_playing,
      item: {
        name: playerData.item.name,
        artists: playerData.item.artists,
        album: playerData.item.album,
        external_urls: playerData.item.external_urls,
        duration_ms: playerData.item.duration_ms,
        progress_ms: playerData.progress_ms,
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
