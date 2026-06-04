import React from 'react'
import { Zap, BarChart3, Activity, TrendingUp } from 'lucide-react'

const primaryFeature = {
  icon: Zap,
  title: 'Concurrent Execution',
  metric: '1,000+ Requests',
  highlight: 'Scalable worker-pool engine',
  details: ['Distributed load testing', 'Multi-threaded workers', 'Zero-latency coordination']
}

const secondaryFeatures = [
  {
    icon: BarChart3,
    title: 'Multi-Percentile Analysis',
    metrics: ['P50 / P95 / P99', 'Error tracking'],
    highlight: 'Comprehensive latency profiling'
  },
  {
    icon: Activity,
    title: 'Real-Time Insights',
    metrics: ['Live-updating metrics', 'Interactive charts'],
    highlight: 'Monitor while testing'
  },
  {
    icon: TrendingUp,
    title: 'Historical Trends',
    metrics: ['Performance regression detection', 'Baseline comparison'],
    highlight: 'Track API health over time'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Built for serious performance testing
          </h2>
          <p className="text-lg text-slate-600 max-w-md">
            Every feature designed to find and fix bottlenecks fast
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Primary Feature - Larger Card */}
          <div className="md:col-span-2 rounded-xl p-8 border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                  <Zap className="w-5 h-5 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {primaryFeature.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {primaryFeature.highlight}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-slate-900">
                  {primaryFeature.metric}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6 pt-6 border-t border-slate-100">
              {primaryFeature.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                  <span className="text-xs text-slate-600 font-medium">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Feature 1 */}
          <div className="rounded-xl p-6 border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 group">
            <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
              <BarChart3 className="w-4.5 h-4.5 text-slate-900" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {secondaryFeatures[0].title}
            </h3>
            <p className="text-xs text-slate-600 mb-3">
              {secondaryFeatures[0].highlight}
            </p>
            <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-100">
              {secondaryFeatures[0].metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  <span className="text-xs text-slate-600">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Features Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryFeatures.slice(1).map((feature, idx) => (
            <div key={idx} className="rounded-xl p-6 border border-slate-200 bg-white hover:border-slate-300 transition-all duration-300 group">
              <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
                <feature.icon className="w-4.5 h-4.5 text-slate-900" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                {feature.highlight}
              </p>
              <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-100">
                {feature.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <span className="text-xs text-slate-600">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
