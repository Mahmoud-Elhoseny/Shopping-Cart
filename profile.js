let get_user = document.querySelector("#usernamee")
let get_email = document.querySelector("#email")
let productsLentgh = document.querySelector("#products-lentgh span")



let userNameStorage = localStorage.getItem("userName")
let EmailStorage = localStorage.getItem("Email")
let products = JSON.parse(localStorage.getItem("products"))
let myproducts = products.filter((i) => i.byMe === "true")


get_user.innerHTML = userNameStorage
get_email.innerHTML = EmailStorage

if (myproducts.length != 0) {

    productsLentgh.innerHTML = myproducts.length
} else {
    productsLentgh.remove()
}

