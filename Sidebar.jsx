import React, { useState } from 'react';
import {
  LayoutGrid,
  PlayCircle,
  MessageSquare,
  Users,
  Settings,
  LogOut
} from 'lucide-react';

import toucanIcon from './assets/toucan-svgrepo-com.svg';

const SidebarItem = ({ icon: Icon, active, onClick }) => (
  <div
    onClick={onClick}
    className="relative flex items-center justify-center w-full py-4 cursor-pointer group"
  >
    {/* Active Background Indicator */}
    <div className={`
      absolute w-12 h-12 rounded-2xl transition-all duration-300
      ${active ? 'bg-brand-yellow scale-100' : 'bg-transparent scale-0 group-hover:scale-90 group-hover:bg-white/10'}
    `} />

    {/* Icon */}
    <Icon className={`
      relative z-10 w-6 h-6 transition-colors duration-300
      ${active ? 'text-brand-black' : 'text-gray-400 group-hover:text-white'}
    `} />
  </div>
);

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutGrid },
    { id: 'courses', icon: PlayCircle },
    { id: 'messages', icon: MessageSquare },
    { id: 'community', icon: Users },
    { id: 'settings', icon: Settings },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-brand-black flex flex-col items-center py-8 justify-between">
      {/* Logo Area */}
      <div className="mb-10">
        <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center border-2 border-white shadow-[2px_2px_0px_white]">
          <img src={toucanIcon} alt="LVL UP Logo" className="w-6 h-6" />
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col gap-4 w-full flex-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            active={activeTab === item.id}
            onClick={() => setActiveTab(item.id)}
          />
        ))}
      </nav>

      {/* Logout */}
      <div className="mt-auto pt-8 border-t border-white/10 w-full">
        <SidebarItem icon={LogOut} active={false} />
      </div>
    </aside>
  );
};

export default Sidebar;