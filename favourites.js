let product = document.querySelector(".product")
let number = document.querySelector(".product-lentgh span")
let noProducts = document.querySelector(".noProducts")
console.log(noProducts);
function drawFavProductsUI(allProducts = []) {

    if (JSON.parse(localStorage.getItem("productsFavourite")).length === 0)
        noProducts.innerHTML = "No Products Available"


    let products = JSON.parse(localStorage.getItem("productsFavourite")) || allProducts
    let productsUi = products.map(product => {
        return `
                <div class="product-item">
                    <img src=${product.Img} alt="" class="product-item-img" alt="img">
                    <div class="product-item-desc">
                        <h2>${product.title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem suscipit laudantium
                            architecto sunt quibusdam maxime!</p>
                        <span>Size:${product.size}</span>
                        <span class="d-flex">Quantity:${product.quantity}</span>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="RemoveFromFavourite(${product.id})">Remove From Favourite</button>
                    </div>
                </div>
        `
    });
    product.innerHTML = productsUi.join("")
    number.innerHTML = products.length
}


drawFavProductsUI()

function RemoveFromFavourite(id) {
let favouriteItems = localStorage.getItem("productsFavourite")

    if (favouriteItems) {
        let items = JSON.parse(favouriteItems)
        let filteredItems = items.filter(item => item.id !== id)
        localStorage.setItem("productsFavourite", JSON.stringify(filteredItems))
        drawFavProductsUI(filteredItems)
    }

} 