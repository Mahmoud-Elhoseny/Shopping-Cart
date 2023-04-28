let product = document.querySelector(".product")
let number = document.querySelector(".product-lentgh span")
let noProducts = document.querySelector(".noProducts")

console.log(noProducts);
function drawProductsUI(allProducts = []) {

    if (JSON.parse(localStorage.getItem("productsInCart")).length === 0)
        noProducts.innerHTML = "No Products Available"


    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts
    let productsUi = products.map(product => {
        return `
                <div class="product-item">
                    <img src=${product.Img} alt="" class="product-item-img" alt="img">
                    <div class="product-item-desc">
                        <h2>${product.title}</h2>
                        <p>Description${product.desc}</p>
                        <span>Size:${product.size}</span>
                        <span class="d-flex">Quantity:${product.quantity}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="RemoveFromCart(${product.id})">Remove To Cart</button>
                    </div>
                </div>
        `
    });
    product.innerHTML = productsUi.join("")
    number.innerHTML = products.length
}


drawProductsUI()

function RemoveFromCart(id) {
    let ProductsInCart = localStorage.getItem("productsInCart")
    if (ProductsInCart) {
        let items = JSON.parse(ProductsInCart)
        let filteredItems = items.filter(item => item.id !== id)
        localStorage.setItem("productsInCart", JSON.stringify(filteredItems))
        drawProductsUI(filteredItems)
    }

} 