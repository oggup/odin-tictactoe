let cells = document.querySelectorAll(".cells");

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    console.log(cell.id);
  });
});
