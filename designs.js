const formElem = document.querySelector("#sizePicker");
const tableElem = document.querySelector("#pixelCanvas");

formElem.addEventListener("submit", formSubmit);
tableElem.addEventListener("click", addColor);

function formSubmit(event) {
  event.preventDefault();
  const formData = new FormData(formElem);

  const [width, height] = formData.entries();
  makeGrid(width[1], height[1]);
}

function makeGrid(width, height) {
  let grid = "";
  for (let i = 1; i <= width; i++) {
    grid += `<tr>`


    for (let j = 1; j <= height; j++) {
      grid += `<td class='cell'></td>`;
    }
    grid += `</tr>`;
  }
  tableElem.innerHTML = grid;
}

function addColor(e) {
  const color = document.querySelector("#colorPicker").value;
  if (e.target.classList.contains("cell")) {
    const event = e.target;
    console.log("berfore ask", e.target);
    if (event.hasAttribute("style")) {
      console.log("there is style attr to remove", e.target);
      event.removeAttribute("style");
    } else {
  
console.log("there is no att so we create it", e.target);

      event.style.backgroundColor = color;
    }
  }
}

