import React from 'react';
import { Search, Menu } from 'lucide-react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { useIsMobile } from '../hooks/use-mobile';

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery, setShowMobileMenu } = useMusicPlayer();
  const isMobile = useIsMobile();

  return (
    <div className="relative mb-6 animate-fade-in flex items-center">
      {isMobile && (
        <button
          onClick={() => setShowMobileMenu(true)}
          className="mr-3 p-2 rounded-full hover:bg-white/10"
        >
          <Menu size={20} className="text-white" />
        </button>
      )}
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search Song, Artist"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-white/30"
        />
      </div>
    </div>
  );
};

export default SearchBar;