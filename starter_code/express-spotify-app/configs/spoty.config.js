var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = '763db0ca4e0040b0bac99a9786b87c4c',
    clientSecret = 'c7acc899f7364f129b04cf4160f3b938';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then((data) => {
      console.log('ok!')
    spotifyApi.setAccessToken(data.body['access_token']);
  } )
  .catch(err => {
    console.log('Something went wrong when retrieving an access token', err);
  });

  module.exports = spotifyApi;