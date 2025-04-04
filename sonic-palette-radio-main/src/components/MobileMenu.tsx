
import React from 'react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import Sidebar from './Sidebar';
import { X } from 'lucide-react';

const MobileMenu: React.FC = () => {
  const { showMobileMenu, setShowMobileMenu } = useMusicPlayer();

  if (!showMobileMenu) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0 overflow-hidden">
        <div className="fixed inset-y-0 left-0 w-full max-w-xs flex">
          <div className="relative w-full bg-sidebar-background animate-slide-in">
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
              onClick={() => setShowMobileMenu(false)}
            >
              <X size={20} className="text-white" />
            </button>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
