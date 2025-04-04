
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Player from './Player';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import MobileMenu from './MobileMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentTrack, showMobileMenu, setShowMobileMenu } = useMusicPlayer();

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && showMobileMenu) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showMobileMenu, setShowMobileMenu]);

  // Create dynamic background gradient based on current track
  const backgroundStyle = currentTrack
    ? { 
        backgroundImage: `linear-gradient(to bottom right, ${currentTrack.colors.from}, ${currentTrack.colors.via}, ${currentTrack.colors.to})`,
      }
    : {};

  return (
    <div 
      className="min-h-screen flex flex-col bg-background transition-colors duration-1000"
      style={backgroundStyle}
    >
      <MobileMenu />
      
      <div className="flex-1 flex flex-col md:flex-row">
        <div className="hidden md:block md:w-56 border-r border-white/10">
          <Sidebar />
        </div>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 p-6 overflow-y-auto">
            {children}
          </div>
          
          <div className="p-4">
            <Player />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
