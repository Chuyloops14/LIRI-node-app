require("dotenv").config();
var axios = require('axios');
var moment = require('moment');
var Spotify = require('node-spotify-api');
var keys = require("./keys");



var spotify = new Spotify(keys.spotify);
var userChoice = process.argv[2]

var userInput = process.argv[3]

// console.log (userInput)

if (userChoice == "spotify-this-song"){
  spotify.search({ type:'track', query: userInput,limit:'1'} ,function(err, data){
    // console.log(data.tracks.href.items)
    // console.log(data.tracks.items[0].album.artists[0 ].name)
    console.log(data.tracks.items[0].album.name)
    console.log(data.tracks.items[0].artists[0].name);
    console.log(data.tracks.items[0].preview_url)
    console.log(data.tracks.items[0].name)
});  
}

if (userChoice == "concert-this") {
  axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp")
.then(function (response) {
    console.log(response.data[0].venue.name)
    console.log(response.data[0].venue.city)
    console.log(response.data[0].datetime)

    // handle success
    // console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })  
}



// console.log(userChoice);
// var Spotify = require('node-spotify-api'); ------ this is gonna be put under the command on top