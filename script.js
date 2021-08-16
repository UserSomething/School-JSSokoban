var gameBoard = document.getElementById('gameBoard');

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal",
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: "entity-player",
  Block: "entity-block",
  BlockDone: "entity-block-goal",
};

var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
      [ [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],[" "],[" "],["W"],[" "],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],[" "],[" "],["W"],["B"],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],["W"],["W"],["W"],[" "],[" "],["B"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],["W"],[" "],[" "],["B"],[" "],["B"],[" "],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ ["W"],["W"],["W"],[" "],["W"],[" "],["W"],["W"],[" "],["W"],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"], ],
      [ ["W"],[" "],[" "],[" "],["W"],[" "],["W"],["W"],[" "],["W"],["W"],["W"],["W"],["W"],[" "],[" "],["G"],["G"],["W"], ],
      [ ["W"],[" "],["B"],[" "],[" "],["B"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],["G"],["G"],["W"], ],
      [ ["W"],["W"],["W"],["W"],["W"],[" "],["W"],["W"],["W"],[" "],["W"],["P"],["W"],["W"],[" "],[" "],["G"],["G"],["W"], ],
      [ [" "],[" "],[" "],[" "],["W"],[" "],[" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],["W"],["W"],["W"], ],
      [ [" "],[" "],[" "],[" "],["W"],["W"],["W"],["W"],["W"],["W"],["W"],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
      [ [" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "],[" "], ],
    ],
};

var player = {
  // Starting position, zero-based
  posX: 11,
  posY: 11,
}

arrayMapToHTMLMap();

document.addEventListener("keydown", movePlayer);
function movePlayer(e) {
  e.preventDefault();

  let tileMap = tileMap01.mapGrid;

  switch (e.keyCode) {
    case 37:
        //Left key
        player.posY--;
        if (tileMap[player.posX][player.posY][0] == "W") {
          player.posY++;
        }

        break;
    case 38:
        //Up key
        player.posX--;
        if (tileMap[player.posX][player.posY][0] == "W") {
          player.posX++;
        }

        break;
    case 39:
        //Right key
        player.posY++;
        if (tileMap[player.posX][player.posY][0] == "W") {
          player.posY--;
        }

        break;
    case 40:
        //Down key
        player.posX++;
        if (tileMap[player.posX][player.posY][0] == "W") {
          player.posX--;
        }

        break;
  }

  tileMap[player.posX][player.posY][0] = "P";

  arrayMapToHTMLMap();
}

function updateHTMLMap() {
  let tileMap = tileMap01.mapGrid;
  switch(tileMap[i][j][0]) {
    case " ":
      td.innerHTML = "Not";
      td.classList.add(Tiles.Space);
      break;
    case "W":
      td.innerHTML = "Wall";
      td.classList.add(Tiles.Wall);
      break;
    case "B":
      td.innerHTML = "MoveBlock";
      td.classList.add(Entities.Block);
      break;
    case "G":
      td.innerHTML = "Goal";
      td.classList.add(Tiles.Goal);
      break;
    case "P":
      td.innerHTML = "Player";
      td.classList.add(Entities.Character);
      break;
  }
}

function arrayMapToHTMLMap() {
  let mapXLength = tileMap01.width;
  let mapYLength = tileMap01.height;

  for (let i = 0; i < mapYLength; i++) {
    let tr = document.createElement('tr');
    gameBoard.append(tr);

    for (let j = 0; j < mapXLength; j++) {
      let td = document.createElement('td');
      tr.append(td);

      let tileMap = tileMap01.mapGrid;
      switch(tileMap[i][j][0]) {
        case " ":
          td.innerHTML = "Not";
          td.classList.add("tile-space");
          break;
        case "W":
          td.innerHTML = "Wall";
          td.classList.add("tile-wall");
          break;
        case "B":
          td.innerHTML = "MoveBlock";
          td.classList.add("entity-block");
          break;
        case "G":
          td.innerHTML = "Goal";
          td.classList.add("tile-goal");
          break;
        case "P":
          td.innerHTML = "Player";
          td.classList.add("entity-player");
          break;
      }
    }
  }
}