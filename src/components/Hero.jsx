import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-4 items-stretch min-h-96">
          {/* Left Column */}
          <div className="space-y-5 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-blue-700">Built for Backend Engineers</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
                <span className="text-slate-900">Powerful API Performance</span>
                <span className="block">Testing, Minimal Code</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-md">
                Generate concurrent traffic, analyze latency, and uncover bottlenecks with real-time performance insights.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-sm text-slate-700">Concurrent Load Testing with worker-pool architecture</p>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-sm text-slate-700">P50 / P95 / P99 Latency Analysis for detailed insights</p>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-sm text-slate-700">Throughput & Error Metrics with real-time tracking</p>
              </div>

              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 rounded-full bg-green-100 border border-green-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <p className="text-sm text-slate-700">Real-Time Analytics Dashboard with live updates</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="group flex items-center justify-center space-x-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Launch APP</span>
              </button>

              <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-slate-300 hover:border-slate-400 text-slate-900 rounded-lg font-semibold text-sm transition-all duration-200 bg-white hover:bg-slate-50">
                <span>View GitHub</span>
              </button>
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="animate-slide-in-right h-full">
            <div className="rounded-xl overflow-hidden bg-white shadow-lg h-full border border-gray-200">
              <img 
                src="" 
                alt="API Tester Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
