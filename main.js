const menuEmail = document.querySelector('.navbar-email');
const destktopMenu = document.querySelector('.desktop-menu');
const iconHamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarritoMenu = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
iconHamMenu.addEventListener('click', toggleMobileMenu);
iconCarritoMenu.addEventListener('click', toggleCarritoMenu);



function toggleCarritoMenu(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = destktopMenu.classList.contains('inactive');

    if(!isMobilMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        destktopMenu.classList.add('inactive');
    }

    carritoMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    if(!isCarritoMenuClosed){
        carritoMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');


}

function toggleDesktopMenu(){
    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    if(!isCarritoMenuClosed){
        carritoMenu.classList.add('inactive');
    }

    destktopMenu.classList.toggle('inactive');
}

const productList = [];

productList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
);

productList.push(
    {
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
)

productList.push(
    {
        name: 'Compu',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
)

/* 
<div class="cards-container">

      <!-- <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> -->

    </div>
*/

function render(arr){
    for(product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
        
        const imageCard = document.createElement('img');
        imageCard.setAttribute('src', product.image);
       
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
        const productInfoDiv = document.createElement('div');
       
        const price = document.createElement('p');
        price.innerText = `$ ${product.price}`;
        const name = document.createElement('p');
        name.innerText = product.name;
       
        const figure = document.createElement('figure');
       
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
       
        figure.appendChild(imgFigure);
        productInfoDiv.appendChild(price);
        productInfoDiv.appendChild(name);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);
        productCart.appendChild(imageCard);
        productCart.appendChild(productInfo);
       
        cardsContainer.appendChild(productCart);
       }
}

render(productList);