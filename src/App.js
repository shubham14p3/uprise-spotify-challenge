import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Overview, Featured, Playlist, Navbar } from './Components'
import fetchAccessToken, { fetchData, fetchFollowers, extractArtists } from './fetchdata'
import main from './css/main.module.css'
import config from './config.json'

export default class App extends PureComponent {
    constructor(props) {
        super()
        this.config = config
        this.state = {}
    }

    render() {
        return <div className={main.container}>
            <Router>
                <Navbar artists={this.state.artists} />
                <Switch>
                    <Route exact path="/"> <Overview
                        displayName={this.state.display_name}
                        images={this.state.images}
                        followers={this.state.followers}
                        profile={this.state.profileUrl}
                    />
                    </Route>
                    <Route path="/playlist"> <Playlist
                        playlists={this.state.playlists}
                    /> </Route>
                    <Route path="/featured"> <Featured />
                    </Route>
                </Switch>
            </Router>
        </div>
    }

    // Fetch access token and Get data
    async componentDidMount() {
        let accessToken = (await (await fetchAccessToken()).json()).access_token
        this.config.accessToken = accessToken

        let data = (await fetchData(this.config)).data.user
        let { followers: { total }, external_urls: { spotify } } = (await (await fetchFollowers(data.href)).json())
        
        data.followers = total
        data.profileUrl = spotify
        data.artists = extractArtists(data)

        this.setState({ ...data })
    }
} 