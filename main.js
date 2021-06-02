const subZero = {
  name: "Sub-Zero",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["ice", "cream"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

const kitana = {
  name: "Kitana",
  hp: 60,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["nuclear", "mouth"],
  attack: function () {
    console.log(this.name + " Fight...");
  },
};

function createPlayer(player, character) {
  const $arenas = document.querySelector(".arenas"),
    $player = document.createElement("div"),
    $progressbar = document.createElement("div"),
    $character = document.createElement("div"),
    $life = document.createElement("div"),
    $name = document.createElement("div"),
    $img = document.createElement("img");

  $arenas.appendChild($player);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  $player.classList.add(player);
  $progressbar.classList.add("progressbar");
  $character.classList.add("character");
  $life.classList.add("life");
  $name.classList.add("name");

  $img.src = character.img;
  $life.style.width = character.hp + "%";
  $name.innerText = character.name;
}

createPlayer("player1", subZero);
createPlayer("player2", kitana);
