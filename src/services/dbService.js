const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || '';

// Handle missing/placeholder webhook URL gracefully
const isConfigured = 
  webhookUrl && 
  webhookUrl.startsWith('http') && 
  !webhookUrl.includes('your_google_sheets_apps_script_url');

/**
 * Sends a form submission payload to the Google Sheets Apps Script Webhook.
 * Uses a text/plain Content-Type to prevent CORS preflight OPTIONS requests,
 * ensuring robust submission directly from the browser.
 * 
 * @param {Object} payload 
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
    throw error;
  }
}

/**
 * Saves a new booking request to the Google Spreadsheet.
 * 
 * @param {Object} bookingData
 */
export async function saveBookingSub({ name, email, phone, service, message, date, time }) {
  return sendToSheet({
    type: 'Booking',
    name,
    email,
    phone,
    service,
    message,
    date,
    time
  });
}

/**
 * Saves a contact form submission to the Google Spreadsheet.
 * 
 * @param {Object} contactData
 */
export async function saveContactSub({ name, email, interest, budget, message }) {
  return sendToSheet({
    type: 'Contact',
    name,
    email,
    interest,
    budget,
    message
  });
}
