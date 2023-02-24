import React, { useEffect, useState } from "react";
import { usePlayerContext } from "../Contexts/PlayerContext";
import Loader from "./Loader";
import SongCard from "./SongCard";
import {motion} from 'framer-motion';

const SongsList = () => {
  const { getAllSongs, songs } = usePlayerContext();

  useEffect(() => {
    getAllSongs();
  }, []);

  return (
    
    <div className="my-16 p-8 flex justify-center flex-wrap gap-10">
      {songs ? (
        songs.map((song) => (
          <motion.div initial={{y:-100}} animate={{y:0}} transition={{duration:0.6}}>
          <SongCard
            key={song._id}
            id={song._id}
            name={song.name}
            artist={song.artist}
          />
          </motion.div>
        ))
      ) : (
        <Loader />
      )}
    </div>
    
  );
};

export default SongsList;
