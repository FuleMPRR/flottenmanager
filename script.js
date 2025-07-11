
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

document.getElementById('fahrerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const div = document.createElement('div');
  div.textContent = data.personalnummer + ' – ' + data.vorname + ' ' + data.name;
  document.getElementById('fahrerListe').appendChild(div);
  e.target.reset();
});

document.getElementById('fahrzeugForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const div = document.createElement('div');
  div.textContent = data.id + ' – ' + data.marke + ' ' + data.modell;
  document.getElementById('fahrzeugListe').appendChild(div);
  e.target.reset();
});
