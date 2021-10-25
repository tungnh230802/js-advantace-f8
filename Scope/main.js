function makeCouter() {
  let couter = 0;

  function increate() {
    return couter++;
  }

  return increate;
}

const increate1 = makeCouter();
console.log(increate1());
console.log(increate1());
console.log(increate1());
