const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
    player: 1,
    name: "Sub-Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["ice", "cream"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  },
  player2 = {
    player: 2,
    name: "Kitana",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["nuclear", "mouth"],
    attack: function () {
      console.log(this.name + " Fight...");
    },
  };

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(character) {
  const $player = createElement("div", "player" + character.player),
    $progressbar = createElement("div", "progressbar"),
    $character = createElement("div", "character"),
    $life = createElement("div", "life"),
    $name = createElement("div", "name"),
    $img = createElement("img");

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  $img.src = character.img;
  $life.style.width = character.hp + "%";
  $name.innerText = character.name;

  return $player;
}

function changeHp(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );

  player.hp -= Math.ceil(Math.random() * 20);

  if (player.hp <= 0) {
    $playerLife.style.width = player.hp = 0;
  } else {
    $playerLife.style.width = player.hp + "%";
  }

  // Не клеится у меня в голове все это, не знаю как сделать этот кусок
  // универсальным, видимо дальше код будет меняться, но исходя из
  // текущего кода я больше ничего придумать не могу, очевидно моих знаний
  // слишком мало

  if (player1.hp <= 0) {
    $randomButton.disabled = true;
    $arenas.appendChild(playerLose(player2.name));
  } else if (player2.hp <= 0) {
    $randomButton.disabled = true;
    $arenas.appendChild(playerLose(player1.name));
  }
}

function playerLose(name) {
  const $loseTitle = createElement("div", "loseTitle");
  $loseTitle.innerText = name + " wins";
  return $loseTitle;
}

$randomButton.addEventListener("click", function () {
  changeHp(player1);
  changeHp(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
