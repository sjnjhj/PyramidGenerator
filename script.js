const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return (
    "&nbsp".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    "&nbsp".repeat(rowCount - rowNumber)
  );
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  if (result !== "") {
    result += "<br>";
  }
  result += row;
}

document.getElementById("result").innerHTML = result;
