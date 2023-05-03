// en array med färgerna i ordningen som de ska användas
const colors = ["lightgreen", "paleturquoise", "lightseagreen", "lightblue", "cornflowerblue"];

// en array med storlekarna på texten i ordningen som de ska användas
const fontSizes = ["11px", "19px", "24px", "30px", "40px"];

// en ny behållare för rader
const rowsContainer = document.createElement("div");
rowsContainer.setAttribute("id", "rows-container");

// Loopa igenom arrayen med färger och storlekar
for (let i = 0; i < colors.length; i++) {
  // Skapa ett nytt element för varje rad
  const row = document.createElement("div");

  // texten för raden
  const rowText = document.createTextNode("Rad " + (i + 1));
  row.append(rowText);

  // bakgrundsfärgen
  row.style.backgroundColor = colors[i];

  // textstorleken
  row.style.fontSize = fontSizes[i];

   // textfärgen
   row.style.color = "förstablue";

  // textcentrering
  row.style.textAlign = "center";

  // Lägg till mellanrum mellan raderna utom den första
  if (i > 0) {
    row.style.marginTop = "19px";
  }

  // Lägg till raden till behållaren för rader
  rowsContainer.append(row);
}

// ny behållare för allt innehåll och lägg till behållaren för rader
const container = document.createElement("div");
container.classList.add("container");
container.append(rowsContainer);

// behållaren för allt innehåll till body-elementet
document.body.append(container);

// placera behållaren för rader 
rowsContainer.style.margin = "auto";
rowsContainer.style.width = "92%";



// Spalterna


