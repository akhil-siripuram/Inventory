class Products{
    constructor(name,category){
        this.id = Date.now();
        this.name = name;
        this.category = category;   
    }
}
class Inventory{

    static products = JSON.parse(localStorage.getItem('products')) || [];
    
    static saveProducts(){
        localStorage.setItem('products', JSON.stringify(Inventory.products));
    }

    static addProduct(name, category){
        console.log(Inventory.products);
        const newProduct = new Products(name, category);
        Inventory.products.push(newProduct);
        Inventory.saveProducts();
    }

    static deleteProduct(id){
        console.log("Deleting product with id:", id);
        Inventory.products = Inventory.products.filter(product => product.id !== id);
        Inventory.saveProducts();
        Inventory.renderProducts();
    }
    static renderProducts()   {
        const existingProducts = JSON.parse(localStorage.getItem('products'));

        const container = document.getElementById('itemsContainer');

        container.innerHTML = '';

        if(!existingProducts){
            container.innerHTML = `<div class="no-items">No items in inventory.</div>`;
                
        } else {

        existingProducts.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("item-card");

                card.innerHTML = `
                    <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>Category: ${item.category}</p>
                    </div>
                    <button class="delete-btn" >Delete</button>
                `;
                    card.querySelector(".delete-btn").addEventListener("click", () => { 
                        Inventory.deleteProduct(item.id);});
                    container.appendChild(card);
        });
    }
    }

    }


    function renderCategoryDropdown() {
        const dropdown = document.getElementById("categoryInput");
        dropdown.innerHTML = ""; // clear existing

        const categories = JSON.parse(localStorage.getItem('categories')) || [];

        categories.forEach((cat) => {
            const option = document.createElement("option");
            option.value = cat;
            option.textContent = cat;
            dropdown.appendChild(option);
        });
}


    Inventory.renderProducts();
    renderCategoryDropdown();

    nameField = document.getElementById('nameInput');
    categoryField = document.getElementById('categoryInput');
    addButton = document.getElementById('addBtn');

    addButton.addEventListener('click', () => {
        const name = nameField.value;
        const category = categoryField.value;   
        Inventory.addProduct(name, category);
        Inventory.renderProducts();
        nameField.value = '';
        categoryField.value = '';
    });
// inventory.js 


// open and close category modal.

editCat = document.getElementById("editCategoriesBtn");
closeCatBtn = document.getElementById("closeModalBtn");
catModal = document.getElementById("categoryModal");
catList = document.getElementById("categoryList");
addCatBtn = document.getElementById("addCategoryBtn");
catInput = document.getElementById("newCategoryInput");

editCat.addEventListener('click', () => {
    catModal.style.display = "block";
    renderCategoryList();
});

closeCatBtn.addEventListener('click', () => {
    catModal.style.display = "none";
});

function renderCategoryList() {
    catList.innerHTML = '';
    const categories = JSON.parse(localStorage.getItem('categories')) || [];    
    categories.forEach((cat, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${cat}</span>
            <button onclick="deleteCategory('${cat}')">Delete</button>
        `;
    catList.appendChild(li);
    });
}   
function deleteCategory(catName) {
    let categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories = categories.filter(cat => cat !== catName);
    localStorage.setItem('categories', JSON.stringify(categories));
    renderCategoryList();
    renderCategoryDropdown();
}

addCatBtn.addEventListener('click', addCategory);
catInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addCategory();
    }   
});

function addCategory() {
    console.log("Adding category");
    const newCat = catInput.value.trim();   
    if(newCat) {
        let categories = JSON.parse(localStorage.getItem('categories')) || [];
        categories.push(newCat);
        localStorage.setItem('categories', JSON.stringify(categories));
        catInput.value = '';
        renderCategoryList();
        renderCategoryDropdown();
    }  
}


function CheckLogin() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        window.location.href = 'index.html';
    }   
}

function logout() {
    
    window.location.href = 'index.html';
    localStorage.removeItem('loggedInUser');
}