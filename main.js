const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (function () {
  const cars = ["BMW"];
  const showCar = $("#root");
  const inputCar = $("#input");
  const submitCar = $("#subbmid");
  return {
    add(car) {
      cars.push(car);
    },
    del(index) {
      cars.splice(index, 1);
    },
    show() {
      const htmls = cars
        .map(function (car, index) {
          return `<li>${car} <button data-index="${index}" id="delete">X</button>
        </li>`;
        })
        .join("");
      showCar.innerHTML = htmls;
    },
    handeldelete(event) {
      const delIndex = event.target.closest("#delete");
      if (delIndex) {
        this.del(delIndex.getAttribute("data-index"));
        this.show();
      }
    },
    init() {
      document.addEventListener("keydown", (event) => {
        if (event.which === 13) {
          const car = inputCar.value;
          if (car !== "") {
            this.add(car);
            this.show();
            inputCar.value = null;
            inputCar.focus();
          } else {
            inputCar.focus()
          }
        }
      });
      submitCar.onclick = () => {
        const car = inputCar.value;
        if (car !== "") {
          this.add(car);
          this.show();
          inputCar.value = null;
          inputCar.focus();
        }
      };
      showCar.onclick = this.handeldelete.bind(this);
      this.show();
    },
  };
})();
app.init();
