const axios = require("axios");

// Cache storage
const cache = {
  moonlight58: { data: null, timestamp: 0 },
  "grothlin-iut90": { data: null, timestamp: 0 },
};

// Cache duration in milliseconds (1 minute)
const CACHE_DURATION = 60 * 1000;

exports.handler = async (event) => {
  const { username } = event.queryStringParameters;
  
  const tokens = {
    moonlight58: process.env.TOKEN_API_GITHUB_MOONLIGHT58,
    "grothlin-iut90": process.env.TOKEN_API_GITHUB_GROTHLIN_IUT90,
  };
  
  const token = tokens[username];
  
  if (!token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid username" }),
    };
  }

  // Check if cache exists and is still valid
  const now = Date.now();
  const cachedData = cache[username];
  
  if (cachedData.data && (now - cachedData.timestamp) < CACHE_DURATION) {
    console.log(`Returning cached data for ${username}`);
    return {
      statusCode: 200,
      headers: {
        "X-Cache": "HIT",
        "X-Cache-Age": Math.floor((now - cachedData.timestamp) / 1000),
      },
      body: JSON.stringify(cachedData.data),
    };
  }

  // Cache miss or expired - fetch fresh data
  try {
    console.log(`Fetching fresh data for ${username}`);
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    // Update cache
    cache[username] = {
      data: response.data,
      timestamp: now,
    };

    return {
      statusCode: 200,
      headers: {
        "X-Cache": "MISS",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // If API fails but we have stale cache, return it
    if (cachedData.data) {
      console.log(`API failed, returning stale cache for ${username}`);
      return {
        statusCode: 200,
        headers: {
          "X-Cache": "STALE",
          "X-Cache-Age": Math.floor((now - cachedData.timestamp) / 1000),
        },
        body: JSON.stringify(cachedData.data),
      };
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
