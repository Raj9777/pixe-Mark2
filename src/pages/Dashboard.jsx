import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../App';
import {
  isAuthenticated,
  verifyPasscode,
  logoutAdmin,
  getMetrics,
  updateBookingStatus,
  updatePasscode,
  resetAnalyticsData,
  exportToCSV
} from '../services/analyticsService';
import './Dashboard.css';

export default function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  // Auth state
  const [authed, setAuthed] = useState(() => isAuthenticated());
  const [inputCode, setInputCode] = useState('');
  const [authError, setAuthError] = useState('');

  // Dashboard Data State
  const [activeTab, setActiveTab] = useState('overview');
  const [metrics, setMetrics] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [bookingFilter, setBookingFilter] = useState('All');
  const [subFilter, setSubFilter] = useState('All');

  // Settings State
  const [newPasscode, setNewPasscode] = useState('');
  const [passcodeMsg, setPasscodeMsg] = useState({ text: '', isError: false });

  // Load metrics when authenticated
  const refreshMetrics = () => {
    if (authed) {
      setMetrics(getMetrics());
    }
  };

  useEffect(() => {
    if (authed) {
      refreshMetrics();
    }
  }, [authed]);

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (verifyPasscode(inputCode)) {
      setAuthed(true);
      setAuthError('');
    } else {
      setAuthError('Invalid passcode. Please try again.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    logoutAdmin();
    setAuthed(false);
    setInputCode('');
  };

  // Handle Passcode Change
  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    try {
      updatePasscode(newPasscode);
      setPasscodeMsg({ text: 'Passcode updated successfully!', isError: false });
      setNewPasscode('');
    } catch (err) {
      setPasscodeMsg({ text: err.message, isError: true });
    }
  };

  // Handle Booking Status Update
  const handleStatusChange = (id, newStatus) => {
    updateBookingStatus(id, newStatus);
    refreshMetrics();
  };

  // Handle Reset Data
  const handleResetData = () => {
    if (window.confirm('Reset all analytics metrics to fresh seed data?')) {
      resetAnalyticsData();
      refreshMetrics();
    }
  };

  // If not authenticated, render login gateway
  if (!authed) {
    return (
      <div className="admin-dashboard-container">
        <div className="admin-auth-overlay">
          <div className="admin-auth-card glass">
            <span className="auth-lock-icon">🔒</span>
            <h2>PIXE Admin Dashboard</h2>
            <p>Enter your secret owner passcode to access analytics & reports.</p>

            <form onSubmit={handleLogin} className="auth-form">
              <div className="auth-input-wrap">
                <input
                  type="password"
                  placeholder="••••••••"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  autoFocus
                />
              </div>
              {authError && <div className="auth-error">{authError}</div>}
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Unlock Dashboard
              </button>
            </form>

            <div className="hint-text">
              Default passcode: <code>pixe2026</code> (configurable in Settings)
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!metrics) return null;

  // Filtered Bookings
  const filteredBookings = metrics.bookings.filter(b => {
    if (bookingFilter === 'All') return true;
    return b.status === bookingFilter;
  });

  // Filtered Submissions
  const filteredSubmissions = metrics.submissions.filter(s => {
    if (subFilter === 'All') return true;
    return s.type === subFilter;
  });

  return (
    <div className="admin-dashboard-container">
      {/* Top Header */}
      <header className="dashboard-header">
        <div className="dashboard-title-group">
          <h1>
            Analytics & Reports <span className="badge-live">Live Sync</span>
          </h1>
          <p>Real-time metrics for website traffic, SEO health, form submissions, and scheduling.</p>
        </div>

        <div className="dashboard-top-actions">
          <button className="btn-dash" onClick={refreshMetrics} title="Refresh data">
            🔄 Refresh
          </button>

          <button className="btn-dash" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>

          <NavLink to="/" className="btn-dash">
            🌐 View Site
          </NavLink>

          <button className="btn-dash btn-dash-danger" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-tabs">
        <button
          className={`tab-item ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Overview
        </button>

        <button
          className={`tab-item ${activeTab === 'visits' ? 'active' : ''}`}
          onClick={() => setActiveTab('visits')}
        >
          📈 Website Visits <span className="tab-count">{metrics.totalVisits}</span>
        </button>

        <button
          className={`tab-item ${activeTab === 'seo' ? 'active' : ''}`}
          onClick={() => setActiveTab('seo')}
        >
          🔍 SEO & Impressions <span className="tab-count">{metrics.seoReport.score}%</span>
        </button>

        <button
          className={`tab-item ${activeTab === 'submissions' ? 'active' : ''}`}
          onClick={() => setActiveTab('submissions')}
        >
          📩 Form Submissions <span className="tab-count">{metrics.totalSubmissions}</span>
        </button>

        <button
          className={`tab-item ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          📅 Scheduling & Calls <span className="tab-count">{metrics.totalBookings}</span>
        </button>

        <button
          className={`tab-item ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings
        </button>
      </nav>

      {/* Tab 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <>
          <div className="metrics-grid">
            <div className="metric-card glass">
              <div className="metric-info">
                <p>Website Visits</p>
                <div className="metric-value">{metrics.totalVisits}</div>
                <div className="metric-sub">↑ 18.4% this week</div>
              </div>
              <div className="metric-icon">👥</div>
            </div>

            <div className="metric-card glass">
              <div className="metric-info">
                <p>Form Inquiries</p>
                <div className="metric-value">{metrics.totalSubmissions}</div>
                <div className="metric-sub">↑ 12% conversion rate</div>
              </div>
              <div className="metric-icon">📨</div>
            </div>

            <div className="metric-card glass">
              <div className="metric-info">
                <p>Scheduled Calls</p>
                <div className="metric-value">{metrics.totalBookings}</div>
                <div className="metric-sub">📅 Active consultations</div>
              </div>
              <div className="metric-icon">📞</div>
            </div>

            <div className="metric-card glass">
              <div className="metric-info">
                <p>SEO Health Score</p>
                <div className="metric-value">{metrics.seoReport.score}%</div>
                <div className="metric-sub">
                  {metrics.seoReport.passedCount}/{metrics.seoReport.totalChecks} Checks Passed
                </div>
              </div>
              <div className="metric-icon">⚡</div>
            </div>
          </div>

          {/* Visits Histogram Chart */}
          <div className="dashboard-panel glass">
            <div className="panel-header">
              <h3>📈 Daily Website Traffic Trend (7-Day Overview)</h3>
              <button
                className="btn-dash"
                onClick={() => exportToCSV('website_visits_daily', metrics.dailyVisits)}
              >
                Export CSV
              </button>
            </div>

            <div className="chart-container">
              <div className="histogram-wrap">
                {metrics.dailyVisits.map((day, idx) => {
                  const max = Math.max(...metrics.dailyVisits.map(d => d.count), 1);
                  const heightPercent = Math.round((day.count / max) * 100);

                  return (
                    <div key={idx} className="histogram-bar-group">
                      <div className="bar-pill" style={{ height: `${heightPercent}%` }}>
                        <span className="bar-tooltip">{day.count} visits</span>
                      </div>
                      <span className="bar-label">{day.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="dashboard-panel glass">
            <div className="panel-header">
              <h3>⚡ Recent Activity Feed</h3>
            </div>

            <div className="dash-table-wrap">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Details</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.submissions.slice(0, 3).map(sub => (
                    <tr key={sub.id}>
                      <td><span className="status-badge status-confirmed">New Inscription</span></td>
                      <td><strong>{sub.name}</strong> ({sub.email}) submitted {sub.type}</td>
                      <td>{new Date(sub.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}

                  {metrics.bookings.slice(0, 3).map(book => (
                    <tr key={book.id}>
                      <td><span className="status-badge status-pending">Call Scheduled</span></td>
                      <td><strong>{book.name}</strong> booked {book.service} for {book.date} at {book.time}</td>
                      <td>{new Date(book.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Tab 2: WEBSITE VISITS */}
      {activeTab === 'visits' && (
        <div className="dashboard-panel glass">
          <div className="panel-header">
            <h3>📈 Pageviews & Traffic Source Report</h3>
            <button
              className="btn-dash"
              onClick={() => exportToCSV('top_pages_report', metrics.topPages)}
            >
              Export CSV
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div>
              <h4 style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>Top Visited Pages</h4>
              <div className="dash-table-wrap">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Page Path</th>
                      <th>Visits</th>
                      <th>Share</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.topPages.map((page, i) => (
                      <tr key={i}>
                        <td><code>{page.path}</code></td>
                        <td><strong>{page.count}</strong></td>
                        <td>{Math.round((page.count / metrics.totalVisits) * 100)}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 style={{ marginBottom: '16px', color: 'var(--accent-cyan)' }}>Traffic Sources</h4>
              <div className="dash-table-wrap">
                <table className="dash-table">
                  <thead>
                    <tr>
                      <th>Referrer Source</th>
                      <th>Visits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.trafficSources.map((src, i) => (
                      <tr key={i}>
                        <td><strong>{src.source}</strong></td>
                        <td>{src.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: SEO & IMPRESSIONS */}
      {activeTab === 'seo' && (
        <>
          <div className="seo-score-banner glass">
            <div className="seo-dial">{metrics.seoReport.score}%</div>
            <div className="seo-banner-text">
              <h4>SEO Health & On-Page Optimization Status</h4>
              <p>
                Calculated in real-time based on HTML meta tags, document titles, OpenGraph descriptors, mobile viewport, and SSL encryption status.
              </p>
            </div>
          </div>

          <div className="dashboard-panel glass">
            <div className="panel-header">
              <h3>🔍 Automated On-Page SEO Checklist</h3>
            </div>

            <div className="seo-checklist">
              {metrics.seoReport.checks.map(check => (
                <div key={check.id} className="seo-check-item">
                  <span className={`check-icon ${check.passed ? 'pass' : 'fail'}`}>
                    {check.passed ? '✓' : '⚠️'}
                  </span>
                  <div className="check-details">
                    <h5>{check.name}</h5>
                    <p>{check.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-panel glass">
            <div className="panel-header">
              <h3>🎯 Target Search Keywords & Impressions</h3>
            </div>

            <div className="dash-table-wrap">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Keyword</th>
                    <th>Search Volume</th>
                    <th>Est. Position</th>
                    <th>Impressions</th>
                    <th>Clicks</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.keywords.map((kw, i) => (
                    <tr key={i}>
                      <td><strong>{kw.keyword}</strong></td>
                      <td>{kw.volume.toLocaleString()}/mo</td>
                      <td><span className="status-badge status-confirmed">#{kw.position}</span></td>
                      <td>{kw.impressions.toLocaleString()}</td>
                      <td><strong>{kw.clicks}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Tab 4: FORM SUBMISSIONS */}
      {activeTab === 'submissions' && (
        <div className="dashboard-panel glass">
          <div className="panel-header">
            <h3>📩 Client Inquiries & Instant Quotes</h3>

            <div style={{ display: 'flex', gap: '12px' }}>
              <select
                value={subFilter}
                onChange={e => setSubFilter(e.target.value)}
                className="btn-dash"
                style={{ padding: '8px 12px' }}
              >
                <option value="All">All Types</option>
                <option value="Contact">Contact Page</option>
                <option value="Instant Quote">Instant Quote</option>
              </select>

              <button
                className="btn-dash"
                onClick={() => exportToCSV('form_submissions_report', metrics.submissions)}
              >
                Export CSV
              </button>
            </div>
          </div>

          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Client Name</th>
                  <th>Email</th>
                  <th>Interest</th>
                  <th>Budget</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                      No form submissions recorded yet.
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map(sub => (
                    <tr key={sub.id}>
                      <td><span className="status-badge status-confirmed">{sub.type}</span></td>
                      <td><strong>{sub.name}</strong></td>
                      <td>{sub.email}</td>
                      <td>{sub.interest || 'General'}</td>
                      <td>{sub.budget || 'N/A'}</td>
                      <td>{new Date(sub.timestamp).toLocaleDateString()}</td>
                      <td>
                        <button
                          className="btn-dash"
                          style={{ padding: '4px 10px', fontSize: '0.78rem' }}
                          onClick={() => setSelectedSub(sub)}
                        >
                          View Message
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 5: SCHEDULING & CALLS */}
      {activeTab === 'bookings' && (
        <div className="dashboard-panel glass">
          <div className="panel-header">
            <h3>📅 Scheduled Consultation Calls</h3>

            <div style={{ display: 'flex', gap: '12px' }}>
              <select
                value={bookingFilter}
                onChange={e => setBookingFilter(e.target.value)}
                className="btn-dash"
                style={{ padding: '8px 12px' }}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <button
                className="btn-dash"
                onClick={() => exportToCSV('scheduled_calls_report', metrics.bookings)}
              >
                Export CSV
              </button>
            </div>
          </div>

          <div className="dash-table-wrap">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Contact Info</th>
                  <th>Service Requested</th>
                  <th>Scheduled Date & Time</th>
                  <th>Status</th>
                  <th>Change Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
                      No scheduled calls found for this filter.
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map(book => (
                    <tr key={book.id}>
                      <td><strong>{book.name}</strong></td>
                      <td>
                        <div>{book.email}</div>
                        <small style={{ color: 'var(--text-muted)' }}>{book.phone}</small>
                      </td>
                      <td>{book.service}</td>
                      <td>
                        <strong>{book.date}</strong> at {book.time}
                      </td>
                      <td>
                        <span className={`status-badge status-${book.status.toLowerCase()}`}>
                          {book.status}
                        </span>
                      </td>
                      <td>
                        <select
                          value={book.status}
                          onChange={e => handleStatusChange(book.id, e.target.value)}
                          className="btn-dash"
                          style={{ padding: '4px 8px', fontSize: '0.8rem' }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 6: SETTINGS & DATA RESET */}
      {activeTab === 'settings' && (
        <div className="dashboard-panel glass">
          <div className="panel-header">
            <h3>⚙️ Dashboard Settings & Controls</h3>
          </div>

          <div className="settings-form-grid">
            <div className="settings-card glass">
              <h4>🔐 Change Owner Passcode</h4>
              <p>Update your private password used to unlock this admin dashboard.</p>

              <form onSubmit={handlePasscodeSubmit}>
                <div className="form-group-dash">
                  <label>New Passcode (min 4 characters)</label>
                  <input
                    type="password"
                    placeholder="Enter new passcode"
                    value={newPasscode}
                    onChange={e => setNewPasscode(e.target.value)}
                    required
                  />
                </div>

                {passcodeMsg.text && (
                  <div
                    style={{
                      color: passcodeMsg.isError ? '#ff4d4d' : '#10b981',
                      fontSize: '0.85rem',
                      marginBottom: '12px'
                    }}
                  >
                    {passcodeMsg.text}
                  </div>
                )}

                <button type="submit" className="btn btn-primary" style={{ padding: '8px 18px' }}>
                  Update Passcode
                </button>
              </form>
            </div>

            <div className="settings-card glass">
              <h4>🧹 Data & Seed Controls</h4>
              <p>Re-populate demo metrics or reset stored local analytics tracking data.</p>

              <button className="btn-dash btn-dash-danger" onClick={handleResetData}>
                🔄 Reset to Demo Metrics
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submission Detail Modal */}
      {selectedSub && (
        <div className="dash-modal-backdrop" onClick={() => setSelectedSub(null)}>
          <div className="dash-modal glass" onClick={e => e.stopPropagation()}>
            <button className="dash-modal-close" onClick={() => setSelectedSub(null)}>×</button>

            <h3 style={{ marginBottom: '16px', fontFamily: 'var(--font-display)' }}>
              Inquiry Details: {selectedSub.name}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <div><strong>Form Type:</strong> {selectedSub.type}</div>
              <div><strong>Email:</strong> <a href={`mailto:${selectedSub.email}`}>{selectedSub.email}</a></div>
              <div><strong>Phone:</strong> {selectedSub.phone || 'Not provided'}</div>
              <div><strong>Service Interest:</strong> {selectedSub.interest || 'General'}</div>
              <div><strong>Budget:</strong> {selectedSub.budget || 'Not specified'}</div>
              <div><strong>Submitted At:</strong> {new Date(selectedSub.timestamp).toLocaleString()}</div>

              <div style={{ marginTop: '12px', borderTop: '1px solid var(--glass-border)', paddingTop: '12px' }}>
                <strong>Customer Message:</strong>
                <p style={{ marginTop: '8px', color: 'var(--text-muted)', lineHeight: '1.6', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px' }}>
                  {selectedSub.message || 'No message attached.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
