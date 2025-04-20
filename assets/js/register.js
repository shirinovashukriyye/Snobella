document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let form = document.querySelector("#register-form");
    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmpassword");
    let truePassword=document.querySelector(".fa-check")
    let falsePasswordStyle=document.querySelector(".fa-x")
    form.addEventListener("submit", register);

    function register(e) {
        e.preventDefault();
        let uniqueUser = users.some(
            (user) => user.username === username.value || user.email === email.value
        );
        let id = uuid.v4();

        if (username.value.length < 3 || username.value.length > 20) {
            toatifyByPage("Username must be between 3 and 20 characters");
            return;
        }

        if (password.value !== confirmPassword.value) {
            toatifyByPage("Passwords do not match");
            return;
        }

        if (password.value.length<=8) {
            truePassword.classList.add("d-none");
            truePassword.classList.remove("d-block");
            falsePasswordStyle.classList.add("d-block");
            falsePasswordStyle.classList.remove("d-none");
            toatifyByPage("Password is not long enough (min character 8!");
            return;
        }
        else{
            falsePasswordStyle.classList.add("d-none"); 
            falsePasswordStyle.classList.remove("d-block");
            truePassword.classList.add("d-block"); 
            truePassword.classList.remove("d-none");
        }

        let usernameExists = users.some(user => user.username === username.value.trim());
        let emailExists = users.some(user => user.email === email.value.trim());

        if (usernameExists) {
            toatifyByPage("Username already exists");
            return;
        }

        if (emailExists) {
            toatifyByPage("Email has been used");
            return;
        }

        if (!uniqueUser) {
            let newUser = {
                name: name.value,
                username: username.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value,
                id,
                isLogged: false,
                wishlist:[],
                basket:[]
            };

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            form.reset();
            toatifyByPage("User registered successfully");
        } else {
            alert("This user already exists!");
        }
    }

});

let toatifyByPage = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        gravity: "top",
        position: "left",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
};
