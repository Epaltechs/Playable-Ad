const hand = document.getElementById('hand');
const sun= document.getElementById('sun');
const container = document.getElementsByClassName('.container');


container.setTimeout(() => {
  console.log('Time',)
}, 1000);
hand.addEventListener('click', function() {
sun.style.display = 'block';
hand.style.display = 'none';
})