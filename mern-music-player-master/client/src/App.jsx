import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import UploadSongForm from "./Components/UploadSongForm";
import Home from "./Components/Home";
import Player from "./Components/Player";
import Login from "./Components/Login";
import Premium from "./Components/Premium";
import { PlayerContextProvider } from "./Contexts/PlayerContext";

const App = () => {
  return (
    <div className="h-[100dvh]">
      <BrowserRouter>
        <PlayerContextProvider>
          <Navbar />
          <div className="main-content -mt-16 -mb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<UploadSongForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/gopremium" element={<Premium />} />
            </Routes> 
          </div>
          <Player />
        </PlayerContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
