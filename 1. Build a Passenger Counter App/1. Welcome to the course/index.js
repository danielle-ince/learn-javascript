// javascript

// document.getElementById('count-value').innerText = 5;

function incrementCount() {
  let count = document.getElementById('count-value').innerText;
  document.getElementById('count-value').innerText = parseInt(count) + 1;
}


function decrementCount() {
  let count = document.getElementById('count-value').innerText;
  if (count > 0) {
    document.getElementById('count-value').innerText = parseInt(count) - 1;
  }
}

function saveCount() {
  const [ entriesContainer ] = document.getElementsByClassName('Count-App__previous-entries');
  const numEntries = document.getElementsByClassName('Count-App__previous-entry').length;
  let count = document.getElementById('count-value').innerText;
  let newEntry = document.createElement('div');
  newEntry.classList.add('Count-App__previous-entry');
  const now = new Date(Date.now());
  const timestamp = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes() + 1}:${now.getSeconds()}`
  const entryCount = document.createElement('div');
  const entryTime = document.createElement('div');
  const entryNum = document.createElement('div');
  entryCount.innerText = count;
  entryTime.innerText = timestamp;
  entryNum.innerText = `${numEntries + 1}`;

  entriesContainer.classList.remove('hidden');
  newEntry.appendChild(entryNum);
  newEntry.appendChild(entryTime);
  newEntry.appendChild(entryCount);
  entriesContainer.appendChild(newEntry);
}