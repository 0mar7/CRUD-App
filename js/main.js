let productContainer = [];


if (localStorage.getItem('ourProducts') != null) {
    productContainer = JSON.parse(localStorage.getItem('ourProducts'));
    displayProducts();
}


let productNameInput = document.getElementById('productName');
let productPriceInput = document.getElementById('productPrice');
let productCategoryInput = document.getElementById('productCategory');
let productDescriptionInput = document.getElementById('productDescription');
currentIndex = 0;
let searchInput = document.getElementById('search');
let submitBtn = document.getElementById('submitBtn');
let alertNameInput = document.getElementById('alertName');
let alertPriceInput = document.getElementById('alertPrice');
let alertCategoryInput = document.getElementById('alertCategory');
let alertDescriptionInput = document.getElementById('alertDescription');




submitBtn.onclick  = function addProduct(){
    if(  ( validateProductName() == true ) && ( validateProductPrice() == true ) && 
        ( validateProductCategory() == true )  && ( validateProductDescription() == true) ){
        
            if(document.getElementById("submitBtn").innerHTML == "Add Product"){
            var product = {
                name:productNameInput.value,
                price:productPriceInput.value,
                category:productCategoryInput.value,
                descripition:productDescriptionInput.value
            }
            productContainer.push(product);
            localStorage.setItem('ourProducts' , JSON.stringify( productContainer ));
        }
        else{
            updateProduct();
        }
        displayProducts()
        clearForm();
    }
}  


// Clear Form
function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";

}

//*** Display Products */
function displayProducts() {

    let Box = ``;

    for (let i = 0; i < productContainer.length; i++) {

        Box += `<tr>
        <td>${i}</td>
        <td>${productContainer[i].name} </td>
        <td>${productContainer[i].price} </td>
        <td>${productContainer[i].category} </td>
        <td>${productContainer[i].descripition} </td>
        <td><button onclick='getProductInfo(${i})' class="btn btn-outline-info fw-bold ">Update</button></td>
        <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger fw-bold">Delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML = Box;
}

//**Delete */
function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem('ourProducts', JSON.stringify(productContainer));
    displayProducts();

}

function getProductInfo(index) {

    productNameInput.value = productContainer[index].name;
    productPriceInput.value = productContainer[index].price;
    productCategoryInput.value = productContainer[index].category;
    productDescriptionInput.value = productContainer[index].descripition;
    currentIndex = index;

    document.getElementById('submitBtn').innerHTML = "Update Product";
}

// ** Update **
function updateProduct() {
    let product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        descripition: productDescriptionInput.value,
    }
    productContainer[currentIndex] = product;
    localStorage.setItem('ourProducts', JSON.stringify(productContainer));
    submitBtn.innerHTML = "Add Product";
}

// ** Search **
searchInput.addEventListener('keyup', function searchProduct() {

    let term = searchInput.value;

    let Box = ``;

    for (let i = 0; i < productContainer.length; i++) {

        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            Box += `<tr>
            <td>${i}</td>
            <td>${productContainer[i].name} </td>
            <td>${productContainer[i].price} </td>
            <td>${productContainer[i].category} </td>
            <td>${productContainer[i].descripition} </td>
            <td><button onclick='getProductInfo(${i})' class="btn btn-outline-info fw-bold ">Update</button></td>
            <td><button onclick='deleteProduct(${i})' class="btn btn-outline-danger fw-bold">Delete</button></td>
            
            </tr>`
        }
    }
    document.getElementById('tableBody').innerHTML = Box;
})

//** Validation */
function validateProductName() {

    var nameRegex = /^[A-Z][a-z A-Z 0-9]{2,}$/;

    if (nameRegex.test(productNameInput.value) == true) {
        submitBtn.removeAttribute("disabled");
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        alertNameInput.classList.add('d-none');
        return true;
    }
    else {

        productNameInput.classList.add("is-invalid");
        productNameInput.classList.remove("is-valid");
        alertNameInput.classList.remove('d-none');
        // Add attribute for button like this Btn.addAttribute('disabled');
        submitBtn.disabled = "true";
        return false;
    }
}

productNameInput.addEventListener('keyup', function () {
    validateProductName();
});

function validateProductPrice() {

    let priceRegex = /^([1-9][0-9]{3}|[1-9][0-9]{4}|30000)$/;

    if (priceRegex.test(productPriceInput.value) == true) {
        submitBtn.removeAttribute('disabled');
        productPriceInput.classList.add('is-valid');
        productPriceInput.classList.remove('is-invalid');
        alertPriceInput.classList.add('d-none');
        return true;
    }
    else {

        productPriceInput.classList.remove('is-valid');
        productPriceInput.classList.add('is-invalid');
        alertPriceInput.classList.remove('d-none');
        submitBtn.disabled = "true";
        return false;

    }
}

productPriceInput.addEventListener('keyup', function () {
    validateProductPrice();
});

function validateProductCategory() {

    let categoryRegex = /^([L-l]aptop|[T-t]v|[M-m]obile)$/;


    if (categoryRegex.test(productCategoryInput.value) == true) {
        submitBtn.removeAttribute("disabled");
        productCategoryInput.classList.add('is-valid');
        productCategoryInput.classList.remove('is-invalid');
        alertCategoryInput.classList.add('d-none');
        return true;
    }
    else {
        productCategoryInput.classList.add('is-invalid');
        productCategoryInput.classList.remove('is-valid');
        alertCategoryInput.classList.remove('d-none');
        submitBtn.disabled = "true"
        return false;
    }
}

productCategoryInput.addEventListener('keyup', function () {
    validateProductCategory();
});

function validateProductDescription() {

    let regex = /^[a-z A-Z 0-9]{4,}$/;


    if (regex.test(productDescriptionInput.value) == true) {
        submitBtn.removeAttribute("disabled");
        productDescriptionInput.classList.add('is-valid');
        productDescriptionInput.classList.remove('is-invalid');
        alertDescriptionInput.classList.add('d-none');
        return true;
    }
    else {
        productDescriptionInput.classList.add('is-invalid');
        productDescriptionInput.classList.remove('is-valid');
        alertDescriptionInput.classList.remove('d-none');
        submitBtn.disabled = "true"
        return false;
    }
}

productDescriptionInput.addEventListener('keyup', function () {
    validateProductDescription();
})



















// ** Another Update Product
// function updateProduct(){

//     productContainer[currentIndex].name = productNameInput.value;
//     productContainer[currentIndex].price = productPriceInput.value;
//     productContainer[currentIndex].category = productCategoryInput.value;
//     productContainer[currentIndex].descripition = productDescriptionInput.value;

//     localStorage.setItem('ourProducts' , JSON.stringify (productContainer));
//     submitBtn.innerHTML = "Add Product";
// }