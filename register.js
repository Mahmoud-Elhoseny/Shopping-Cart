let userName = document.getElementById("exampleInputUsername1")
let Email = document.getElementById("exampleInputEmail1")
let Password = document.getElementById("exampleInputPassword1")
let signBtn = document.getElementById("signUP")

signBtn.addEventListener("click", Register)

function Register(e) {
    e.preventDefault()
    if (userName.value === "" || Email.value === "" || Password.value === "") {
        alert("you should fill all inputs plz")
    } else {
        localStorage.setItem("userName", userName.value)
        localStorage.setItem("Email", Email.value)
        localStorage.setItem("Password", Password.value)

        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }
}