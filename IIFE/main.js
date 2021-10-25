(function (message) {
  console.log(message);
})("chao ban~");

const app = (function () {
  const cars = [];

  return {
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    remove(index) {
      cars.splice(index, 1);
    },
  };
})();
