let gameBoardModule = (function () {
  let gameBoard = ["Puggo"];
  return { gameBoard };
})();

let displayControlModule = (function () {
  let gridBoxes = document.querySelectorAll(".cells");
  let renderArrayToScreen = (e) => {
    console.log(e);
    console.log(gridBoxes[e.target.id].textContent);
    if (gridBoxes[e.target.id].textContent != "") {
      return;
    } else gridBoxes[e.target.id].textContent = gameBoardModule.gameBoard;
  };
  gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener("click", renderArrayToScreen);
  });
})();

let createPlayer = (playerName, playerNumber, assignedXO) => {
  let getPlayerName = () => {
    console.log(`This is the name of player # ${playerNumber}, ${playerName}`);
  };
  return { getPlayerName, playerName, playerNumber, assignedXO };
};

let Rakk = createPlayer("Rakk", 1, "X");
let Papaya = createPlayer("Papaya", 2, "O");
