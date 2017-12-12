// to select button 
var button = document.querySelector('button');
  var colors = ['yellow', 'maroon', 'blue', 'grey', 'brown'];
// to listen to button click 
button.addEventListener('click', function(){
  var randomNumber = parseInt(Math.random() * colors.length);
  var randomColor = colors[randomNumber];
  document.body.style.backgroundColor = randomColor;
});


