self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    // ब्राउज़र को तुरंत एक्टिवेट करने के लिए मजबूर करना
    self.skipWaiting(); 
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated!');
    return self.clients.claim();
});

// नेटवर्क रिक्वेस्ट को हैंडल करने के लिए (पॉप-अप ट्रिगर करने के लिए यह जरूरी है)
self.addEventListener('fetch', (event) => {
    // अभी हम सीधे इंटरनेट से फाइलें लोड होने दे रहे हैं
    event.respondWith(fetch(event.request));
});
self.registration.showNotification("", {
  body: "आचार्य रविंदर शास्त्री 11 जून से 15 जून तक धांगड़ (भिवानी) में उपस्थित रहेंगे",
  icon: "images/1000103410.jpg",
  badge: "images/1000103410.jpg"
});
