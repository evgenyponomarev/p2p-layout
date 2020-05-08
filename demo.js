document.getElementById('addFile').addEventListener("click", toggleAddFile);
document.getElementById('changeRelay').addEventListener("click", toggleChangeRelay);
document.getElementById('toggleLogs').addEventListener("click", toggleLogs);

var relays = document.getElementsByClassName("chooseRelay");
for (var i = 0; i < relays.length; i++) {
    relays[i].addEventListener('click', chooseChangeRelay);
}

function toggleAddFile() {
    section = document.getElementById('addFileSection');
    if(section.style.display == 'none')
      section.style.display = 'block'
    else
      section.style.display = 'none'
}
function toggleChangeRelay() {
    section = document.getElementById('changeRelaySection');
    if(section.style.display == 'none')
      section.style.display = 'block'
    else
      section.style.display = 'none'
}
function toggleLogs() {
    section = document.getElementById('logs');
    if(section.style.display == 'none')
      section.style.display = 'block'
    else
      section.style.display = 'none'
}
function chooseChangeRelay(event) {
  document.getElementById('relayId').innerText = event.target.innerText;
  document.getElementById('changeRelaySection').style.display = 'none';
}
