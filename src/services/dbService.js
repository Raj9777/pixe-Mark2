const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '';
const CLOUD_SYNC_URL = import.meta.env.VITE_CLOUD_SYNC_URL || 'https://jsonblob.com/api/jsonBlob/019f9805-0729-7d68-8bb9-23e80786221c';

// Handle missing/placeholder webhook URL gracefully
const isConfigured = 
  webhookUrl && 
  webhookUrl.startsWith('http') && 
  !webhookUrl.includes('your_google_sheets_apps_script_url');

/**
 * Sends a form submission payload to the Google Sheets Apps Script Webhook.
 * Uses a text/plain Content-Type to prevent CORS preflight OPTIONS requests.
 */
async function sendToSheet(payload) {
  if (!isConfigured) {
    console.warn(
      'Google Sheets Webhook — client is not configured yet. Form submission skipped. ' +
      'Please set VITE_GOOGLE_SHEETS_WEBHOOK_URL in your .env file.'
    );
    return null;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });
    return response;
  } catch (error) {
    console.error('Google Sheets Webhook — Error sending submission:', error);
    return null;
  }
}

/**
 * Fetch remote submissions & bookings from Cloud Persistence Store
 */
export async function fetchRemoteData() {
  try {
    const res = await fetch(CLOUD_SYNC_URL, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    if (!res.ok) return { submissions: [], bookings: [] };
    const data = await res.json();
    return {
      submissions: Array.isArray(data.submissions) ? data.submissions : [],
      bookings: Array.isArray(data.bookings) ? data.bookings : []
    };
  } catch (err) {
    console.warn('Cloud Sync — Error reading remote dashboard data:', err);
    return { submissions: [], bookings: [] };
  }
}

/**
 * Push submission or booking entry to Cloud Store so it's instantly accessible across all devices
 */
export async function pushToCloudStore(type, entry) {
  try {
    const current = await fetchRemoteData();
    const isBooking = type === 'booking' || entry.date || entry.time || entry.type === 'Booking';

    if (isBooking) {
      // Avoid duplicate booking entries
      const exists = current.bookings.some(b => b.id === entry.id || (b.email === entry.email && b.date === entry.date && b.time === entry.time));
      if (!exists) {
        current.bookings.unshift(entry);
      }
    } else {
      // Avoid duplicate submission entries
      const exists = current.submissions.some(s => s.id === entry.id || (s.email === entry.email && s.timestamp === entry.timestamp));
      if (!exists) {
        current.submissions.unshift(entry);
      }
    }

    await fetch(CLOUD_SYNC_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(current)
    });
    return current;
  } catch (err) {
    console.warn('Cloud Sync — Error pushing submission to cloud:', err);
    return null;
  }
}

/**
 * Saves a new booking request to the Google Spreadsheet and Cloud Store.
 */
export async function saveBookingSub(bookingData) {
  const payload = {
    type: 'Booking',
    timestamp: new Date().toISOString(),
    ...bookingData
  };

  // Sync to Cloud Store asynchronously
  pushToCloudStore('booking', payload).catch(console.error);

  return sendToSheet(payload);
}

/**
 * Saves a contact form submission to the Google Spreadsheet and Cloud Store.
 */
export async function saveContactSub(contactData) {
  const payload = {
    type: 'Contact',
    timestamp: new Date().toISOString(),
    ...contactData
  };

  // Sync to Cloud Store asynchronously
  pushToCloudStore('submission', payload).catch(console.error);

  return sendToSheet(payload);
}

