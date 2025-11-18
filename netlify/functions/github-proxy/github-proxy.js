const axios = require("axios");

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
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
