document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let form = document.querySelector("form");
    let username = document.querySelector("#username");
    let password = document.querySelector("#password");

    form.addEventListener("submit", login);

    function login(e) {
        e.preventDefault();

        let loginedUser = users.find(user =>
            user.username === username.value && user.password === password.value
        );

        if (loginedUser) {
            loginedUser.isLogged = true;
            localStorage.setItem("users", JSON.stringify(users));
            toatifyByPage("Giriş uğurludur!");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            toatifyByPage("İstifadəçi adı və ya şifrə yalnışdır!");
        }
    }

    let toatifyByPage = (text) => {
        Toastify({
            text: `${text}`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    };
});
