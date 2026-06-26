import React from 'react'
import { useNavigate } from "react-router-dom";
import { ExternalLink, Menu } from 'lucide-react'

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <span className="text-lg font-bold text-slate-900">
              ThreadPulse
            </span>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#docs"
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm font-medium"
            >
              Docs
            </a>
            <a
              href="https://github.com/Dhruv535-Fr/api_tester"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200 text-sm font-medium flex items-center space-x-1"
            >
              <span>GitHub</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Launch App Button */}
          <button
            onClick={() => navigate("/tester")}
            className="hidden md:flex items-center space-x-2 px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            <span>Launch App</span>
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Menu size={24} className="text-slate-900" />
          </button>
        </div>
      </div>
    </nav>
  )
}
