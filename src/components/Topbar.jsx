import React from 'react';
import { Search, Bell, Moon, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Topbar() {
  const location = useLocation();
  
  const getBreadcrumb = () => {
    if (location.pathname === '/tester/new-test') return 'New Test';
    if (location.pathname === '/tester/history') return 'History';
    if (location.pathname === '/tester/reports') return 'Reports';
    if (location.pathname === '/tester/settings') return 'Settings';
    if (location.pathname.startsWith('/tester/results')) return 'Results';
    return 'Dashboard';
  };

  const getParentBreadcrumb = () => {
    if (location.pathname === '/tester') return 'Overview';
    return 'Dashboard';
  };

  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center text-sm text-slate-500">
        <span className="hover:text-slate-900 cursor-pointer transition-colors">{getParentBreadcrumb()}</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="font-medium text-slate-900">{getBreadcrumb()}</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-shadow" />
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <Moon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
