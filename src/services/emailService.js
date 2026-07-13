/**
 * emailService.js
 * Central EmailJS helper — all form submissions go through here.
 * Notifications land at ratanraj9777@gmail.com via your EmailJS templates.
 */
import emailjs from '@emailjs/browser';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const T_BOOKING   = import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING;
const T_CONTACT   = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;

// Initialise once
emailjs.init({ publicKey: PUBLIC_KEY });

/**
 * Send booking notification (from PopupForm)
 * Template variables: from_name, from_email, from_phone,
 *                     service, message, booking_date, booking_time, to_email
 */
export async function sendBookingEmail({ name, email, phone, service, message, date, time }) {
  return emailjs.send(SERVICE_ID, T_BOOKING, {
    to_email:     'ratanraj9777@gmail.com',
    from_name:    name,
    from_email:   email,
    from_phone:   phone || 'Not provided',
    service,
    message:      message || 'No message provided',
    booking_date: date,
    booking_time: time,
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  });
}

/**
 * Send contact form notification (from ContactPage)
 * Template variables: from_name, from_email, interest,
 *                     budget, message, to_email
 */
export async function sendContactEmail({ name, email, interest, budget, message }) {
  return emailjs.send(SERVICE_ID, T_CONTACT, {
    to_email:  'ratanraj9777@gmail.com',
    from_name:  name,
    from_email: email,
    interest,
    budget:     budget || 'Not specified',
    message:    message || 'No message provided',
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  });
}
