import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Subtle background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  )
}
