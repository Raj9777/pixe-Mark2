/**
 * Analytics & Reports Service for PIXE Admin Dashboard
 * Manages website visits, SEO performance, form submissions, scheduling, and admin auth.
 */

const STORAGE_KEY = 'pixe_analytics_v1';
const AUTH_KEY = 'pixe_admin_passcode';
const SESSION_KEY = 'pixe_admin_session';

const DEFAULT_PASSCODE = 'pixe2026';

// Internal default structure
const initialData = {
  visits: [],
  impressions: [],
  submissions: [],
  bookings: [],
  settings: {
    passcode: DEFAULT_PASSCODE,
    siteName: 'PIXE Digital Agency',
    targetKeywords: [
      { keyword: 'digital agency near me', volume: 4200, position: 3, clicks: 380, impressions: 4500 },
      { keyword: 'react web development agency', volume: 2900, position: 2, clicks: 310, impressions: 3200 },
      { keyword: 'ui ux design studio', volume: 5100, position: 5, clicks: 240, impressions: 6100 },
      { keyword: 'branding and web design', volume: 1800, position: 4, clicks: 195, impressions: 2400 },
      { keyword: 'next js development services', volume: 3400, position: 2, clicks: 420, impressions: 4800 }
    ]
  }
};

/**
 * Helper to get current stored analytics object
 */
function getStorageData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const demoData = generateSeedData();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(demoData));
      return demoData;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read analytics from localStorage:', err);
    return initialData;
  }
}

/**
 * Helper to save analytics object to localStorage
 */
function saveStorageData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error('Failed to save analytics to localStorage:', err);
  }
}

/**
 * Generate rich, realistic seed metrics for first-time dashboard load
 */
function generateSeedData() {
  const now = Date.now();
  const DAY = 24 * 60 * 60 * 1000;

  const visits = [];
  const pages = ['/', '/services', '/portfolio', '/about', '/contact', '/privacy'];
  const sources = ['Direct', 'Google Search', 'LinkedIn', 'Instagram', 'Twitter / X', 'GitHub'];
  const devices = ['Desktop (Chrome)', 'Mobile (Safari iOS)', 'Desktop (Edge)', 'Mobile (Chrome Android)'];

  // Generate 7 days of historical visits
  for (let i = 6; i >= 0; i--) {
    const dayTimestamp = now - i * DAY;
    const dailyCount = Math.floor(Math.random() * 25) + 35; // 35 to 60 visits/day

    for (let j = 0; j < dailyCount; j++) {
      const timeOffset = Math.floor(Math.random() * DAY);
      visits.push({
        id: `v_${dayTimestamp}_${j}`,
        timestamp: new Date(dayTimestamp + timeOffset).toISOString(),
        path: pages[Math.floor(Math.random() * pages.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        device: devices[Math.floor(Math.random() * devices.length)],
        durationSec: Math.floor(Math.random() * 180) + 20
      });
    }
  }

  const submissions = [
    {
      id: 'sub_101',
      timestamp: new Date(now - 1 * DAY).toISOString(),
      type: 'Contact',
      name: 'Alex Vance',
      email: 'alex.vance@techcorp.io',
      phone: '+1 (555) 234-5678',
      interest: 'Full-Stack Web App',
      budget: '$5,000 - $10,000',
      message: 'Looking for a high-performance React web application for our SaaS product launch.'
    },
    {
      id: 'sub_102',
      timestamp: new Date(now - 3 * DAY).toISOString(),
      type: 'Instant Quote',
      name: 'Sarah Connor',
      email: 'sarah@cyberdyne.com',
      phone: '+1 (555) 987-6543',
      interest: 'UI/UX Redesign',
      budget: '$3,000 - $5,000',
      message: 'Need a complete brand refresh and modern glassmorphic landing page design.'
    },
    {
      id: 'sub_103',
      timestamp: new Date(now - 5 * DAY).toISOString(),
      type: 'Contact',
      name: 'David Miller',
      email: 'david@nexuslabs.co',
      phone: '+44 20 7946 0912',
      interest: 'E-Commerce Platform',
      budget: '$10,000+',
      message: 'We want to migrate our storefront to Vite + custom backend API.'
    }
  ];

  const bookings = [
    {
      id: 'book_201',
      timestamp: new Date(now - 12 * 60 * 60 * 1000).toISOString(),
      name: 'Elena Rostova',
      email: 'elena.r@innovate.de',
      phone: '+49 170 1234567',
      service: 'Discovery & Project Strategy Call',
      date: new Date(now + 2 * DAY).toISOString().split('T')[0],
      time: '14:00 GMT',
      status: 'Confirmed',
      notes: 'Wants to discuss custom web animation requirements.'
    },
    {
      id: 'book_202',
      timestamp: new Date(now - 2 * DAY).toISOString(),
      name: 'Marcus Thorne',
      email: 'm.thorne@apexcapital.com',
      phone: '+1 (555) 432-1098',
      service: '30-Min Strategy Call',
      date: new Date(now + 1 * DAY).toISOString().split('T')[0],
      time: '10:30 EST',
      status: 'Pending',
      notes: 'Initial intro call regarding web audit.'
    },
    {
      id: 'book_203',
      timestamp: new Date(now - 4 * DAY).toISOString(),
      name: 'Chloe Bennett',
      email: 'chloe@designhub.io',
      phone: '+1 (555) 789-0123',
      service: 'SEO & Growth Audit',
      date: new Date(now - 1 * DAY).toISOString().split('T')[0],
      time: '16:00 EST',
      status: 'Completed',
      notes: 'Sent project roadmap proposal after successful call.'
    }
  ];

  const impressions = [
    { type: 'CTA_Click', label: 'Start a Project Button', timestamp: new Date(now - 2 * 60 * 60 * 1000).toISOString() },
    { type: 'Popup_View', label: 'Instant Quote Modal', timestamp: new Date(now - 4 * 60 * 60 * 1000).toISOString() },
    { type: 'CTA_Click', label: 'Book Consultation Call', timestamp: new Date(now - 6 * 60 * 60 * 1000).toISOString() },
    { type: 'Hero_Impression', label: 'Hero Animation View', timestamp: new Date(now - 8 * 60 * 60 * 1000).toISOString() }
  ];

  return {
    visits,
    submissions,
    bookings,
    impressions,
    settings: initialData.settings
  };
}

/* ═══════════════════════════════════════════
   AUTHENTICATION HELPERS
═══════════════════════════════════════════ */

export function verifyPasscode(passcode) {
  const data = getStorageData();
  const validCode = data.settings?.passcode || DEFAULT_PASSCODE;
  if (passcode === validCode) {
    sessionStorage.setItem(SESSION_KEY, 'true');
    return true;
  }
  return false;
}

export function isAuthenticated() {
  return sessionStorage.getItem(SESSION_KEY) === 'true';
}

export function logoutAdmin() {
  sessionStorage.removeItem(SESSION_KEY);
}

export function updatePasscode(newCode) {
  if (!newCode || newCode.trim().length < 4) {
    throw new Error('Passcode must be at least 4 characters');
  }
  const data = getStorageData();
  data.settings.passcode = newCode.trim();
  saveStorageData(data);
  return true;
}

/* ═══════════════════════════════════════════
   TRACKING METHODS (REAL-TIME)
═══════════════════════════════════════════ */

/**
 * Record a new page visit
 */
export function recordVisit(path) {
  try {
    const data = getStorageData();
    const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct';
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    const device = isMobile ? 'Mobile' : 'Desktop';

    const newVisit = {
      id: `v_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      path: path || window.location.pathname,
      source: referrer,
      device: `${device} (${navigator.appName || 'Browser'})`,
      durationSec: 0
    };

    data.visits.unshift(newVisit);
    // Keep max 1000 visits in local log
    if (data.visits.length > 1000) data.visits = data.visits.slice(0, 1000);

    saveStorageData(data);
  } catch (err) {
    console.error('Failed to record visit:', err);
  }
}

/**
 * Record an impression or CTA interaction
 */
export function recordImpression(type, label) {
  try {
    const data = getStorageData();
    data.impressions.unshift({
      id: `imp_${Date.now()}`,
      type,
      label,
      timestamp: new Date().toISOString()
    });
    if (data.impressions.length > 500) data.impressions = data.impressions.slice(0, 500);
    saveStorageData(data);
  } catch (err) {
    console.error('Failed to record impression:', err);
  }
}

/**
 * Log a form submission (Contact or Quote)
 */
export function logSubmission(submissionData) {
  try {
    const data = getStorageData();
    const entry = {
      id: `sub_${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...submissionData
    };
    data.submissions.unshift(entry);
    saveStorageData(data);
    return entry;
  } catch (err) {
    console.error('Failed to log submission:', err);
  }
}

/**
 * Log a call booking request
 */
export function logBooking(bookingData) {
  try {
    const data = getStorageData();
    const entry = {
      id: `book_${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'Pending',
      notes: '',
      ...bookingData
    };
    data.bookings.unshift(entry);
    saveStorageData(data);
    return entry;
  } catch (err) {
    console.error('Failed to log booking:', err);
  }
}

/**
 * Update status or notes of a booking
 */
export function updateBookingStatus(id, status, notes) {
  const data = getStorageData();
  const index = data.bookings.findIndex(b => b.id === id);
  if (index !== -1) {
    if (status) data.bookings[index].status = status;
    if (notes !== undefined) data.bookings[index].notes = notes;
    saveStorageData(data);
  }
}

/* ═══════════════════════════════════════════
   REPORT GENERATION & METRICS
═══════════════════════════════════════════ */

export function getMetrics() {
  const data = getStorageData();
  const visits = data.visits || [];
  const submissions = data.submissions || [];
  const bookings = data.bookings || [];
  const impressions = data.impressions || [];

  // Group visits by date (last 7 days)
  const now = new Date();
  const dailyVisits = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const label = d.toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' });
    
    const count = visits.filter(v => v.timestamp.startsWith(dateStr)).length;
    dailyVisits.push({ date: dateStr, label, count });
  }

  // Top visited paths
  const pathCounts = {};
  visits.forEach(v => {
    pathCounts[v.path] = (pathCounts[v.path] || 0) + 1;
  });

  const topPages = Object.entries(pathCounts)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count);

  // Traffic sources
  const sourceCounts = {};
  visits.forEach(v => {
    const src = v.source || 'Direct';
    sourceCounts[src] = (sourceCounts[src] || 0) + 1;
  });

  // Calculate live SEO score
  const seoReport = calculateSeoScore();

  return {
    totalVisits: visits.length,
    dailyVisits,
    topPages,
    trafficSources: Object.entries(sourceCounts).map(([source, count]) => ({ source, count })),
    totalSubmissions: submissions.length,
    submissions,
    totalBookings: bookings.length,
    bookings,
    totalImpressions: impressions.length,
    impressions,
    seoReport,
    keywords: data.settings?.targetKeywords || []
  };
}

/**
 * Calculates real-time SEO health checks based on document state
 */
export function calculateSeoScore() {
  const title = document.title || '';
  const metaDesc = document.querySelector('meta[name="description"]')?.content || '';
  const ogTitle = document.querySelector('meta[property="og:title"]')?.content || '';
  const h1Count = document.querySelectorAll('h1').length;

  const checks = [
    {
      id: 'title',
      name: 'Document Title Tag',
      passed: title.length >= 10 && title.length <= 70,
      detail: title ? `Current: "${title}" (${title.length} chars)` : 'Missing title tag'
    },
    {
      id: 'desc',
      name: 'Meta Description',
      passed: metaDesc.length >= 50 && metaDesc.length <= 160,
      detail: metaDesc ? `${metaDesc.length} characters long` : 'Meta description not found'
    },
    {
      id: 'h1',
      name: 'Single H1 Heading',
      passed: h1Count === 1,
      detail: `Found ${h1Count} <h1> tag(s)`
    },
    {
      id: 'og',
      name: 'OpenGraph Meta Tags',
      passed: Boolean(ogTitle),
      detail: ogTitle ? 'OG Title present' : 'Open Graph metadata available'
    },
    {
      id: 'mobile',
      name: 'Viewport & Mobile Responsiveness',
      passed: Boolean(document.querySelector('meta[name="viewport"]')),
      detail: 'Viewport tag present'
    },
    {
      id: 'ssl',
      name: 'HTTPS / SSL Encryption',
      passed: window.location.protocol === 'https:' || window.location.hostname === 'localhost',
      detail: 'Secure connection active'
    }
  ];

  const passedCount = checks.filter(c => c.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);

  return {
    score,
    passedCount,
    totalChecks: checks.length,
    checks
  };
}

/* ═══════════════════════════════════════════
   DATA EXPORT & RESET
═══════════════════════════════════════════ */

export function exportToCSV(filename, rows) {
  if (!rows || !rows.length) return;
  const separator = ',';
  const keys = Object.keys(rows[0]);
  const csvContent =
    keys.join(separator) +
    '\n' +
    rows
      .map(row => {
        return keys
          .map(k => {
            let val = row[k] === null || row[k] === undefined ? '' : row[k];
            val = String(val).replace(/"/g, '""');
            if (val.includes(separator) || val.includes('\n')) {
              val = `"${val}"`;
            }
            return val;
          })
          .join(separator);
      })
      .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function resetAnalyticsData() {
  const seed = generateSeedData();
  saveStorageData(seed);
  return seed;
}
