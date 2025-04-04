 
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Track, musicData } from '../data/music';
import { toast } from 'sonner';

interface MusicPlayerContextProps {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  favorites: Track[];
  recentlyPlayed: Track[];
  searchQuery: string;
  activeTab: 'for-you' | 'top-tracks' | 'favourites' | 'recently-played';
  filteredTracks: Track[];
  playTrack: (track: Track) => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setProgress: (value: number) => void;
  setVolume: (value: number) => void;
  toggleFavorite: (track: Track) => void;
  isFavorite: (trackId: string) => boolean;
  setSearchQuery: (query: string) => void;
  setActiveTab: (tab: 'for-you' | 'top-tracks' | 'favourites' | 'recently-played') => void;
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextProps | undefined>(undefined);

interface MusicPlayerProviderProps {
  children: ReactNode;
}

export const MusicPlayerProvider: React.FC<MusicPlayerProviderProps> = ({ children }) => {
  const [tracks] = useState<Track[]>(musicData);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.7);
  const [favorites, setFavorites] = useState<Track[]>([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Track[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'for-you' | 'top-tracks' | 'favourites' | 'recently-played'>('for-you');
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    setAudioElement(audio);

    // Clean up
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('Error parsing favorites from localStorage:', error);
      }
    }
  }, []);

  // Load recently played from sessionStorage
  useEffect(() => {
    const storedRecentlyPlayed = sessionStorage.getItem('recentlyPlayed');
    if (storedRecentlyPlayed) {
      try {
        const parsedRecentlyPlayed = JSON.parse(storedRecentlyPlayed);
        setRecentlyPlayed(parsedRecentlyPlayed);
      } catch (error) {
        console.error('Error parsing recently played from sessionStorage:', error);
      }
    }
  }, []);

  // Handle track change
  useEffect(() => {
    if (audioElement && currentTrack) {
      audioElement.src = currentTrack.musicUrl;
      audioElement.load();
      
      if (isPlaying) {
        audioElement.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      }
      
      // Add to recently played
      addToRecentlyPlayed(currentTrack);
    }
  }, [currentTrack, audioElement]);

  // Handle play/pause
  useEffect(() => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.play().catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying, audioElement]);

  // Update time and duration
  useEffect(() => {
    if (!audioElement) return;

    const updateTime = () => setCurrentTime(audioElement.currentTime);
    const updateDuration = () => setDuration(audioElement.duration);
    const handleEnded = () => nextTrack();

    audioElement.addEventListener('timeupdate', updateTime);
    audioElement.addEventListener('durationchange', updateDuration);
    audioElement.addEventListener('ended', handleEnded);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
      audioElement.removeEventListener('durationchange', updateDuration);
      audioElement.removeEventListener('ended', handleEnded);
    };
  }, [audioElement]);

  // Update volume
  useEffect(() => {
    if (audioElement) {
      audioElement.volume = volume;
    }
  }, [volume, audioElement]);

  // Save favorites to localStorage when changed
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save recently played to sessionStorage when changed
  useEffect(() => {
    sessionStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
  }, [recentlyPlayed]);

  // Filter tracks based on search query
  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToRecentlyPlayed = (track: Track) => {
    setRecentlyPlayed(prev => {
      // Remove the track if it already exists in the list
      const filtered = prev.filter(item => item.id !== track.id);
      // Add the track to the beginning of the list and limit to 10 items
      const updated = [track, ...filtered].slice(0, 10);
      return updated;
    });
  };

  const playTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (!currentTrack && tracks.length > 0) {
      playTrack(tracks[0]);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    if (!currentTrack || tracks.length === 0) return;
    
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    playTrack(tracks[nextIndex]);
  };

  const prevTrack = () => {
    if (!currentTrack || tracks.length === 0) return;
    
    const currentIndex = tracks.findIndex(track => track.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    playTrack(tracks[prevIndex]);
  };

  const setProgress = (value: number) => {
    if (audioElement) {
      audioElement.currentTime = value;
      setCurrentTime(value);
    }
  };

  const setVolume = (value: number) => {
    setVolumeState(value);
  };

  const toggleFavorite = (track: Track) => {
    const isFav = favorites.some(item => item.id === track.id);
    
    if (isFav) {
      setFavorites(prev => prev.filter(item => item.id !== track.id));
      toast("Removed from favorites");
    } else {
      setFavorites(prev => [...prev, track]);
      toast("Added to favorites");
    }
  };

  const isFavorite = (trackId: string) => {
    return favorites.some(track => track.id === trackId);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        tracks,
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        volume,
        favorites,
        recentlyPlayed,
        searchQuery,
        activeTab,
        filteredTracks,
        playTrack,
        togglePlayPause,
        nextTrack,
        prevTrack,
        setProgress,
        setVolume,
        toggleFavorite,
        isFavorite,
        setSearchQuery,
        setActiveTab,
        showMobileMenu,
        setShowMobileMenu
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};
