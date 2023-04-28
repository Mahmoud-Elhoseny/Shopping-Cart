let products = JSON.parse(localStorage.getItem("products")) || productsDB
let productid = JSON.parse(localStorage.getItem("editProduct"))
let getProduct = products.find((i) => i.id === productid)
let productName = document.getElementById("product-name")
let productDesc = document.getElementById("product-desc")
let productSizeSelect = document.getElementById("product-size")
let ProductSizeValue;
let ProductImage;
let Editform = document.getElementById("form")
let inputFile = document.getElementById("upload-file")




productName.value = getProduct.title
productDesc.value = getProduct.desc
productSizeSelect.value = getProduct.size
ProductImage = getProduct.Img


// events
productSizeSelect.addEventListener("change", getProductSizeValue)
Editform.addEventListener("submit", editProductFunction)
inputFile.addEventListener("change", uploadImage)


// functions
function getProductSizeValue(e) {
    ProductSizeValue = e.target.value
}

function editProductFunction(e) {
    e.preventDefault();

    getProduct.title = productName.value
    getProduct.desc = productDesc.value
    getProduct.size = productSizeSelect.value
    getProduct.Img = ProductImage



    localStorage.setItem("products", JSON.stringify(products))
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





