import React from 'react'
import { Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">ThreadPulse</h3>
            <p className="text-sm text-slate-600">
              Professional API performance testing platform.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github size={18} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="#docs"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600">
            © {currentYear} ThreadPulse
          </p>
        </div>
      </div>
    </footer>
  )
}
