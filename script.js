'use strict';
const selectEl = document.querySelector('#choose');
const selectEl2 = document.querySelector('#choose2');
const containerEl = document.querySelector('#container');
const btnEl = document.querySelector('.btn-click');
const menuTop = document.querySelector('#menu-top-click');

// آرایه‌ای برای ذخیره محصولات انتخاب شده
let cartItems = [];

// تابع برای ذخیره محصولات در localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

// تابع برای خالی کردن آرایه و localStorage در بارگذاری صفحه
// function clearCart() {
//   cartItems = [];
//   localStorage.removeItem('cart');
// }

selectEl.addEventListener('change', e => {
  e.preventDefault();
  containerEl.innerHTML = '';

  if (selectEl.value === 'men') {
    selectEl.options[selectEl.selectedIndex].value = "men's clothing";
  }

  if (selectEl.value === 'women') {
    selectEl.options[selectEl.selectedIndex].value = "women's clothing";
  }

  const category = selectEl.value;

  const xhr = new XMLHttpRequest();
  const URL = `https://fakestoreapi.com/products/category/${category}`;

  xhr.open('get', URL);

  xhr.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      const txt = JSON.parse(this.responseText);

      txt.forEach(element => {
        let html = `       
                <div class="product">
                    <div class="contImg">
                    <img src="${element.image}">
                    </div>
                    <div class="title">
                    <p>${element.title}</p>
                    </div>
                    <div class="price">
                        <p>${element.price}</p>
                    </div>
                    <div>
                        <button class="cart" data-id="${element.id}" data-title="${element.title}" data-price="${element.price}" data-image="${element.image}"> Add to cart </button>
                    </div>
                </div>`;

        containerEl.insertAdjacentHTML('beforeend', html);
      });

      document.querySelectorAll('.cart').forEach(button => {
        button.addEventListener('click', e => {
          e.preventDefault();
          const product = {
            id: e.target.getAttribute('data-id'),
            title: e.target.getAttribute('data-title'),
            price: e.target.getAttribute('data-price'),
            image: e.target.getAttribute('data-image'),
          };
          cartItems.push(product);
          saveCart();
          console.log(cartItems);
        });
      });
    }
  };

  xhr.send();
});

btnEl.addEventListener('click', () => {
  console.log('Hello');
  menuTop.classList.toggle('active');
  menuTop.classList.toggle('disabled');
});

selectEl2.addEventListener('change', e => {
  e.preventDefault();
  containerEl.innerHTML = '';

  if (selectEl2.value === 'men') {
    selectEl2.options[selectEl2.selectedIndex].value = "men's clothing";
  }

  if (selectEl2.value === 'women') {
    selectEl2.options[selectEl2.selectedIndex].value = "women's clothing";
  }

  const category2 = selectEl2.value;

  const xhr2 = new XMLHttpRequest();
  const URL2 = `https://fakestoreapi.com/products/category/${category2}`;

  xhr2.open('get', URL2);

  xhr2.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
      const txt2 = JSON.parse(this.responseText);

      txt2.forEach(element => {
        let html2 = `       
                <div class="product">
                    <div class="contImg">
                    <img src="${element.image}">
                    </div>
                    <div class="title">
                    <p>${element.title}</p>
                    </div>
                    <div class="price">
                        <p>${element.price}</p>
                    </div>
                    <div>
                        <button class="cart" data-id="${element.id}" data-title="${element.title}" data-price="${element.price}" data-image="${element.image}"> Add to cart </button>
                    </div>
                </div>`;

        containerEl.insertAdjacentHTML('beforeend', html2);
      });

      document.querySelectorAll('.cart').forEach(button => {
        button.addEventListener('click', e => {
          e.preventDefault();
          const product = {
            id: e.target.getAttribute('data-id'),
            title: e.target.getAttribute('data-title'),
            price: e.target.getAttribute('data-price'),
            image: e.target.getAttribute('data-image'),
          };
          cartItems.push(product);
          saveCart();
        });
      });
    }
  };

  xhr2.send();
});

// خالی کردن آرایه و localStorage هنگام بارگذاری صفحه
// clearCart();
