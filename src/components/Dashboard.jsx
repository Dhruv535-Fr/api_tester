import React from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const responseTimeData = [
  { time: '00:00', latency: 180 },
  { time: '02:00', latency: 195 },
  { time: '04:00', latency: 172 },
  { time: '06:00', latency: 210 },
  { time: '08:00', latency: 188 },
  { time: '10:00', latency: 165 },
  { time: '12:00', latency: 195 }
]

const throughputData = [
  { time: '00:00', throughput: 1100 },
  { time: '02:00', throughput: 1250 },
  { time: '04:00', throughput: 1180 },
  { time: '06:00', throughput: 1320 },
  { time: '08:00', throughput: 1090 },
  { time: '10:00', throughput: 1250 },
  { time: '12:00', throughput: 1280 }
]

const resultData = [
  { name: 'Success', value: 9920, fill: '#10B981' },
  { name: 'Failed', value: 80, fill: '#EF4444' }
]

const recentActivity = [
  { endpoint: 'GET /api/users', status: 'Success', time: '2m ago', latency: '145ms' },
  { endpoint: 'POST /api/products', status: 'Success', time: '3m ago', latency: '320ms' },
  { endpoint: 'GET /api/orders', status: 'Failed', time: '4m ago', latency: '5000ms' },
  { endpoint: 'PUT /api/users/123', status: 'Success', time: '5m ago', latency: '210ms' }
]

export default function Dashboard() {
  return (
    <div className="animate-slide-in-right">
      {/* Main Dashboard Card */}
      <div className="rounded-2xl p-6 space-y-6 bg-white border-2 border-slate-200 shadow-2xl">
        {/* Header Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">Concurrent Users</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">500</p>
            <p className="text-xs text-green-600 mt-1">↑ 12% from last run</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">Total Requests</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">10,000</p>
            <p className="text-xs text-green-600 mt-1">✓ All completed</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">Success Rate</p>
            <p className="text-2xl font-bold text-green-600 mt-2">99.2%</p>
            <p className="text-xs text-slate-600 mt-1">80 failures detected</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">Throughput</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">1,250 req/s</p>
            <p className="text-xs text-slate-600 mt-1">Peak capacity</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">Avg Response</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">180ms</p>
            <p className="text-xs text-green-600 mt-1">✓ Within SLA</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-slate-600 text-xs font-medium uppercase tracking-wider">P95 Latency</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">420ms</p>
            <p className="text-xs text-slate-600 mt-1">P99: 680ms</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          {/* Response Time Chart */}
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <p className="text-xs font-medium text-slate-700 mb-3">Response Time Trend</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                <XAxis dataKey="time" stroke="rgba(100, 116, 139, 0.6)" style={{ fontSize: '11px' }} />
                <YAxis stroke="rgba(100, 116, 139, 0.6)" style={{ fontSize: '11px' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(100, 116, 139, 0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#1e2933' }}
                />
                <Line type="monotone" dataKey="latency" stroke="#3B82F6" strokeWidth={2} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Success vs Failure */}
          <div className="bg-white rounded-lg p-4 border border-slate-200 flex flex-col items-center justify-center">
            <p className="text-xs font-medium text-slate-700 mb-3 w-full">Success vs Failure</p>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={resultData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {resultData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(100, 116, 139, 0.3)', borderRadius: '8px' }}
                  labelStyle={{ color: '#1e2933' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Throughput Chart */}
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs font-medium text-slate-700 mb-3">Throughput (req/s)</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={throughputData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
              <XAxis dataKey="time" stroke="rgba(100, 116, 139, 0.6)" style={{ fontSize: '11px' }} />
              <YAxis stroke="rgba(100, 116, 139, 0.6)" style={{ fontSize: '11px' }} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(100, 116, 139, 0.3)', borderRadius: '8px' }}
                labelStyle={{ color: '#1e2933' }}
              />
              <Bar dataKey="throughput" fill="#8B5CF6" radius={[4, 4, 0, 0]} isAnimationActive={false} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-lg p-4 border border-slate-200">
          <p className="text-xs font-medium text-slate-700 mb-4">Recent Test Activity</p>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-900">{activity.endpoint}</p>
                  <p className="text-xs text-slate-600">{activity.time}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${activity.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {activity.status}
                  </span>
                  <p className="text-xs text-slate-600 mt-1">{activity.latency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
