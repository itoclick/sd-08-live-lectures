window.onload = function () {
  let button = document.getElementById('start-race-btn');
  let car1 = document.querySelector('.car1');
  let car2 = document.querySelector('.car2');

  car1.style.marginLeft = '0px';
  car2.style.marginLeft = '0px';

  //1. qual o tipo de evento que devo escutar?
  //2. o que eu faço quando esse evento ocorrer?
  button.addEventListener('click', function () {
    
    car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px';
    car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';
  });
};


