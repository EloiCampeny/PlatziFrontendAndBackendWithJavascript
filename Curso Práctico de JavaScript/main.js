const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu");
const shoppingCardIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const asideProductDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

const productList = [];

// insert products
for (let i=0; i<20; i++) {
    productList.push({
        name: "bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    });
}


menuEmail.addEventListener("click",toggleDesktopMenu);
menuIcon.addEventListener("click",toggleMobileMenu);
shoppingCardIcon.addEventListener("click",toggleShoppingCard);

function closeWindows() {

    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    asideProductDetail.classList.add("inactive");

}

function toggleDesktopMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if (isDesktopMenuClosed) {
        closeWindows();
        desktopMenu.classList.remove("inactive");
    } else {
        desktopMenu.classList.add("inactive");
    }
}

function toggleMobileMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (isMobileMenuClosed) {
        closeWindows();
        mobileMenu.classList.remove("inactive");
    } else {
        mobileMenu.classList.add("inactive");
    }
}

function toggleShoppingCard() {
    const isShoppingCardClosed = asideProductDetail.classList.contains("inactive");

    if (isShoppingCardClosed) {
        closeWindows();
        asideProductDetail.classList.remove("inactive");
    } else {
        asideProductDetail.classList.add("inactive");
    }  
}

/*  
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img">
    <div class="product-info">
        <div>
            <p>$ 120.00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>  
*/

function createMatrixOfProducts(productList) {

    for(product of productList) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.setAttribute("src",product.image);

        const productInf = document.createElement("div");
        productInf.classList.add("product-info");

        const productFeatures = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;

        const productName = document.createElement("p");
        productName.innerText = product.name;

        productFeatures.append(productPrice);
        productFeatures.append(productName);

        const productFigure = document.createElement("figure");

        const productIcon = document.createElement("img");
        productIcon.setAttribute("src","./icons/bt_add_to_cart.svg");

        productFigure.append(productIcon);

        productInf.append(productFeatures);
        productInf.append(productFigure);

        productCard.append(productImage);
        productCard.append(productInf);

        cardsContainer.append(productCard);

    }
}

createMatrixOfProducts(productList);