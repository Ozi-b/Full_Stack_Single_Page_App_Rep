const carsUL = document.getElementById("cars");
const button = document.getElementById("carsButton");
const clearButton = document.getElementById("carsClear");
const container = document.getElementById("carContainer");
const body = document.getElementById("body");
carsUL.setAttribute("id", "outList");

function getAllCars() {
  fetch("http://localhost:3000/api/automobiles/cars")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(element);
        const carList = document.createElement("li");
        const carDiv = document.createElement("div");
        carDiv.setAttribute("id", "carDiv");
        carsUL.appendChild(carList);
        carList.appendChild(carDiv);
        carDiv.innerHTML = `Model: ${element.model}<br>Color: ${element.color}<br>
        Year: ${element.year}<br>MSRP: ${element.MSRP}`;
      });
    });
}

// getAllCars();

button.addEventListener("click", function () {
  body.appendChild(container);
  getAllCars();
});

clearButton.addEventListener("click", function () {
  container.hidden = true;
  container.remove();
});
