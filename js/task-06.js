const input = document.getElementById("validation-input");
const length = Number(input.dataset.length);

input.addEventListener("blur", onInputValid);
function onInputValid(event) {
    event.currentTarget.value = event.currentTarget.value.trim();
    input.classList.add("invalid");
    event.currentTarget.value.length === length
        ? input.classList.replace("invalid", "valid")
        : input.classList.replace("valid", "invalid");
};