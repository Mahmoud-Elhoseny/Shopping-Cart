let productName = document.getElementById("product-name")
let productDesc = document.getElementById("product-desc")
let productSizeSelect = document.getElementById("product-size")
let ProductSizeValue;
let ProductImage;
let form = document.getElementById("form")
let inputFile = document.getElementById("upload-file")


// events
productSizeSelect.addEventListener("change", getProductSizeValue)
form.addEventListener("submit", createProductFunction)
inputFile.addEventListener("change", uploadImage)


// functions
function getProductSizeValue(e) {
    ProductSizeValue = e.target.value
}

function createProductFunction(e) {
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB
    let nameValue = productName.value
    let descValue = productDesc.value

    if (nameValue && descValue && ProductSizeValue && ProductImage) {
        let obj = {
            id: allProducts ? allProducts.length + 1 : 1,
            title: nameValue,
            Img: ProductImage,
            desc: descValue,
            size: ProductSizeValue,
            quantity: 1,
            byMe: "true"
        }

        let newProducts = allProducts ? [...allProducts, obj] : [obj]
        localStorage.setItem("products", JSON.stringify(newProducts)) 
        productName.value = ""
        productDesc.value = ""
        productSizeSelect.value = ""
    } else {
        alert("Please fill all fields")
    }

}

function uploadImage() {
    let file = this.files[0]
    let types = ["image/jpeg", "image/png"]

    if (types.indexOf(file.type) == -1) {
        alert("type not supported")
        return
    }
    if (file.size > 2 * 1024 * 1024) {
        alert("image size so big")
        return
    }
    getImageBase64(file)

}




function getImageBase64(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
        ProductImage = reader.result
    }
    reader.onerror = function () {
        alert("error reading")
    }


}











































