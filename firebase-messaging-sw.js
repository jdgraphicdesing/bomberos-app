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

// Mostrar notificación cuando la app está en segundo plano o cerrada
messaging.onBackgroundMessage((payload) => {
  console.log('Notificación en background:', payload);
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'alerta-bomberos',
    requireInteraction: true,
    vibrate: [400, 100, 400, 100, 400, 100, 800]
  });
});
