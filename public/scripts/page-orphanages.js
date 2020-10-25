/* Longitude e latitude de Maceió (para mostrar regiões com orfanatos):
-9.5985924,-35.7592344 */
const map = L.map('mapid').setView([-9.5985924, -35.7592344], 12.4);

// Add imagem do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add ícone
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [48, 48],
  iconAnchor: [29, 68],
  popAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  // Add popup overlay
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
    // o path é /orphange... pq a página é renderizada pelo servidor
    // que acessa as páginas na pasta view e serve a partir da URL raiz "/"
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" ></a>`
  );

  // Add marcador no mapa
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

// Capturar os span hidden, preenchidos por pages.js
const orphanagesSpan = document.querySelectorAll('.orphanages span');
// Obter dados dos span para alimentar o popup no mapa
orphanagesSpan.forEach((span) => {
  orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };

  addMarker(orphanage);
});
