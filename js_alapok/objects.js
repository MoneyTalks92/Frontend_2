const myPlayer = {
  // 'key': 'value',
  'name': 'John',
  // a key oldalon az aposztróf elhanyagolható
  health: 100,
  alive: true,
  shoot: function () {
    console.log(myPlayer.name, 'lő');
  }
};

console.log('a játékos neve:', myPlayer.name);

// a myPlayer object name propertyjének adunk új értéket
myPlayer.name = 'Peter';

myPlayer.levelUp = function () {
  myPlayer.health = myPlayer.health + 50;
};

// metódus: egy objektumon belüli függvény

myPlayer.levelUp();
console.log('a játékos élete:', myPlayer.health);

const newObject = {
  myMethod: function () {
    // this kulcsszó: az adott object kontextusát jelenti
    console.log(this);
    console.log(this.myProp);
  },
  myProp: 3
};

newObject.myMethod();

// objecten végigmegyünk for ciklussal: key-value páronként
for (let key in myPlayer) {
  // key
  console.log(key);
  // value
  console.log(myPlayer[key]);
}

const myArray = [2, 3, 4];
// a tömb is object
console.log(typeof (myArray));