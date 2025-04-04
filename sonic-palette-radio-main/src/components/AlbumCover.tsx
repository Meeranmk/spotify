
import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

const AlbumCover: React.FC = () => {
  const { currentTrack } = useMusicPlayer();

  if (!currentTrack) {
    return (
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-64 h-64 bg-gray-800 rounded-lg animate-pulse-slow album-shadow"></div>
        <div className="mt-6 w-48 h-8 bg-gray-800 rounded animate-pulse-slow"></div>
        <div className="mt-2 w-32 h-6 bg-gray-800 rounded animate-pulse-slow"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center animate-fade-in">
      <img 
        src={currentTrack.thumbnail} 
        alt={currentTrack.title} 
        className="w-64 h-64 object-cover rounded-lg album-shadow"
      />
      <h2 className="text-2xl font-bold mt-6 text-white">{currentTrack.title}</h2>
      <p className="text-gray-400">{currentTrack.artistName}</p>
    </div>
  );
};

export default AlbumCover;
