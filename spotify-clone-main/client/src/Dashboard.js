import { useState, useEffect } from "react"
import useAuth from "./useAuth"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import { Container, Form } from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"

import nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import React from "react";
import Logo from "./assets/Logo.jpg";
import './SearchNavbar.css';
import {BiHomeAlt,BiSearchAlt,BiRadio,BiCoffee} from 'react-icons/bi';


const spotifyApi = new SpotifyWebApi({
  clientId: "7d711f19e40c4f49886786aea6919a45",
})

export default function Dashboard({ code }) {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get(`https://beatbot-live-spotify.onrender.com/lyrics`, {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        console.log(res.data.lyrics);
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

  return (
    <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
      <Navbar variant="dark">
        <div className="navbar bg-base-100 bg-opacity-60 backdrop-blur z-50">
      <div className="lol">
        
          <img src={Logo} className="w-8 h-8 mx-1" />
          <span>Music Player</span>
      </div>
    </div>
    <nav>
    <ul>
      <div></div><li><a href="https://beatbot-live.vercel.app/"><BiHomeAlt size={50} /><span>Home</span></a></li>
      <li><a href="http://localhost:3000/" className="active"><BiSearchAlt size={50}/><span>Search</span></a></li>
      <li><a href="http://127.0.0.1:5000/"><BiRadio size={50}/><span>Mood</span></a></li>
      <li><a href="https://wave-music-player-psi.vercel.app/"><BiCoffee size={50}/><span>Chill</span></a></li>
      
    </ul>
  </nav>
      </Navbar>
      <Form.Control
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div className="text-center" style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </Container>
  )
}
