// 1
const inputColor = document.querySelectorAll(
  "[type = 'radio']"
);
const radioCheckedRef =
  document.querySelector("[checked]");
inputColor.forEach((input) => {
  input.addEventListener("change", onInputColor);
});

function onInputColor(event) {
  console.log(event.target.value);
  if (event.target.value === "red") {
    document.body.style.backgroundColor = "red";
  } else if (event.target.value === "white") {
    document.body.style.backgroundColor = "white";
  } else if (event.target.value === "green") {
    document.body.style.backgroundColor = "green";
  }
}
document.body.style.backgroundColor =
  radioCheckedRef.value;

// 2.1
const inputNameEl =
  document.getElementById("name-input");
const outputEl = document.getElementById(
  "name-output"
);
inputNameEl.addEventListener(
  "input",
  onInputChange
);
function onInputChange(event) {
  const inputValue = event.target.value;
  outputEl.textContent = inputValue;
  if (inputNameEl.value === "") {
    outputEl.textContent = "незнайомець";
  }
}
// 2.2
const inputNameEl2 = document.getElementById(
  "validation-input"
);
const requiredValue = Number(
  inputNameEl2.dataset.length
);
inputNameEl2.addEventListener(
  "blur",
  onInputBlur
);
function onInputBlur(event) {
  const inputValue = event.target.value.length;
  inputNameEl2.classList.remove(
    "#validation",
    "invalid"
  );
  if (inputValue === requiredValue) {
    inputNameEl2.classList.add("valid");
  } else {
    inputNameEl2.classList.add("invalid");
  }
}

//3
const inputSizeRef = document.querySelector(
  "#font-size-control"
);

const spanTextRef =
  document.querySelector("#text");
inputSizeRef.addEventListener(
  "input",
  onSizeInput
);

function onSizeInput(event) {
  const size = event.target.value + "px";
  spanTextRef.style.fontSize = size;
}
