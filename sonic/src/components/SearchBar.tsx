
import React from 'react';
import { Search } from 'lucide-react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useMusicPlayer();

  return (
    <div className="relative mb-6 animate-fade-in">
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
  );
};

export default SearchBar;
