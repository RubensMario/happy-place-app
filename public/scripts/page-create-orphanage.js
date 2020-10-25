const map = L.map('mapid').setView([-9.5985924, -35.7592344], 12.4);

// Add imagem do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add ícone
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [48, 48],
  iconAnchor: [29, 68],
});

let marker;

// criar e adicionar marcador
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // atribui valor lat ao elemento com atributo name=lat
  document.querySelector('[name=lat]').value = lat;
  // atribui valor lng ao elemento com atributo name=lng
  document.querySelector('[name=lng]').value = lng;

  // remover ícone
  marker && map.removeLayer(marker);

  // add camada do ícone
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar novo campo de fotos
function addPhotoField() {
  // pegar container de fotos #images
  const container = document.querySelector('#images');

  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // realizar a duplição da última imagem add
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio, se sim, não add ao container de imagens
  // ou seja, não abrir novo input de imagem
  const input = newFieldContainer.children[0];

  if (input.value == '') return;

  // limpar o campo antes de add ao container de imagens
  newFieldContainer.children[0].value = '';

  // add duplicata ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  // havendo somente um campo, o botão x irá limpar o campo
  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = '';
    return;
  }

  // havendo ao menos 2 campos, o botão x irá deletar o campo correspondente
  span.parentNode.remove();
}

function toggleSelect(event) {
  // retirar a classe active dos botões
  document
    .querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'));

  // pegar o botão clicado
  const button = event.currentTarget;
  // colocar a classe active
  button.classList.add('active');

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  // atribuir ao input (como value) o dado registrado no atributo data
  input.value = button.dataset.value;
}

// Verifica se há ponto selecionado no mapa
function validate() {
  const latValue = document.querySelector('[name=lat]').value;
  const lngValue = document.querySelector('[name=lng]').value;

  const isLatAndLng = latValue && lngValue;

  if (!isLatAndLng) {
    event.preventDefault();
    alert(
      'Selecione um ponto no mapa para indicar a localização do estabelecimento.'
    );
  }
}
