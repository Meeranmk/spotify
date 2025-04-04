
import React from 'react';
import { Track } from '../data/music';
import { MoreHorizontal, PlayCircle } from 'lucide-react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TrackListProps {
  title: string;
}

const TrackList: React.FC<TrackListProps> = ({ title }) => {
  const { 
    filteredTracks, 
    currentTrack, 
    playTrack, 
    isPlaying, 
    favorites, 
    recentlyPlayed,
    toggleFavorite, 
    isFavorite,
    activeTab
  } = useMusicPlayer();

  // Determine which tracks to display based on activeTab
  const getDisplayTracks = () => {
    switch (activeTab) {
      case 'favourites':
        return favorites;
      case 'recently-played':
        return recentlyPlayed;
      default:
        return filteredTracks;
    }
  };

  const displayTracks = getDisplayTracks();

  const formatDuration = (duration: string) => {
    return duration;
  };

  return (
    <div className="flex-1 h-full overflow-y-auto animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      
      {displayTracks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400">
          <p className="text-lg">
            {activeTab === 'favourites' 
              ? 'No favorites yet. Add some!' 
              : activeTab === 'recently-played' 
                ? 'No recently played tracks yet'
                : 'No tracks found'}
          </p>
        </div>
      ) : (
        <div className="space-y-1">
          {displayTracks.map((track) => (
            <div 
              key={track.id}
              className={`p-2 rounded-md flex items-center track-hover cursor-pointer transition-all ${
                currentTrack?.id === track.id ? 'active-track' : ''
              }`}
              onClick={() => playTrack(track)}
            >
              <div className="w-10 h-10 rounded-md overflow-hidden mr-3 flex-shrink-0">
                <img 
                  src={track.thumbnail} 
                  alt={track.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{track.title}</p>
                <p className="text-xs text-gray-400 truncate">{track.artistName}</p>
              </div>
              <div className="text-xs text-gray-400 mx-4">
                {formatDuration(track.duration)}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MoreHorizontal size={16} className="text-gray-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-900 border-gray-700 text-white w-48">
                  <DropdownMenuItem 
                    className="cursor-pointer hover:bg-white/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(track);
                    }}
                  >
                    {isFavorite(track.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackList;
