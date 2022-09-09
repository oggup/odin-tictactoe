let gameBoardModule = (function () {
  let gameBoard = ["X"];
  return { gameBoard };
})();

let displayControlModule = (function () {
  let testF = () => {
    console.log("this is a private function call inside of the module object");
  };
  return { testF };
})();

let createPlayer = (playerName, playerNumber, assignedXO) => {
  let getPlayerName = () => {
    console.log(`This is the name of player # ${playerNumber}, ${playerName}`);
  };
  return { getPlayerName, playerName, playerNumber, assignedXO };
};

let renderArrayToScreenModule = (function () {
  const gridBoxes = document.querySelectorAll(".cells");
  gridBoxes[0].textContent = gameBoardModule.gameBoard;
  console.log(
    `array as seen inside of renderArraytoScreenModule, ${gameBoardModule.gameBoard} `
  );
  console.log(
    `node list of gridboxes as seen inside of renderArraytoScreenModule `,
    gridBoxes
  );
  return {};
})();

let Rakk = createPlayer("Rakk", 1, "X");
let Papaya = createPlayer("Papaya", 2, "O");

renderArrayToScreenModule;
// let cells = document.querySelectorAll(".cells");

// cells.forEach((cell) => {
//   cell.addEventListener("click", (e) => {
//     console.log(cell.id);
//   });
// });
