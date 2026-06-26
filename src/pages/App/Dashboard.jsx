import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  LayoutDashboard, PlayCircle, History as HistoryIcon, BarChart2, Layers, Settings, HelpCircle, Book,
  Search, Bell, Moon, ChevronRight, Zap, CheckCircle2, AlertCircle, Clock, Activity, ArrowRight
} from 'lucide-react';

const responseTimeData = [
  { time: '10:00', ms: 120 }, { time: '10:05', ms: 132 }, { time: '10:10', ms: 125 },
  { time: '10:15', ms: 145 }, { time: '10:20', ms: 180 }, { time: '10:25', ms: 140 },
  { time: '10:30', ms: 128 }, { time: '10:35', ms: 130 }, { time: '10:40', ms: 124 },
];

const successRateData = [
  { time: '10:00', rate: 100 }, { time: '10:05', rate: 99.9 }, { time: '10:10', rate: 100 },
  { time: '10:15', rate: 99.5 }, { time: '10:20', rate: 98.2 }, { time: '10:25', rate: 99.8 },
  { time: '10:30', rate: 100 }, { time: '10:35', rate: 100 }, { time: '10:40', rate: 100 },
];

const throughputData = [
  { time: '10:00', reqs: 4200 }, { time: '10:05', reqs: 4500 }, { time: '10:10', reqs: 4800 },
  { time: '10:15', reqs: 5100 }, { time: '10:20', reqs: 4900 }, { time: '10:25', reqs: 4600 },
  { time: '10:30', reqs: 4300 }, { time: '10:35', reqs: 4100 }, { time: '10:40', reqs: 4400 },
];

const recentTests = [
  { id: 't-8842', name: 'Production API Load', endpoint: '/api/v1/checkout', method: 'POST', date: '2 hours ago', status: 'Success', duration: '5m 12s' },
  { id: 't-8841', name: 'User Authentication', endpoint: '/api/v1/auth/login', method: 'POST', date: '4 hours ago', status: 'Failed', duration: '1m 45s' },
  { id: 't-8840', name: 'Catalog Search Stress', endpoint: '/api/v1/products/search', method: 'GET', date: 'Yesterday', status: 'Success', duration: '10m 00s' },
  { id: 't-8839', name: 'Nightly Core Services', endpoint: '/api/v1/users/profile', method: 'GET', date: 'Yesterday', status: 'Success', duration: '15m 30s' },
];

const recentActivity = [
  { id: 1, type: 'success', text: 'Production API Load test completed successfully.', time: '2 hours ago' },
  { id: 2, type: 'error', text: 'Performance regression detected on /api/v1/auth/login.', time: '4 hours ago' },
  { id: 3, type: 'info', text: 'Jane Doe created a new test "User Authentication".', time: '4 hours ago' },
  { id: 4, type: 'warning', text: 'API responded with elevated latency (p99 > 500ms) on Catalog Search.', time: 'Yesterday' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Dashboard</h1>
        <p className="text-sm text-slate-500">Monitor recent API performance tests and quickly start new load tests.</p>
      </div>

      {/* Quick Action */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-1">New Performance Test</h2>
          <p className="text-sm text-slate-500">Configure simulated traffic patterns and execute a distributed load test to identify API bottlenecks.</p>
        </div>
        <button 
          onClick={() => navigate('/tester/new-test')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm text-sm flex items-center shrink-0"
        >
          <PlayCircle className="w-4 h-4 mr-2" />
          New Test
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 flex flex-col">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Total Tests</span>
          <span className="text-3xl font-bold text-slate-900">1,248</span>
          <span className="text-xs text-emerald-600 font-medium mt-2 flex items-center"><Activity className="w-3 h-3 mr-1"/> +12% this week</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 flex flex-col">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Avg Success Rate</span>
          <span className="text-3xl font-bold text-slate-900">99.8%</span>
          <span className="text-xs text-slate-500 font-medium mt-2">Across all endpoints</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 flex flex-col">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Avg Response Time</span>
          <span className="text-3xl font-bold text-slate-900">124<span className="text-lg text-slate-500 ml-1">ms</span></span>
          <span className="text-xs text-rose-600 font-medium mt-2 flex items-center"><ArrowRight className="w-3 h-3 mr-1 -rotate-45"/> +15ms since yesterday</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 flex flex-col">
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Avg Throughput</span>
          <span className="text-3xl font-bold text-slate-900">4.5k<span className="text-lg text-slate-500 ml-1">req/s</span></span>
          <span className="text-xs text-emerald-600 font-medium mt-2 flex items-center"><Activity className="w-3 h-3 mr-1"/> Peak: 8.2k req/s</span>
        </div>
      </div>

      {/* Performance Overview (Charts) */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Performance Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Avg Response Time Chart */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Average Response Time (ms)</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseTimeData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Line type="monotone" dataKey="ms" stroke="#2563eb" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Success Rate Trend Chart */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Success Rate Trend (%)</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={successRateData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                  <YAxis domain={['dataMin - 1', 100]} axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="rate" stroke="#10b981" fillOpacity={1} fill="url(#colorRate)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Request Throughput Chart */}
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Request Throughput (req/s)</h3>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={throughputData} margin={{ top: 5, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} cursor={{fill: '#f1f5f9'}} />
                  <Bar dataKey="reqs" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>

      {/* Layout for Tests and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Tests Table */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Recent Tests</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">View All</button>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">
                  <tr>
                    <th className="px-5 py-3">Test Name</th>
                    <th className="px-5 py-3">Endpoint</th>
                    <th className="px-5 py-3">Method</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentTests.map((test) => (
                    <tr 
                      key={test.id} 
                      onClick={() => navigate(`/tester/results/${test.id}`)}
                      className="hover:bg-slate-50 cursor-pointer transition-colors group"
                    >
                      <td className="px-5 py-3 font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{test.name}</td>
                      <td className="px-5 py-3 font-mono text-xs text-slate-500">{test.endpoint}</td>
                      <td className="px-5 py-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          test.method === 'GET' ? 'bg-blue-100 text-blue-700' :
                          test.method === 'POST' ? 'bg-emerald-100 text-emerald-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {test.method}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-slate-500 text-xs">{test.date}</td>
                      <td className="px-5 py-3">
                        <span className="flex items-center text-xs font-medium">
                          {test.status === 'Success' ? (
                            <><span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span> Success</>
                          ) : (
                            <><span className="w-2 h-2 rounded-full bg-rose-500 mr-1.5"></span> Failed</>
                          )}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-slate-500 font-mono text-xs">{test.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
          <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5">
            <div className="space-y-5">
              {recentActivity.map((activity, index) => (
                <div key={activity.id} className="flex relative">
                  {/* Timeline line */}
                  {index !== recentActivity.length - 1 && (
                    <div className="absolute top-6 left-3.5 w-[1px] h-full bg-slate-100 -ml-px"></div>
                  )}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    activity.type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                    activity.type === 'error' ? 'bg-rose-100 text-rose-600' :
                    activity.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {activity.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {activity.type === 'error' && <AlertCircle className="w-3.5 h-3.5" />}
                    {activity.type === 'warning' && <Activity className="w-3.5 h-3.5" />}
                    {activity.type === 'info' && <PlayCircle className="w-3.5 h-3.5" />}
                  </div>
                  <div className="ml-3 flex flex-col pt-1">
                    <p className="text-sm text-slate-700 leading-snug">{activity.text}</p>
                    <span className="text-[11px] text-slate-400 mt-1 flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
