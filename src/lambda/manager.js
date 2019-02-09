import axios from 'axios';

exports.handler = (event, context, callback) => {
    const username = JSON.parse(event.body).username;
   
    axios.get(`https://api.github.com/users/${username}`)
    .then((response) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(response.data),
          });
    })
    .catch((error) => {
        callback(null, {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
          });
    })
};