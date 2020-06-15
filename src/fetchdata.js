import config from './config.json'
import { SpotifyGraphQLClient } from 'spotify-graphql'
const url = "https://accounts.spotify.com/api/token"

// Fetch access token from url
export default function fetchAccessToken() {

  const token = btoa(config.clientId + ':'+  config.clientSecret)

  var promise = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + token
    },
    body: "grant_type=client_credentials"
  })

  return promise
}

// Fetch data of chilled-cow album
export function fetchData(credentials) {

  var promise = SpotifyGraphQLClient(credentials).query(`{
            user(id:"chilledcow"){
              id
              display_name
              href
              images{
                url
              }
              playlists{
                id
                description
                href
                name
                images{
                  url
                }
                tracks{
                  track{
                    artists{
                      name
                    }
                  }
                }
              }
            }
    }`)

  return promise
}

// Fetch followers data from link provided in href from above
export function fetchFollowers(href) {

  var promise = fetch(href)
  return promise
}

// Extract artists data 
export function extractArtists(data) {

  let artists = [];

  data.playlists.forEach(playlist => {
    playlist.tracks.forEach(eachTrack => {
      eachTrack.track.artists.forEach(artist => {

        if (artists.indexOf(artist.name) < 0) {
          artists.push(artist.name)
        }
        
      })
    })
  })

  return artists
}