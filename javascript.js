// const inputColor = document.querySelectorAll(
//   "[type = 'radio']"
// );
// const radioCheckedRef =
//   document.querySelector("[checked]");
// inputColor.forEach((input) => {
//   console.log(input);
//   input.addEventListener("change", onInputColor);
// });

// function onInputColor(event) {
//   console.log(event.target.value);
//   if (event.target.value === "red") {
//     document.body.style.backgroundColor = "red";
//   } else if (event.target.value === "white") {
//     document.body.style.backgroundColor = "white";
//   } else if (event.target.value === "green") {
//     document.body.style.backgroundColor = "green";
//   }
// }

const inputEl = document.getElementById(
  "#name-input"
);
const outputEl = document.getElementById(
  "#name-output"
);
inputEl.addEventListener("input", onClickButon);
function onClickButon(event) {
  console.log(event);
}
