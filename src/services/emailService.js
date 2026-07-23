/**
 * emailService.js
 * Central EmailJS helper — all form submissions go through here.
 *
 * On every booking TWO emails fire simultaneously via Promise.all():
 *   1. Owner notification  → raj@pixe.in
 *   2. Customer confirmation → the person who booked
 *
 * On contact form → one email notification to raj@pixe.in
 */
import emailjs from '@emailjs/browser';

const SERVICE_ID         = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY         = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const T_BOOKING          = import.meta.env.VITE_EMAILJS_TEMPLATE_BOOKING;
const T_CONFIRMATION     = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION;
const T_CONTACT          = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;

const OWNER_EMAIL        = 'raj@pixe.in';

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

  // ── Owner notification ─────────────────────────────────
  try {
    const result = await emailjs.send(SERVICE_ID, T_BOOKING, {
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
    return result;
  } catch (error) {
    console.error('EmailJS — Owner notification failed:', error);
    throw error;
  }
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
