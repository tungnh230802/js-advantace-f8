const init = {
  cars: ["loli"],
};

export default function reducer(state = init, action, args) {
  switch (action) {
    case "ADD":
      const [newCar] = args;
      return {
        ...state,
        cars: [...state.cars, newCars],
      };
      break;
    default:
      return state;
  }
}
