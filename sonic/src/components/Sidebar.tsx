
import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab, setShowMobileMenu } = useMusicPlayer();

  const handleTabChange = (tab: 'for-you' | 'top-tracks' | 'favourites' | 'recently-played') => {
    setActiveTab(tab);
    setShowMobileMenu(false);
  };

  return (
    <div className="bg-sidebar-background h-full p-4 flex flex-col animate-fade-in">
      <div className="flex items-center mb-8 ml-2">
        <div className="">	
          <img width="130" height="40" className="logo" alt="spotify logo" src="https://spotify-seven-silk.vercel.app/assets/Logo-r4I3k8ZP.svg"/>
        </div>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <button 
              onClick={() => handleTabChange('for-you')}
              className={`w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
                activeTab === 'for-you' 
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              For You
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleTabChange('top-tracks')}
              className={`w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
                activeTab === 'top-tracks' 
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Top Tracks
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleTabChange('favourites')}
              className={`w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
                activeTab === 'favourites' 
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Favourites
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleTabChange('recently-played')}
              className={`w-full text-left px-4 py-2 rounded text-sm font-medium transition-colors ${
                activeTab === 'recently-played' 
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              Recently Played
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
