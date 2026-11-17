// ההגדרות של Firebase עבור Nachshon City (הפרויקט nachshon-city).
// הקובץ הזה מתפרסם באתר, וזה בסדר: את הנתונים מגינים החוקים שהגדרת ב-Firebase, לא ההגדרות האלה.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAbevEkZwDbuXhnPEZRX_IlXZ0wCz5qXrw",
  authDomain: "nachshon-city.firebaseapp.com",
  databaseURL: "https://nachshon-city-default-rtdb.firebaseio.com",
  projectId: "nachshon-city",
  storageBucket: "nachshon-city.firebasestorage.app",
  messagingSenderId: "822904704532",
  appId: "1:822904704532:web:db8fe95b1f5c5c54b5a101",
  measurementId: "G-MMK9NDE3BY"
};

// ראש העיר: כתובת ה-Gmail שלו, בצורה מקודדת (SHA-256), כדי שהכתובת עצמה לא תופיע באתר.
// היא חייבת להיות אותה כתובת שכתובה בחוקים של Firestore.
window.OWNER_EMAIL_SHA256 = "ff5071985839f3b09dd214191e8c3fd9c6a87571fdd4314f7e0df7007133a708";
