import { initializeApp, getApps } from 'firebase/app';
import { 
  getDatabase, 
  ref, 
  onValue, 
  push, 
  set, 
  update, 
  serverTimestamp 
} from 'firebase/database';

// Firebase Project Configuration
// Reads from Vite environment variables (.env)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAnlKOirESKMInfCtPJZTfXiVCrhoKrOSo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "pixe-3f70f.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "pixe-3f70f",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "pixe-3f70f.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "245433662797",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:245433662797:web:989ca7f5083e14c92dcb04",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-DM1SJBHZ4Y",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://pixe-3f70f-default-rtdb.firebaseio.com"
};

// Initialize Firebase App singleton
let app;
let db;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getDatabase(app);
} catch (err) {
  console.warn('Firebase initialization notice:', err.message);
}

/**
 * Subscribe to real-time form submissions across all connected devices
 * @param {Function} callback Callback receiving array of submissions
 * @returns {Function} Unsubscribe function
 */
export function subscribeToRealtimeSubmissions(callback) {
  if (!db) return () => {};
  const submissionsRef = ref(db, 'submissions');
  
  const unsubscribe = onValue(submissionsRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      callback([]);
      return;
    }
    // Convert map object to array sorted by timestamp descending
    const list = Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    callback(list);
  }, (error) => {
    console.warn('Firebase Realtime Database listener notice:', error);
  });

  return unsubscribe;
}

/**
 * Subscribe to real-time call bookings across all connected devices
 * @param {Function} callback Callback receiving array of bookings
 * @returns {Function} Unsubscribe function
 */
export function subscribeToRealtimeBookings(callback) {
  if (!db) return () => {};
  const bookingsRef = ref(db, 'bookings');

  const unsubscribe = onValue(bookingsRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      callback([]);
      return;
    }
    // Convert map object to array sorted by timestamp descending
    const list = Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    callback(list);
  }, (error) => {
    console.warn('Firebase Realtime Database bookings listener notice:', error);
  });

  return unsubscribe;
}

/**
 * Push a new contact/quote submission to Firebase Realtime Database
 */
export async function pushSubmissionToFirebase(submissionData) {
  if (!db) return null;
  try {
    const submissionsRef = ref(db, 'submissions');
    const newRef = push(submissionsRef);
    const payload = {
      id: newRef.key,
      timestamp: new Date().toISOString(),
      serverCreated: serverTimestamp(),
      ...submissionData
    };
    await set(newRef, payload);
    return payload;
  } catch (err) {
    console.error('Firebase error pushing submission:', err);
    return null;
  }
}

/**
 * Push a new call booking to Firebase Realtime Database
 */
export async function pushBookingToFirebase(bookingData) {
  if (!db) return null;
  try {
    const bookingsRef = ref(db, 'bookings');
    const newRef = push(bookingsRef);
    const payload = {
      id: newRef.key,
      timestamp: new Date().toISOString(),
      serverCreated: serverTimestamp(),
      status: 'Pending',
      ...bookingData
    };
    await set(newRef, payload);
    return payload;
  } catch (err) {
    console.error('Firebase error pushing booking:', err);
    return null;
  }
}

/**
 * Update booking status in Firebase Realtime Database
 */
export async function updateFirebaseBookingStatus(bookingId, status) {
  if (!db || !bookingId) return false;
  try {
    const bookingRef = ref(db, `bookings/${bookingId}`);
    await update(bookingRef, { status });
    return true;
  } catch (err) {
    console.error('Firebase error updating booking status:', err);
    return false;
  }
}

export { db, app };
