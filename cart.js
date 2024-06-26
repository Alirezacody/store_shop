'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const all = document.querySelector('.all');
  const btnBUY = document.querySelector('.BUY');
  const numpp = document.querySelector('.numpp');
  const endTotal = document.querySelector('.end-total');
  const shE = document.querySelector('.shE');
  let loadStored = JSON.parse(localStorage.getItem('cart'));

  btnBUY.addEventListener('click', () => {
    loadStored = [];
    localStorage.removeItem('cart');
    all.innerHTML = ''; 
    endTotal.textContent = 0 ;
    numpp.textContent = 0 ;
  });

  const storedItem = function () {
    if (loadStored) {
      loadStored.forEach(element => {
        const html = `
                    <section class="float_ display-products">
                        <div class="img_">
                            <img src="${element.image}" width="100">
                        </div>
                        <div class="title_">
                            <p>${element.title}</p>
                        </div>
                        <div class="price_">
                            <p>${element.price}</p>
                        </div>
                        <div class="number_">
                            <input type="number" name="number" class="number__" value="1" data-price="${
                              element.price
                            }">
                        </div>
                        <div class="total_">
                            <p>${Number(element.price)}</p>
                        </div>
                    </section>
                    <hr>`;
        all.insertAdjacentHTML('afterbegin', html);
      });

      const numberInputs = document.querySelectorAll('input[name="number"]');
      numberInputs.forEach(input => {
        input.addEventListener('input', () => {
          const price = parseFloat(input.getAttribute('data-price'));
          const quantity = parseInt(input.value);
          const total = price * quantity;

          const totalElement = input
            .closest('.float_')
            .querySelector('.total_ p');
          totalElement.textContent = total.toFixed(2);
          updateTotalPrice();
          updateTotalPriceend();
        });
      });
      
      const updateTotalPrice = function () {
        let total = 0;
        const numberInputs = document.querySelectorAll('input[name="number"]');
        numberInputs.forEach(input => {
          const price = parseFloat(input.getAttribute('data-price'));
          const quantity = parseInt(input.value);
          total += price * quantity;
        });
        numpp.textContent = total.toFixed(2);
      };

      updateTotalPrice();

      const updateTotalPriceend = function () {
        let total = 0;
        const numberInputs = document.querySelectorAll('input[name="number"]');
        numberInputs.forEach(input => {
          const price = parseFloat(input.getAttribute('data-price'));
          const quantity = parseInt(input.value);
          total += price * quantity;
        });
        endTotal.textContent = Number(total.toFixed(2)) + Number(shE.textContent);
      };

      updateTotalPriceend();

    }
  };

  storedItem();
});
