import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, PlayCircle, History, BarChart2, Layers, Settings, HelpCircle, Book, Zap 
} from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const SidebarItem = ({ icon: Icon, label, path, badge }) => {
    const active = location.pathname === path || (path === '/tester' && location.pathname === '/tester');
    return (
      <button 
        onClick={() => path && navigate(path)}
        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'bg-slate-100 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
      >
        <Icon className="w-4 h-4" />
        <span className="flex-1 text-left">{label}</span>
        {badge && <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">{badge}</span>}
      </button>
    );
  };

  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col shrink-0">
      <div className="h-14 flex items-center px-6 border-b border-slate-200 shrink-0">
        <div className="flex items-center gap-2">
           <Zap className="w-5 h-5 text-blue-600 fill-blue-600" />
           <span className="font-bold text-lg tracking-tight">ThreadPulse</span>
        </div>
      </div>
      
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3 mt-2">Menu</div>
        <SidebarItem icon={LayoutDashboard} label="Dashboard" path="/tester" />
        <SidebarItem icon={PlayCircle} label="New Test" path="/tester/new-test" />
        <SidebarItem icon={History} label="History" path="/tester/history" />
        <SidebarItem icon={BarChart2} label="Reports" path="/tester/reports" />
        <SidebarItem icon={Layers} label="Collections" badge="Soon" path="/tester/collections" />
        <SidebarItem icon={Settings} label="Settings" path="/tester/settings" />
      </div>

      <div className="p-3 border-t border-slate-200 space-y-1 shrink-0">
        <SidebarItem icon={HelpCircle} label="Help & Support" path="/tester/help" />
        <SidebarItem icon={Book} label="Documentation" path="/tester/docs" />
        <div className="mt-2 px-3 flex items-center space-x-3 py-2 hover:bg-slate-50 rounded-md cursor-pointer transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
            JD
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium text-slate-900 truncate">Jane Doe</span>
            <span className="text-xs text-slate-500 truncate">Free Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
