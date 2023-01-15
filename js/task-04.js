const refs = {
    btnDecr: document.querySelector('[data-action="decrement"]'),
    span: document.getElementById('value'),
    btnIncr: document.querySelector('[data-action="increment"]')
}

let counterValue = 0;
refs.btnDecr.addEventListener("click", (onButtonDecrClick));
function onButtonDecrClick() {
    counterValue -=  1;
    const valueEl = refs.span;
    valueEl.textContent = counterValue;
};

refs.btnIncr.addEventListener("click", (onButtonIncrClick));
 function onButtonIncrClick() {
    counterValue += 1;
    const valueEl = refs.span;
    valueEl.textContent = counterValue;
};