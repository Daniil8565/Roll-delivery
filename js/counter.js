window.addEventListener('click', function(event){
  
  let counter;

  // Проверяем клик строго по кнопкам Плюс или минус
  if (event.target.dataset.action == 'plus' || event.target.dataset.action == 'minus'){
    
    // Находим обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper');

    // Находим div с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]');
  }



  // Проверяем является ли элемент кнопкой Плюс
  if (event.target.dataset.action == 'plus'){
    counter.innerText = ++counter.innerText;
  }

  // Проверяем является ли элемент кнопкой Минус
  if (event.target.dataset.action == 'minus'){

    // Проверяем чтобы счётчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
      // Удаляем товар
      event.target.closest('.cart-item').remove();

      // Отображения статуса корзины Пустая / Полная
      toggleCartStatus();

      // Пересчёт общей стоимости товара в корзине
      calcCartPriceAndDelivery();
    }
  }

  // Проверяем клик на + или - внутри корзины
  if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
    // Пересчёт общей стоимости товара в корзине
    calcCartPriceAndDelivery();
  }

});