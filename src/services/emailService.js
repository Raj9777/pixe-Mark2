/**
 * emailService.js
 * Central EmailJS helper — all form submissions go through here.
 *
 * On every booking TWO emails fire simultaneously via Promise.all():
 *   1. Owner notification  → ratanraj9777@gmail.com
 *   2. Customer confirmation → the person who booked
 *
 * On contact form → one email notification to ratanraj9777@gmail.com
 */
import emailjs from '@emailjs/browser';

const SERVICE_ID         = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY         = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const T_BOOKING          = import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING;
const T_CONFIRMATION     = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION;
const T_CONTACT          = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;

const OWNER_EMAIL        = 'ratanraj9777@gmail.com';

// Initialise EmailJS once
emailjs.init({ publicKey: PUBLIC_KEY });

/* ─────────────────────────────────────────────────────────────
   BOOKING — sends two emails in parallel:
     • Owner alert   (T_BOOKING)
     • Customer confirmation (T_CONFIRMATION)

   EmailJS template variables used:
     BOOKING template   : from_name, from_email, from_phone,
                          service, message, booking_date,
                          booking_time, submitted_at, to_email
     CONFIRMATION template: to_name, to_email, from_email,
                            from_phone, service, booking_date,
                            booking_time
───────────────────────────────────────────────────────────── */
export async function sendBookingEmail({ name, email, phone, service, message, date, time }) {
  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Format the date nicely for the emails
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      })
    : date;

  // ── 1. Owner notification ─────────────────────────────────
  const ownerNotification = emailjs.send(SERVICE_ID, T_BOOKING, {
    to_email:     OWNER_EMAIL,
    from_name:    name,
    from_email:   email,
    from_phone:   phone || 'Not provided',
    service,
    message:      message || 'No message provided',
    booking_date: formattedDate,
    booking_time: time,
    submitted_at: submittedAt,
  });

  // ── 2. Customer confirmation ──────────────────────────────
  // Only send if the confirmation template ID is configured
  const customerConfirmation = T_CONFIRMATION && T_CONFIRMATION !== 'template_yyyyyyy'
    ? emailjs.send(SERVICE_ID, T_CONFIRMATION, {
        to_name:      name.split(' ')[0],  // First name only
        to_email:     email,               // ← goes to the customer
        from_email:   OWNER_EMAIL,
        from_phone:   phone || '',
        service,
        booking_date: formattedDate,
        booking_time: time,
        submitted_at: submittedAt,
      })
    : Promise.resolve(); // Silently skip if not configured yet

  // Fire both at the same time — don't wait for one before starting the other
  const results = await Promise.allSettled([ownerNotification, customerConfirmation]);

  // Log any failures (won't throw — UI still shows success)
  results.forEach((result, i) => {
    if (result.status === 'rejected') {
      const label = i === 0 ? 'Owner notification' : 'Customer confirmation';
      console.error(`EmailJS — ${label} failed:`, result.reason);
    }
  });

  // Only throw if BOTH failed (owner notification is the critical one)
  if (results[0].status === 'rejected') {
    throw results[0].reason;
  }

  return results;
}

/* ─────────────────────────────────────────────────────────────
   CONTACT FORM — sends one notification to owner
   Template variables: from_name, from_email, interest,
                       budget, message, to_email, submitted_at
───────────────────────────────────────────────────────────── */
export async function sendContactEmail({ name, email, interest, budget, message }) {
  return emailjs.send(SERVICE_ID, T_CONTACT, {
    to_email:     OWNER_EMAIL,
    from_name:    name,
    from_email:   email,
    interest,
    budget:       budget || 'Not specified',
    message:      message || 'No message provided',
    submitted_at: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  });
}
