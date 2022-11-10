console.log("something");

const carsUL = document.getElementById("cars");
fetch("http://localhost:3000/api/automobiles/cars")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const carList = document.createElement("li");
      console.log(element);
      carList.innerText = element.model;
      carsUL.appendChild(carList);
    });
  });
