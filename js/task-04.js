const refs = {
    btnDecr: document.querySelector('[data-action="decrement"]'),
    span: document.getElementById('value'),
    btnIncr: document.querySelector('[data-action="increment"]')
}


// const btnDecr = document.querySelector('[data-action="decrement"]');
// const btnIncr = document.querySelector('[data-action="increment"]');
let counterValue = 0;
refs.btnDecr.addEventListener("click", (onButtonDecrClick) => {
    counterValue -=  1;
    const valueEl = refs.span;
    valueEl.textContent = counterValue;
});

refs.btnIncr.addEventListener("click", (onButtonIncrClick) => {
    counterValue += 1;
    const valueEl = document.querySelector("span");
    valueEl.textContent = counterValue;
});