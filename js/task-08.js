const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", onSubmitFormLogin)

function onSubmitFormLogin(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("All forms must be filled!");
    } else {
        console.log({ email: email.value, password: password.value });
        form.reset();
    }
};
