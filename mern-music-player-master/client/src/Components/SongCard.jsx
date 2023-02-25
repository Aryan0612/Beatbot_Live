import React from "react";
import { usePlayerContext } from "../Contexts/PlayerContext";
import {motion} from 'framer-motion'

const SongCard = ({ name, artist, id }) => {
  const { setSongInPlayer } = usePlayerContext();
  return (
    <motion.div initial={{y:500}} animate={{y:0}} transition={{duration:0.6}}  whileInView={{ y: 0, opacity: 1 }}>
    <div className="card w-96 max-h-48 bg-base-100 shadow-xl image-full">
       
      <figure>
        <img
          className="object-cover w-full h-full"
          src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{artist}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary rounded-full"
            onClick={() => setSongInPlayer(id)}
          >
            Play Now
          </button>
        </div>
      </div>
      
    </div>
    </motion.div>
 
  );
};

export default SongCard;
