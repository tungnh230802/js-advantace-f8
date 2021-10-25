// this.firstName = 'Minh';
// this.lastName = 'Thu';
// const teacher = {
//     firstName: 'Minh',
//     lastName: 'Thao?',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// console.log(teacher.getFullName());
// const getTeacherName = teacher.getFullName.bind(teacher);
// console.log(getTeacherName());

// const teacher = {
//   firstName: "Minh",
//   lastName: "Thao?",
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// const button = document.querySelector("button");
// button.onclick = teacher.getFullName.bind(teacher);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
  const cars = ["JAV"];
  const root = $("#root");
  const input = $("#input");
  const submit = $("#submit");

  return {
    add(car) {
      cars.push(car);
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const html = cars
        .map(
          (car, index) =>
            `<li>${car}</li> <span class="delete" data-index="${index}">&times</span>`
        )
        .join();

      root.innerHTML = html;
    },
    handleDelete(e) {
      const deleteBtn = e.target.closest(".delete");
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(index);
        this.render();
      }
    },
    init() {
      submit.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = null;
        input.focus();
      };

      root.onclick = this.handleDelete.bind(this);
      this.render();
    },
  };
})();

app.init();
