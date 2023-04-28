let products = JSON.parse(localStorage.getItem("products"))
let productId = localStorage.getItem("productId")

let itemDom = document.querySelector(".item-details")
let productDetails = products.find((item) => item.id == productId)

itemDom.innerHTML = `
<img src=${productDetails.Img} alt="">
<h2>${productDetails.title}</h2>
<p> Description:${productDetails.desc}</p>
<span>Size:${productDetails.size}</span>
<span class="d-flex">Quantity ${productDetails.quantity}</span>
<button class='edit-product' onclick="editproduct(${productId})">Edit</button>
`

function editproduct(id) {
    localStorage.setItem("editProduct", id)
    window.location = "editProduct.html"

}