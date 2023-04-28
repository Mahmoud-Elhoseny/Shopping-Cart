let product = document.querySelector(".product")
let number = document.querySelector(".product-lentgh span")
let noProducts = document.querySelector(".noProducts")

let setProducts;
(setProducts = function (products = []) {
    let myproducts = products.filter((item) => item.byMe === "true")

    if (myproducts) {

        let productsUi = myproducts.map(product => {
            return `    
                <div class="product-item" style="border: ${product.byMe === "true" ? "2px solid green" : ""}">
                    <img src=${product.Img} alt="" class="product-item-img" alt="img">
                    <div class="product-item-desc">
                        <a onclick="saveItemData(${product.id})">${product.title}</a>
                        <p>Description:${product.desc}</p>
                        <span>size:${product.size}</span>
                        <div class='btns'>
                        <button onclick='editproduct(${product.id})' class='edit-product' >Edit</button>
                        <button onclick='deleteproduct(${product.id})' class='edit-product' >Delete product</button>
                        </div>
                        </div>
                        </div>
        `
        });
        product.innerHTML = productsUi.join("")
        number.innerHTML = productsUi.length
    } else {
        noProducts.innerHTML = "No products!!"
    }
})(JSON.parse(localStorage.getItem("products")) || productsDB)




function editproduct(id) {
    localStorage.setItem("editProduct", id)
    window.location = "editProduct.html"
}



function deleteproduct(id) {
    let products = JSON.parse(localStorage.getItem("products")) || productsDB
    let myproducts = products.filter((item) => item.byMe === "true")
    let filterd = myproducts.filter((item) => item.id !== id)

    let clickedItem = myproducts.find((i) => i.id === id)
    products = products.filter((i) => i.id !== clickedItem.id)
    localStorage.setItem("products", JSON.stringify(products))
    setProducts(filterd)

}