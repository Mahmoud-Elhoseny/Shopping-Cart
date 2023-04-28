let userName = document.getElementById("exampleInputuserName")
let password = document.getElementById("exampleInputPassword1")
let loginBtn = document.getElementById("signIn")



let GetUser = localStorage.getItem("userName")
let GetPassword = localStorage.getItem("Password")

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (userName.value === "" || password.value === "") {
        alert("you should fill all inputs plz")
    } else {

        if ((GetUser && GetUser.trim() == userName.value.trim()) && (GetPassword && GetPassword == password.value)) {

            setTimeout(() => {
                window.location = "index.html"
            }, 1500);

        } else {
            alert("username or password is wrong !!");
        }

    }
})


