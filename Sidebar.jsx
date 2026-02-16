import React, { useState } from 'react';
import {
  LayoutGrid,
  PlayCircle,
  MessageSquare,
  Users,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

import Logo from './components/ui/Logo';

import { useAuth } from './context/AuthContext';

const SidebarItem = ({ icon: Icon, imageUrl, active, onClick }) => (
  <div
    onClick={onClick}
    className="relative flex items-center justify-center w-full py-4 cursor-pointer group"
  >
    {/* Active Background Indicator */}
    <div className={`
      absolute w-12 h-12 rounded-2xl transition-all duration-300
      ${active ? 'bg-brand-yellow scale-100' : 'bg-transparent scale-0 group-hover:scale-90 group-hover:bg-white/10'}
    `} />

    {/* Content: Icon or Image */}
    {imageUrl ? (
      <img
        src={imageUrl}
        alt="Profile"
        className={`
          relative z-10 w-8 h-8 rounded-full object-cover border-2 transition-all duration-300
          ${active ? 'border-brand-black' : 'border-transparent group-hover:border-white'}
        `}
      />
    ) : (
      <Icon className={`
        relative z-10 w-6 h-6 transition-colors duration-300
        ${active ? 'text-brand-black' : 'text-gray-400 group-hover:text-white'}
      `} />
    )}
  </div>
);

const Sidebar = ({ activeView, onNavigate, onLogout }) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'paths', icon: LayoutGrid, label: 'Paths' },
    { id: 'dashboard', icon: PlayCircle, label: 'Dashboard' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'community', icon: Users, label: 'Community' },
    // Profile item will be handled specially or we can just pass the image url here if we want it in the list
    { id: 'profile', imageUrl: user?.profile?.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix", label: 'Profile' },
  ];

  const handleNavigate = (id) => {
    if (onNavigate) onNavigate(id);
    setIsOpen(false);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    setIsOpen(false);
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-brand-black text-white rounded-lg shadow-neo-sm hover:bg-gray-800 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Aside */}
      <aside className={`
        fixed left-0 top-0 h-screen w-20 bg-brand-black flex flex-col items-center py-8 justify-between z-50 shadow-neo transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        {/* Logo Area */}
        <div className="mb-10 w-full px-4 flex justify-center pt-12 md:pt-0">
          <Logo className="w-10 h-10" showText={false} />
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-4 w-full flex-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              imageUrl={item.imageUrl}
              active={activeView === item.id || (activeView === 'detail' && item.id === 'dashboard') || (activeView && activeView.startsWith('module') && item.id === 'dashboard')}
              onClick={() => handleNavigate(item.id)}
            />
          ))}
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-8 border-t border-white/10 w-full">
          <SidebarItem
            icon={LogOut}
            active={false}
            onClick={handleLogout}
          />
        </div>
      </aside>
    </>
  );
};


export default Sidebar;