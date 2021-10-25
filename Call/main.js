function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function ChickKen(name, weight, legs) {
  Animal.call(this, name, weight);
  this.legs = legs;
}

const chic1 = new ChickKen("ga con", 28, 2);

console.log(chic1);

function logger() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}

logger(1, 2, 3, 4, 5, 6);
