
import React from 'react';
import { MusicPlayerProvider } from '../contexts/MusicPlayerContext';
import Layout from '../components/Layout';
import TrackList from '../components/TrackList';
import SearchBar from '../components/SearchBar';
import AlbumCover from '../components/AlbumCover';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

const MusicPlayerContent = () => {
  const { activeTab } = useMusicPlayer();

  const getTitle = () => {
    switch (activeTab) {
      case 'for-you':
        return 'For You';
      case 'top-tracks':
        return 'Top Tracks';
      case 'favourites':
        return 'Favourites';
      case 'recently-played':
        return 'Recently Played';
      default:
        return 'For You';
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full gap-6">
      <div className="w-full md:w-2/3 h-full overflow-hidden">
        <SearchBar />
        <TrackList title={getTitle()} />
      </div>
      
      <div className="hidden md:flex w-1/3 flex-col items-center justify-center">
        <AlbumCover />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <MusicPlayerProvider>
      <Layout>
        <MusicPlayerContent />
      </Layout>
    </MusicPlayerProvider>
  );
};

export default Index;
