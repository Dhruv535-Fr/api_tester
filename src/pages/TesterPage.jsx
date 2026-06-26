import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  PlayCircle, 
  History, 
  BarChart2, 
  Layers, 
  Settings, 
  HelpCircle, 
  Book, 
  User,
  Search,
  Bell,
  Moon,
  Plus,
  Trash2,
  ChevronRight,
  Zap
} from 'lucide-react';

export default function TesterPage() {
  const [method, setMethod] = useState("POST");
  const [url, setUrl] = useState("https://api.example.com/login");
  const [activeTab, setActiveTab] = useState("headers");
  const [authType, setAuthType] = useState("none");
  const [bodyType, setBodyType] = useState("json");
  
  const [headers, setHeaders] = useState([
    { key: "Content-Type", value: "application/json" },
    { key: "Accept", value: "*/*" }
  ]);
  const [queryParams, setQueryParams] = useState([
    { key: "", value: "" }
  ]);
  const [bodyContent, setBodyContent] = useState('{\n  "username": "test_user",\n  "password": "password123"\n}');

  const [perfConfig, setPerfConfig] = useState({
    concurrentUsers: 100,
    totalRequests: 1000,
    rampUpTime: 10,
    timeout: 5000,
    retryCount: 0,
    requestDelay: 0,
    keepAlive: true,
    followRedirects: true,
    validateSsl: true,
  });

  const handlePerfChange = (field, value) => {
    setPerfConfig(prev => ({ ...prev, [field]: value }));
  };

  const SidebarItem = ({ icon: Icon, label, active, badge }) => (
    <button className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'bg-slate-100 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
      <Icon className="w-4 h-4" />
      <span className="flex-1 text-left">{label}</span>
      {badge && <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">{badge}</span>}
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 bg-white flex flex-col shrink-0">
        <div className="h-14 flex items-center px-6 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-2">
             <Zap className="w-5 h-5 text-blue-600 fill-blue-600" />
             <span className="font-bold text-lg tracking-tight">ThreadPulse</span>
          </div>
        </div>
        
        <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 px-3 mt-2">Menu</div>
          <SidebarItem icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem icon={PlayCircle} label="New Test" active={true} />
          <SidebarItem icon={History} label="History" />
          <SidebarItem icon={BarChart2} label="Reports" />
          <SidebarItem icon={Layers} label="Collections" badge="Soon" />
          <SidebarItem icon={Settings} label="Settings" />
        </div>

        <div className="p-3 border-t border-slate-200 space-y-1 shrink-0">
          <SidebarItem icon={HelpCircle} label="Help & Support" />
          <SidebarItem icon={Book} label="Documentation" />
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Navbar */}
        <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center text-sm text-slate-500">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Dashboard</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="font-medium text-slate-900">New Test</span>
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

        {/* Main Scrollable */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto space-y-8 pb-12">
            
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">New Performance Test</h1>
              <p className="text-sm text-slate-500">Configure an API request and execute concurrent load tests to measure performance.</p>
            </div>

            {/* Section 1: Endpoint Builder */}
            <div className="flex items-center space-x-2">
              <select 
                value={method} 
                onChange={e => setMethod(e.target.value)} 
                className="w-28 bg-slate-100 border border-slate-200 text-slate-800 font-semibold rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
              >
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>DELETE</option>
                <option>PATCH</option>
              </select>
              <input 
                type="text" 
                value={url} 
                onChange={e => setUrl(e.target.value)} 
                className="flex-1 border border-slate-200 bg-white rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm shadow-sm" 
                placeholder="https://api.example.com/v1/resource" 
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-colors whitespace-nowrap shadow-sm text-sm hidden md:block">
                Run Load Test
              </button>
            </div>

            {/* Section 2: Request Configuration */}
            <div className="border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden">
              <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-hide">
                {['Authentication', 'Headers', 'Query Parameters', 'Body'].map(tab => {
                  const tabKey = tab.toLowerCase().replace(' ', '-');
                  return (
                    <button 
                      key={tabKey} 
                      onClick={() => setActiveTab(tabKey)} 
                      className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tabKey ? 'border-blue-600 text-blue-600 bg-white' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100'}`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
              
              <div className="p-5 min-h-[240px] bg-white">
                {activeTab === 'authentication' && (
                  <div className="max-w-md animate-in fade-in duration-200">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Type</label>
                    <select 
                      value={authType} 
                      onChange={e => setAuthType(e.target.value)} 
                      className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5 bg-white cursor-pointer"
                    >
                      <option value="none">No Auth</option>
                      <option value="bearer">Bearer Token</option>
                      <option value="apikey">API Key</option>
                      <option value="basic">Basic Auth</option>
                    </select>

                    {authType === 'bearer' && (
                      <div className="animate-in slide-in-from-top-1 opacity-100 duration-200">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Token</label>
                        <input type="text" placeholder="Enter Bearer Token" className="w-full border border-slate-200 rounded-md px-3 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <p className="text-xs text-slate-500 mt-2">Token will be sent in the Authorization header.</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'headers' && (
                  <div className="animate-in fade-in duration-200">
                    <div className="flex flex-col border border-slate-200 rounded-md overflow-hidden">
                      <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 p-2">
                        <div className="col-span-5 px-2">KEY</div>
                        <div className="col-span-6 px-2">VALUE</div>
                        <div className="col-span-1"></div>
                      </div>
                      {headers.map((h, i) => (
                        <div key={i} className="grid grid-cols-12 border-b border-slate-100 last:border-0 p-1 group items-center">
                          <div className="col-span-5 px-1">
                            <input type="text" value={h.key} placeholder="Key" className="w-full px-2 py-1.5 text-sm font-mono text-slate-700 bg-transparent border border-transparent hover:border-slate-200 focus:border-blue-500 focus:bg-white rounded outline-none transition-colors" onChange={(e) => {
                              const newH = [...headers];
                              newH[i].key = e.target.value;
                              setHeaders(newH);
                            }} />
                          </div>
                          <div className="col-span-6 px-1">
                            <input type="text" value={h.value} placeholder="Value" className="w-full px-2 py-1.5 text-sm font-mono text-slate-700 bg-transparent border border-transparent hover:border-slate-200 focus:border-blue-500 focus:bg-white rounded outline-none transition-colors" onChange={(e) => {
                              const newH = [...headers];
                              newH[i].value = e.target.value;
                              setHeaders(newH);
                            }} />
                          </div>
                          <div className="col-span-1 flex items-center justify-center">
                            <button className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-red-50" onClick={() => setHeaders(headers.filter((_, idx) => idx !== i))}>
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="mt-4 flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      onClick={() => setHeaders([...headers, { key: "", value: "" }])}
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Header
                    </button>
                  </div>
                )}

                {activeTab === 'query-parameters' && (
                  <div className="animate-in fade-in duration-200">
                    <div className="flex flex-col border border-slate-200 rounded-md overflow-hidden">
                      <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 p-2">
                        <div className="col-span-5 px-2">KEY</div>
                        <div className="col-span-6 px-2">VALUE</div>
                        <div className="col-span-1"></div>
                      </div>
                      {queryParams.map((q, i) => (
                        <div key={i} className="grid grid-cols-12 border-b border-slate-100 last:border-0 p-1 group items-center">
                          <div className="col-span-5 px-1">
                            <input type="text" value={q.key} placeholder="Key" className="w-full px-2 py-1.5 text-sm font-mono text-slate-700 bg-transparent border border-transparent hover:border-slate-200 focus:border-blue-500 focus:bg-white rounded outline-none transition-colors" onChange={(e) => {
                              const newQ = [...queryParams];
                              newQ[i].key = e.target.value;
                              setQueryParams(newQ);
                            }} />
                          </div>
                          <div className="col-span-6 px-1">
                            <input type="text" value={q.value} placeholder="Value" className="w-full px-2 py-1.5 text-sm font-mono text-slate-700 bg-transparent border border-transparent hover:border-slate-200 focus:border-blue-500 focus:bg-white rounded outline-none transition-colors" onChange={(e) => {
                              const newQ = [...queryParams];
                              newQ[i].value = e.target.value;
                              setQueryParams(newQ);
                            }} />
                          </div>
                          <div className="col-span-1 flex items-center justify-center">
                            <button className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-red-50" onClick={() => setQueryParams(queryParams.filter((_, idx) => idx !== i))}>
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="mt-4 flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      onClick={() => setQueryParams([...queryParams, { key: "", value: "" }])}
                    >
                      <Plus className="w-4 h-4 mr-1" /> Add Parameter
                    </button>
                  </div>
                )}

                {activeTab === 'body' && (
                  <div className="flex flex-col h-full animate-in fade-in duration-200">
                    <div className="flex items-center space-x-5 mb-4">
                      {['none', 'json', 'form-data'].map(type => (
                        <label key={type} className="flex items-center space-x-2 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="bodyType" 
                            value={type} 
                            checked={bodyType === type} 
                            onChange={() => setBodyType(type)} 
                            className="text-blue-600 focus:ring-blue-500 w-4 h-4 border-slate-300"
                          />
                          <span className={`text-[13px] font-medium transition-colors ${bodyType === type ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                            {type === 'none' ? 'None' : type === 'json' ? 'JSON' : 'Form Data'}
                          </span>
                        </label>
                      ))}
                    </div>
                    {bodyType === 'json' && (
                      <div className="relative">
                        <textarea 
                          value={bodyContent}
                          onChange={e => setBodyContent(e.target.value)}
                          className="w-full h-56 bg-slate-50 border border-slate-200 rounded-md p-4 pt-8 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y text-slate-800 shadow-inner"
                          spellCheck="false"
                        ></textarea>
                        <div className="absolute top-2 right-4 text-xs font-mono text-slate-400">JSON</div>
                      </div>
                    )}
                    {bodyType === 'none' && (
                      <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-md bg-slate-50 h-56">
                        <p className="text-slate-400 text-sm">This request does not have a body.</p>
                      </div>
                    )}
                    {bodyType === 'form-data' && (
                      <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-md bg-slate-50 h-56">
                        <p className="text-slate-400 text-sm flex flex-col items-center">
                          <span className="mb-2">Form Data editor</span>
                          <span className="text-xs">Coming soon</span>
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Performance Configuration */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900">Performance Configuration</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:border-slate-300 transition-colors group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Concurrent Users</label>
                  <p className="text-[11px] text-slate-500 mb-3">Number of virtual users executing simultaneously.</p>
                  <input type="number" value={perfConfig.concurrentUsers} onChange={e => handlePerfChange('concurrentUsers', e.target.value)} className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:border-slate-300 transition-colors group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Total Requests</label>
                  <p className="text-[11px] text-slate-500 mb-3">Maximum number of requests to execute.</p>
                  <input type="number" value={perfConfig.totalRequests} onChange={e => handlePerfChange('totalRequests', e.target.value)} className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:border-slate-300 transition-colors group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Ramp-Up Time (s)</label>
                  <p className="text-[11px] text-slate-500 mb-3">Time taken to reach peak concurrent users.</p>
                  <input type="number" value={perfConfig.rampUpTime} onChange={e => handlePerfChange('rampUpTime', e.target.value)} className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:border-slate-300 transition-colors group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Timeout (ms)</label>
                  <p className="text-[11px] text-slate-500 mb-3">Maximum time to wait for a single request.</p>
                  <input type="number" value={perfConfig.timeout} onChange={e => handlePerfChange('timeout', e.target.value)} className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:border-slate-300 transition-colors group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Retry Count</label>
                  <p className="text-[11px] text-slate-500 mb-3">Number of retries for failed requests.</p>
                  <input type="number" value={perfConfig.retryCount} onChange={e => handlePerfChange('retryCount', e.target.value)} className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm hover:border-slate-300 transition-colors group">
                  <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Request Delay (ms)</label>
                  <p className="text-[11px] text-slate-500 mb-3">Delay between subsequent requests per user.</p>
                  <input type="number" value={perfConfig.requestDelay} onChange={e => handlePerfChange('requestDelay', e.target.value)} className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Toggles */}
                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm flex items-center justify-between hover:border-slate-300 transition-colors group">
                  <div className="pr-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Keep Alive</label>
                    <p className="text-[11px] text-slate-500">Use persistent TCP connections.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" checked={perfConfig.keepAlive} onChange={e => handlePerfChange('keepAlive', e.target.checked)} />
                    <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm flex items-center justify-between hover:border-slate-300 transition-colors group">
                  <div className="pr-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Follow Redirects</label>
                    <p className="text-[11px] text-slate-500">Automatically follow HTTP 3xx responses.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" checked={perfConfig.followRedirects} onChange={e => handlePerfChange('followRedirects', e.target.checked)} />
                    <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm flex items-center justify-between hover:border-slate-300 transition-colors group">
                  <div className="pr-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">Validate SSL</label>
                    <p className="text-[11px] text-slate-500">Verify SSL/TLS certificates.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" checked={perfConfig.validateSsl} onChange={e => handlePerfChange('validateSsl', e.target.checked)} />
                    <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

              </div>
            </div>

            {/* Section 4: Live Test Summary */}
            <div className="bg-slate-900 rounded-xl p-5 text-white shadow-xl mt-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-sm flex items-center text-slate-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                  Ready to Execute
                </h3>
                <span className="bg-slate-800 text-[11px] px-2.5 py-1 rounded-md border border-slate-700 font-mono text-slate-300 tracking-wide">EST. COST: $0.00</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm border-t border-slate-800 pt-5">
                <div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Target</div>
                  <div className="font-mono text-xs truncate" title={`${method} ${url}`}>
                    <span className="text-blue-400 mr-2 font-bold">{method}</span>
                    <span className="text-slate-200">{url || '—'}</span>
                  </div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Authentication</div>
                  <div className="text-slate-200 font-medium text-xs">{authType === 'none' ? 'None' : authType === 'bearer' ? 'Bearer Token' : authType === 'apikey' ? 'API Key' : 'Basic Auth'}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Load Profile</div>
                  <div className="text-slate-200 font-medium text-xs">{perfConfig.concurrentUsers} users / {perfConfig.totalRequests} reqs</div>
                </div>
                <div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1.5">Timeout</div>
                  <div className="text-slate-200 font-medium text-xs">{perfConfig.timeout}ms</div>
                </div>
              </div>
            </div>

            {/* Primary Action */}
            <div className="flex justify-end pt-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center text-sm">
                <PlayCircle className="w-5 h-5 mr-2" />
                Run Load Test
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}