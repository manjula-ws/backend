// netlify/functions/fetch-data.js

const axios = require('axios'); 

exports.handler = async function(event, context) {
  try {
    const apiResponse = await axios.get('https://api.beehiiv.com/v2/publications/pub_1eae5826-7416-4d6c-acd3-a58b2964b78b/subscriptions', {
      headers: {
        'Authorization': 'Bearer 7n1r7124qgAfpdQL9TGHUIyio1sWmzupPK5hLYK0SHfpI3D6cMn5vncziO5GJroy',
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(apiResponse.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong' }),
    };
  }
};
