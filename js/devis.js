const allFields = document.querySelectorAll(".field");

const getValue = () => {
  allFields.forEach((field) => {
    const allInputs = field.querySelectorAll("input");
    const output = {
      description: field.children[0].textContent,
      details: [],
    };
    allInputs.forEach((input) => {
      if (input.checked) {
        output.details.push("- " + input.value);
      } else if (input.type === "time") {
        const valueSplited = input.value.split(":");
        const formatValue = valueSplited[1] + "h" + valueSplited[0];
        output.details.push(formatValue);
      } else if (input.type === "text" || input.type === "number") {
        output.details.push(input.value);
      } else if (input.type === "date") {
        const valueSplited = input.value.split("-");
        const formatValue =
          valueSplited[2] + "/" + valueSplited[1] + "/" + valueSplited[0];
        output.details.push(formatValue);
      }
    });
    showValue(output);
    console.log(output);
  });
};

document.querySelector("#form_devis").addEventListener("submit", (e) => {
  e.preventDefault();
  getValue();
});

const showValue = (output) => {
  const div = document.createElement("div");
  div.setAttribute("class", "row theme light");
  const span = document.createElement("span");
  const ul = document.createElement("ul");

  span.textContent = output.description;
  div.appendChild(span);
  for (let i = 0; i < output.details.length; i++) {
    const li = document.createElement("li");
    li.textContent = output.details[i];
    ul.appendChild(li);
  }
  div.appendChild(ul);
  document.body.style.overflow = "hidden";
  document.querySelector("#recapContainer").appendChild(div);
  showPopUp();
};

const showPopUp = () => {
  document.body.style.overflow = "hidden";
  document.querySelector("#popUpRecap").style.display = "flex";
};
const hidePopUp = () => {
  document.body.style.overflow = "scroll";
  document.querySelector("#popUpRecap").style.display = "none";
};

const clearAllInputs = () => {
  allFields.forEach((field) => {
    const allInputs = field.querySelectorAll("input");
    allInputs.forEach((input) => {
      if (input.type === "checkbox") {
        input.checked = false;
      } else {
        input.value = "";
      }
    });
  });
};
const btnCancel = document.querySelector("#btnCancel");
btnCancel.addEventListener("click", () => {
  hidePopUp();
  document.querySelectorAll(".row").forEach((row) => row.remove());
});
const btnConfirm = document.querySelector("#btnConfirm");
btnConfirm.addEventListener("click", () => {
  clearAllInputs();
  document.querySelectorAll(".row").forEach((row) => row.remove());
});
