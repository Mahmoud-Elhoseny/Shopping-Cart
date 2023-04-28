let product = document.querySelector(".product")
let products = productsDB

let setProducts;
(setProducts = function (products = []) {
    let productsUi = products.map(product => {
        return `    
                <div class="product-item" style="border: ${product.byMe === "true" ? "2px solid green" : ""}">
                    <img src=${product.Img} alt="" class="product-item-img" alt="img">
                    <div class="product-item-desc">
                        <a onclick="saveItemData(${product.id})">${product.title}</a>
                        <p>Description:${product.desc}</p>
                        <span>size:${product.size}</span>
                        ${product.byMe === "true" ? "<button onclick='editproduct(" + product.id + ")' class='edit-product' >Edit</button>" : ""}
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="AddedToCart(${product.id})">Add To Cart</button>
                        <div class="quantity-div">
                        <button class="quantityNeg" onclick="decrementValue()" value="-" >-</button>
                        <span class="quantity-number">${product.quantity}</span>
                        <button class="quantityPos" onclick="incrementValue(${product.id})" value="+">+</button>
                    </div>
                        <i class="fav fa-sharp fa-regular fa-heart"
                        style="color:${product.liked == true ? "#fb0404" : ""}"
                        onclick = "AddedToFav(${product.id})" ></i >
                    </div >
                </div >
        `
    });
    product.innerHTML = productsUi.join("")
})(JSON.parse(localStorage.getItem("products")) || products)



// function incrementValue(id) {
//     let productIDD = localStorage.setItem("productIdd", id)
//     let productIds = JSON.parse(localStorage.getItem("productIdd"))
//     console.log(productIds);

//         let count = document.querySelector(".quantity-number")
//         count.innerHTML++
//     }






function AddedToCart(id) {
    if (username) {
        let products = JSON.parse(localStorage.getItem("products")) || productsDB
        let choosenProduct = products.find((item) => item.id === id)
        let IschoosenProduct = addedItem.some((i) => i.id === choosenProduct.id)

        if (IschoosenProduct) {
            addedItem.map((p) => {
                if (p.id === choosenProduct.id) p.quantity += 1
                return p
            })
        } else {
            addedItem.push(choosenProduct)
        }
        cartsProductsDiv.innerHTML = ""
        addedItem.forEach(item => {
            cartsProductsDiv.innerHTML += `<p> ${item.title} <span class='item-qty'>${item.quantity}</span> </p> `
        });

        badge.style.display = "block"
        let cartsItems = document.querySelectorAll(".carts-products div p")
        badge.innerHTML = cartsItems.length


        localStorage.setItem("productsInCart", JSON.stringify(addedItem))
    } else {
        window.location = "login.html"
    }
}

function getUniqueArr(arr, id) {
    let unique = arr.map(item => item[id]).map((item, i, finalArr) => finalArr.indexOf(item) === i && i).filter((item) => arr[item])
        .map((item) => arr[item])
    return unique
}





function saveItemData(id) {
    localStorage.setItem("productId", id)
    window.location = "CardDetails.html"
}


let inputSearch = document.getElementById("search");
inputSearch.addEventListener("keyup", function (e) {
    search(e.target.value, JSON.parse(localStorage.getItem("products")))

    if (e.target.value.trim() === "") {
        setProducts(JSON.parse(localStorage.getItem("products")))
    }
})
function search(title, myArray) {

    let arr = myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1)
    setProducts(arr)
}


let favouritesItems = localStorage.getItem("favouritesItems") ? JSON.parse(localStorage.getItem("favouritesItems")) : []

function AddedToFav(id) {
    if (username) {
        let choosenItem = products.find((item) => item.id === id)
        choosenItem.liked = true
        favouritesItems = [...favouritesItems, choosenItem]
        let uniqueProducts = getUniqueArr(favouritesItems, "id")

        localStorage.setItem("productsFavourite", JSON.stringify(uniqueProducts))
        products.map((item) => {
            if (item.id === choosenItem.id) {
                item.liked = true
            }
        })
        localStorage.setItem("products", JSON.stringify(products))
        setProducts(products)
    } else {
        window.location = "login.html"
    }
}







// filter function

let sizeFilter = document.querySelector("#size-filter")
sizeFilter.addEventListener("change", filterProductBySize)


function filterProductBySize(e) {
    let val = e.target.value
    let products = JSON.parse(localStorage.getItem("products")) || productsDB

    if (val === "all") {
        setProducts(products)
    } else {
        products = products.filter((item) => item.size === val)
        setProducts(products)
    }

}



function editproduct(id) {
    localStorage.setItem("editProduct", id)
    window.location = "editProduct.html"

}