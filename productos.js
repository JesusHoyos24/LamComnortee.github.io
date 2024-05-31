// Define a variable to store the current sorting option
let currentSortingOption = 'relevancy';

// Function to sort products based on the selected sorting option
function sortProducts(option) {
    currentSortingOption = option;
    console.log("Sorting option:", option);
    // Close the dropdown after selecting an option
    toggleDropdown();
    renderProducts(); // Re-render products after sorting

}

// Function to compare product prices for sorting
function comparePrices(a, b) {

    return a.price - b.price;
    

}

// Function to compare product names for sorting


function compareNames(a, b) {
    return a.name.localeCompare(b.name);
}

// Function to render products based on the current sorting option
function renderProducts() {
    let sortedProducts;
    switch (currentSortingOption) {
        case 'greatestToLeast':
            // Set the sorting option label
            document.getElementById('dropbtn').textContent = `Ordenar por: Menor precio`;
            // Sort products by price in descending order
            sortedProducts = products.slice().sort((a, b) => comparePrices(b, a));
            break;
        default:
            // Set the sorting option label
            document.getElementById('dropbtn').textContent = `Ordenar por: Mayor precio`;
            // Sort products by price in ascending order
            sortedProducts = products.slice().sort(comparePrices);
            // Reverse the order for "Mayor precio"
            sortedProducts.reverse();
            break;
    }
    

    // Clear the existing product list
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    // Render the sorted products
    sortedProducts.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = '/inventario.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML =
            `<div class="productbox">
                <img src="${product.image}" alt="" class="product-img">
                <h2 class="productname">${product.name}</h2>
                <div class="price">${product.price}</div>
            </div>`;
        listProductHTML.appendChild(newProduct);
    });
}
// Function to toggle the visibility of sorting options
function toggleSortingOptions() {
    const sortingOptions = document.querySelector('.sorting-options');
    sortingOptions.style.display = sortingOptions.style.display === 'none' ? 'block' : 'none';
}
// Function to toggle the active state of the dropdown
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

// Function to sort products based on the selected sorting option


// Initial rendering of products (default sorting)
renderProducts();
changeName(currentSortingOption); // Call changeName with the default sorting option
