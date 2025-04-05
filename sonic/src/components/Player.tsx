
import React, { useCallback, useEffect, useState } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Menu
} from 'lucide-react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { Slider } from "@/components/ui/slider";

const Player: React.FC = () => {
  const { 
    currentTrack, 
    isPlaying, 
    currentTime, 
    duration, 
    volume,
    togglePlayPause, 
    nextTrack, 
    prevTrack, 
    setProgress,
    setVolume,
    setShowMobileMenu
  } = useMusicPlayer();

  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleMute = useCallback(() => {
    if (isMuted) {
      setVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
    }
    setIsMuted(!isMuted);
  }, [isMuted, volume, previousVolume, setVolume]);

  useEffect(() => {
    if (volume === 0 && !isMuted) {
      setIsMuted(true);
    } else if (volume > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [volume, isMuted]);

  return (
    <div className="p-4 glass-effect rounded-lg animate-fade-in">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">       
          {currentTrack && (
            <>
              <div className="w-12 h-12 rounded-md overflow-hidden mr-3">
                <img 
                  src={currentTrack.thumbnail} 
                  alt={currentTrack.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mr-4 text-left">
                <p className="text-sm font-medium text-white truncate max-w-[120px] md:max-w-[200px]">
                  {currentTrack.title}
                </p>
                <p className="text-xs text-gray-400 truncate max-w-[120px] md:max-w-[200px]">
                  {currentTrack.artistName}
                </p>
              </div>
            </>
          )}
        </div>
        
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center justify-center mb-2">
            <button 
              onClick={prevTrack}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <SkipBack size={20} className="text-white" />
            </button>
            
            <button 
              onClick={togglePlayPause}
              className="p-2 mx-4 rounded-full hover:bg-white/10 transition-colors"
            >
              {isPlaying ? (
                <Pause size={32} className="text-white" />
              ) : (
                <Play size={32} className="text-white" />
              )}
            </button>
            
            <button 
              onClick={nextTrack}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <SkipForward size={20} className="text-white" />
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="text-xs text-gray-400 mr-2 w-8 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 mx-2">
              <Slider
                value={[currentTime]}
                min={0}
                max={duration || 1}
                step={0.1}
                onValueChange={(value) => setProgress(value[0])}
                className="cursor-pointer"
              />
            </div>
            <span className="text-xs text-gray-400 ml-2 w-8">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center mt-4 md:mt-0 ml-0 md:ml-4 w-full md:w-auto justify-end">
          <button 
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isMuted ? (
              <VolumeX size={20} className="text-white" />
            ) : (
              <Volume2 size={20} className="text-white" />
            )}
          </button>
          
          <div className="w-24 ml-2">
            <Slider
              value={[volume * 100]}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setVolume(value[0] / 100)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
