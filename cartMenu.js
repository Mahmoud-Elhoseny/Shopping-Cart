let cartsProductsDiv = document.querySelector(".carts-products div")
let badge = document.querySelector(".badgee")
let shoppingCartIcon = document.querySelector(".shoppingCart")
let cartsProductsMenu = document.querySelector(".carts-products ")
let addedItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []


if (addedItem) {
    addedItem.map((item) => {
        cartsProductsDiv.innerHTML += `<P> ${item.title} ${item.quantity}</p> `
    })
    badge.innerHTML = addedItem.length
    badge.style.display = "block"
}

shoppingCartIcon.addEventListener("click", openCartMenu)

function openCartMenu() {
    if (cartsProductsDiv.innerHTML != "") {
        if (cartsProductsMenu.style.display == "block") {
            cartsProductsMenu.style.display = "none"
        } else {
            cartsProductsMenu.style.display = "block"
        }
    }
}
