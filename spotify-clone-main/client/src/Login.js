import React from "react"
import { Container } from "react-bootstrap"


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=7d711f19e40c4f49886786aea6919a45&response_type=code&redirect_uri=https://beatbot_live-spotify.vercel.app/redirect&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="hero-content text-center text-neutral-content">
      <h1>Search any Songs by clicking here!</h1>
      <a className="btn btn-lg btn-primary" href={AUTH_URL}>
        Search
      </a>
      {' '}
      <a className="btn btn-lg btn-danger" href="https://beatbot-live.vercel.app/">
        Go Back
      </a>
      </div>
    </Container>
  )
}
