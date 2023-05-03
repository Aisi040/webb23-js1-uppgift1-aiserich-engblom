
// en stor box för hela layouten
const mainContainer = document.createElement('div');
mainContainer.style.border = '1px solid black'; // Svart linjeram
mainContainer.style.display = 'flex'; // Använd flexbox för att placera spalterna bredvid varandra
mainContainer.style.justifyContent = 'space-between'; // Skapa utrymme mellan spalterna
mainContainer.style.padding = '50px'; // Lägg till padding på huvudbehållaren
mainContainer.style.margin = '50px'; // Skapa 20px av marginal runt hela layouten


// en box för den första spalten
const firstColumn = document.createElement('div');
firstColumn.style.border = '10px solid #c9a0dc'; // Ljus lila ram
firstColumn.style.width = '4%'; // Sätt bredden 

// en lista 
const list = document.createElement('ul');
list.style.margin = 0; // Ta bort marginalen runt listan
list.style.padding = 0; // Ta bort padding runt listan

for (let i = 0; i < 10; i++) {
  const listItem = document.createElement('li');
  listItem.innerText = i.toString();

  // bakgrundsfärgen för varje nummer
  if (i === 0 || i === 2 || i === 6 || i === 8) {
    listItem.style.backgroundColor = 'black';
    listItem.style.color = 'white';
  } else if (i === 4) {
    listItem.style.backgroundColor = '#c9a0dc';
    listItem.style.color = 'white';
  } else {
    listItem.style.backgroundColor = 'white';
    listItem.style.color = 'black';
  }

  listItem.style.listStyle = 'none'; // Ta bort prickarna
  list.append(listItem);
}

firstColumn.append(list);




// en box för den andra spalten
const secondColumn = document.createElement('div');
secondColumn.style.border = '10px solid #c9a0dc'; // Ljus lila ram
secondColumn.style.width = '4%'; // Sätt bredden 

// en lista och lägg till varje nummer som en listpunkt
const list2 = document.createElement('ul');
list2.style.margin = 0; // Ta bort marginalen runt listan
list2.style.padding = 0; // Ta bort padding runt listan

for (let i = 9; i >= 0; i--) {
  const listItem = document.createElement('li');
  listItem.innerText = i.toString();

  // bakgrundsfärgen för varje nummer
  if (i === 8) {
    listItem.style.backgroundColor = '#c9a0dc';
    listItem.style.color = 'white';
  } else if (i === 6 || i === 4 || i === 2 || i === 0) {
    listItem.style.backgroundColor = 'black';
    listItem.style.color = 'white';
  } else {
    listItem.style.backgroundColor = 'white';
    listItem.style.color = 'black';
  }

  listItem.style.listStyle = 'none'; // Ta bort prickarna
  listItem.style.textAlign = 'center'; // Centrera texten
  list2.append(listItem);
}

secondColumn.append(list2);








// en box för den tredje spalten
const thirdColumn = document.createElement('div');
thirdColumn.style.border = '10px solid #c9a0dc'; // Ljus lila ram
thirdColumn.style.width = '4%'; // Sätt bredden

// en lista och en listpunkt
const list3 = document.createElement('ul');
list3.style.margin = 0; // Ta bort marginalen runt listan
list3.style.padding = 0; // Ta bort padding runt listan

const texts = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
for (let i = 0; i < texts.length; i++) {
  const listItem = document.createElement('li');
  listItem.innerText = texts[i];

  //  bakgrundsfärgen och textfärgen för varje nummer
  if (i === 0 || i % 2 === 0) {
    listItem.style.backgroundColor = 'black';
    listItem.style.color = 'white';
  } else {
    listItem.style.backgroundColor = 'white';
    listItem.style.color = 'black';
  }

  // bakgrundsfärgen på sex till ljuslila
  if (i === 5) {
    listItem.style.backgroundColor = '#c9a0dc';
  }

  listItem.style.listStyle = 'none'; // Ta bort prickarna
  listItem.style.textAlign = 'right'; // Högerjustera texten
  list3.append(listItem);
}

thirdColumn.append(list3);

// alla tre spalter i huvudboxen
mainContainer.append(firstColumn, secondColumn, thirdColumn);

// huvudbehållaren till HTML-sidan
document.body.appendChild(mainContainer);
