import React from "react";
import { Link } from "react-router-dom";
import SongsList from "./SongsList";
import {FaCrown} from 'react-icons/fa';


const Home = () => {
  return (
    <div className="flex mt-16 flex-col">
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl lg:text-5xl font-bold">
              Add Your Favourite Songs
            </h1>
            <p className="mb-5">
              Dive into the world of independant artists and music
            </p>
            <Link
              to="/upload"
              className="btn btn-accent rounded-full btn-outline px-6"
            >
              Upload New Song
            </Link>
          </div>
        </div>
      </div>
      <Link
        to="/gopremium"
        className="fixed right-6 z-50 drop-shadow-2xl bottom-24 btn btn-secondary btn-circle btn-lg"
      >
       <FaCrown />
      </Link>
      <SongsList />
    </div>
  );
};

export default Home;
