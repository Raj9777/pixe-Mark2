import { supabase } from './supabaseClient';

/**
 * Saves a new booking request to the Supabase database.
 * 
 * @param {Object} bookingData
 * @param {string} bookingData.name
 * @param {string} bookingData.email
 * @param {string} bookingData.phone
 * @param {string} bookingData.service
 * @param {string} bookingData.message
 * @param {string} bookingData.date
 * @param {string} bookingData.time
 */
export async function saveBookingSub({ name, email, phone, service, message, date, time }) {
  if (!supabase) {
    console.warn('Supabase is not initialized. Skipping DB insert.');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          service,
          message: message || null,
          booking_date: date || null,
          booking_time: time || null,
        },
      ])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Supabase — Error inserting booking:', error);
    throw error;
  }
}

/**
 * Saves a contact form submission to the Supabase database.
 * 
 * @param {Object} contactData
 * @param {string} contactData.name
 * @param {string} contactData.email
 * @param {string} contactData.interest
 * @param {string} contactData.budget
 * @param {string} contactData.message
 */
export async function saveContactSub({ name, email, interest, budget, message }) {
  if (!supabase) {
    console.warn('Supabase is not initialized. Skipping DB insert.');
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          interest: interest || null,
          budget: budget || null,
          message: message || null,
        },
      ])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Supabase — Error inserting contact:', error);
    throw error;
  }
}
