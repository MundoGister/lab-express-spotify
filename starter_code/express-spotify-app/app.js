const PORT = 4000;
const express = require('express');
const app = express();
const hbs = require('hbs');

const spotifyApi = require('./configs/spoty.config');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/artists', (req, res, next) => {
    const artist = req.query.artist;
    console.log(artist);

    spotifyApi.searchArtists(artist)
    .then(data => {
        const artists = data.body.artists.items;
        res.render('artists', {
            artists
        });
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    })
    .catch(err => {
        next(err);
      // ----> 'HERE WE CAPTURE THE ERROR'
    })

   
});



app.listen(PORT, () => console.log(`connected to port ${PORT}`));