
// let productNameInput = document.getElementById('productName');
// let productPriceInput = document.getElementById('productPrice');
// let productCategoryInput = document.getElementById('productCategory');
// let productDescriptionInput = document.getElementById('productDescription');
// let addBtn = document.getElementById("add-btn");
//let inputs = document.getElementsByClassName('form-control') // 3mlto 3shn clear function loop


// let productsContainer = [];

// if (localStorage.getItem('ourProducts') !=null) {
    
//     productsContainer = JSON.parse (localStorage.getItem('ourProducts'))
//     displayProducts() 
// }

// else -----> mmkn sbha 7sb maa a7b
// {
//     productsContainer = [];
// }  

// addBtn.onclick = function () {
//     addProduct();
//     displayProducts()

    
// }


// function addProduct() {

//             let product = {         
        
//                 name: productNameInput.value,
//                 price: productPriceInput.value,
//                 category: productCategoryInput.value,
//                 description: productDescriptionInput.value,
//             }
        
//             productsContainer.push(product)
            
//             localStorage.setItem ('ourProducts' , JSON.stringify(productsContainer))   
            
//             console.log(productsContainer);
//             // clearForm();
//             displayProducts();
//         }
        
// function clearForm() {   ---> Normal Clear Function
        
        //     productNameInput.value = "";
        //     productPriceInput.value = "";
        //     productCategoryInput.value = "";
        //     productDescriptionInput.value = "";
            
        // }
        

//  function clearForm() { 
     
 
//     for (let i = 0; i < inputs.length; i++) {
//            inputs[i].value="";
    
//             }
            
//         }

// function displayProducts() {
        
//             let box = "";
            
//             for (let i = 0 ; i < productsContainer.length ; i++)
//             {
                
                
//                 box += `<tr>
//                 <td>${i}</td>
//                 <td>${productsContainer[i].name}</td>
//                 <td>${productsContainer[i].price}</td>
//                 <td>${productsContainer[i].category}</td>
//                 <td>${productsContainer[i].description}</td>
//                 <td><button class=" btn btn-outline-info">Update</button></td>
//                 <td><button onclick='deleteProducts(${i})' class=" btn btn-outline-danger">Delete</button></td>
                
//                 </tr>` 
        
//                 document.getElementById("tableBody").innerHTML = box
//             }
        
//         }
        
    
// function deleteProducts(index) {
   
//     productsContainer.splice(index,1);
//     localStorage.setItem('ourProducts' , JSON.stringify (productsContainer));
//     displayProducts();
// }

// function searchProduct(term) {
    
//    for (let i = 0; i < productsContainer.length; i++) {
      
//        if ( productsContainer[i].name.tolowerCase().includes(term.tolowerCase()) == true ) {
           
//        }
//    }  
    
// }


// function searchProduct(term) {

//     for (let i = 0; i < productsContainer.length; i++) {

//       if (productsContainer[i].name.tolowerCase().includes(term.tolowerCase()) == true) {
          
//       }
    
// }


// let productsContainer = [];   //productsContainer >>> Array
// // Array container made it {GLOBAL} bcs many functions will deal with...

// function addProduct() {

//     let product = {        //  parameters جواه<<object<<ده product 

//         name: productNameInput.value,
//         price: productPriceInput.value,
//         category: productCategoryInput.value,
//         description: productDescriptionInput.value,
//     }

//     productsContainer.push(product)   // i put product object inside Array container by push array method
//     console.log(productsContainer);
//     displayProducts();
//     clearForm();

// }

// function clearForm() {   // 3shn a3ml clear LL User Data

//     productNameInput.value = "";
//     productPriceInput.value = "";
//     productCategoryInput.value = "";
//     productDescriptionInput.value = "";
    
// }

// function displayProducts() {

//     let box = "";
    
//     for (let i = 0 ; i < productsContainer.length ; i++)
//     {
        
        
//         box += `<tr>
//         <td>${i}</td>
//         <td>${productsContainer[i].name}</td>
//         <td>${productsContainer[i].price}</td>
//         <td>${productsContainer[i].category}</td>
//         <td>${productsContainer[i].description}</td>
//         <td><button class=" btn btn-outline-info">Update</button></td>
//         <td><button class=" btn btn-outline-danger">Delete</button></td>
        
//         </tr>` 

//         document.getElementById("tableBody").innerHTML = box
//     }

// }

// let x = "js"
// "hello"+x+"file"
// `hello ${x} file`

