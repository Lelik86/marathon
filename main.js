const subZero = {
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["ice", "cream"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  },
  kitana = {
    name: "Kitana",
    hp: 90,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["nuclear", "mouth"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  },
  scorpion = {
    name: "Scorpion",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["nuclear", "mouth"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  },
  liukang = {
    name: "Liu-Kang",
    hp: 70,
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ["nuclear", "mouth"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  },
  sonya = {
    name: "Sonya",
    hp: 60,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["nuclear", "mouth"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  };

const $arenas = document.querySelector(".arenas");

function createPlayer(player, character) {
  const $player = document.createElement("div"),
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

createPlayer("player1", liukang);
createPlayer("player2", scorpion);
