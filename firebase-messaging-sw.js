importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC0iBa_aVPVt4ZCFV4jIvVzIqDF4VNq-Tw",
  authDomain: "bomberos-app-8bfac.firebaseapp.com",
  projectId: "bomberos-app-8bfac",
  storageBucket: "bomberos-app-8bfac.firebasestorage.app",
  messagingSenderId: "87146283844",
  appId: "1:87146283844:web:5d52c9a69cef1e5c2f4d11"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || '🚨 ALERTA NUEVA — Bomberos Haina';
  const body = payload.notification?.body || 'Nueva emergencia reportada';
  
  self.registration.showNotification(title, {
    body: body,
    icon: '/bomberos-app/icon-192.png',
    badge: '/bomberos-app/icon-192.png',
    tag: 'alerta-bomberos',
    renotify: true,
    requireInteraction: true,
    silent: false,
    vibrate: [400, 100, 400, 100, 400, 100, 800],
    actions: [
      { action: 'abrir', title: '🚒 Ver alerta' }
    ]
  });
});

// Abrir la app al tocar la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://jdgraphicdesing.github.io/bomberos-app/')
  );
});
