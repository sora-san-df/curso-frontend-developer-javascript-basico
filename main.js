const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-card');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(e){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(e){
    const isAsideClosed = aside.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

}

function toggleCarritoAside(e){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    

    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'

});

productList.push({
    name:'Tele',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'

});

productList.push({
    name:'compu',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'

});
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'

});

productList.push({
    name:'Tele',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'

});

productList.push({
    name:'compu',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600'

});


function renderProducts(arr){
    
for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg  = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);


}
}

renderProducts(productList);