
document.querySelector('button').addEventListener('click', function (){
  var randomNumber1 = parseInt(Math.random() * 255)
  var randomNumber2 = parseInt(Math.random() * 255)
  var randomNumber3 = parseInt(Math.random() * 255)
  document.body.style.backgroundColor= `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
});

// $('button').on('click', function () {
//   var randomNumber1 = parseInt(Math.random() * 255)
//   var randomNumber2 = parseInt(Math.random() * 255)
//   var randomNumber3 = parseInt(Math.random() * 255)
//   $('body').css('background-color', `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;)
// });