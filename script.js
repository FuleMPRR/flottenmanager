
function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "block";
}

document.getElementById("vehicleForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  const div = document.createElement("div");
  div.innerHTML = "<strong>Fahrzeug:</strong><br>" + Array.from(inputs).map(i => i.value).join(" | ");
  document.getElementById("fahrzeugListe").appendChild(div);
  this.reset();
});

document.getElementById("fahrerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input");
  const div = document.createElement("div");
  div.innerHTML = "<strong>Fahrer:</strong><br>" + Array.from(inputs).map(i => i.value).join(" | ");
  document.getElementById("fahrerListe").appendChild(div);
  this.reset();
});

document.getElementById("schadenForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input, textarea");
  const div = document.createElement("div");
  div.innerHTML = "<strong>Schadensmeldung:</strong><br>" + Array.from(inputs).filter(i => i.type !== 'checkbox' || i.checked).map(i => i.value || i.labels?.[0]?.textContent).join(" | ");
  document.getElementById("schadenListe").appendChild(div);
  this.reset();
});

document.getElementById("pendenzForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input, textarea");
  const div = document.createElement("div");
  div.innerHTML = "<strong>Pendenz:</strong><br>" + Array.from(inputs).map(i => i.value).join(" | ");
  document.getElementById("pendenzListe").appendChild(div);
  this.reset();
});
