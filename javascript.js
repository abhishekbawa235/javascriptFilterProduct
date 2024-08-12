const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

function filterProduct(){
   const searchValue = searchInput.value.toLowerCase();
   const productItems = document.querySelectorAll(".product-item");
   const activeCategoryElement = document.querySelector(".category-btn.active");
   const activeCategory = activeCategoryElement ? activeCategoryElement.dataset.category : 'all';
   productItems.forEach(item=>{
    const title = item.querySelector("h1").innerText.toLowerCase();
    const category = item.dataset.category;
    if ((title.includes(searchValue) || searchValue === "") && (category === activeCategory || activeCategory === 'all')) {
        console.log(item);
        item.style.display="block"
    }
    else {
        item.style.display ='none'
    }
   }) 
}
function setCategory(e){
    if (e.target.classList.contains("category-btn")) {
        categoryBtns.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        filterProduct();
    }
}
searchBtn.addEventListener("click",filterProduct)

searchInput.addEventListener("Keyup",filterProduct)

categoryBtns.forEach(btn=>{
    btn.addEventListener("click",setCategory);
})


filterProduct()