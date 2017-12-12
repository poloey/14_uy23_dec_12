var nuruddin = 1;
var roven = nuruddin
var $ = jQuery;
var colors = ['blue', 'red', 'green', 'tomato'];

$('#color').on('click', function () {
  console.log('test')
  var randomNumber = parseInt(Math.random() * colors.length)

  var randomColor = colors[randomNumber];
  $('body').css('background', randomColor);
});
$('#list').on('click', function () {
  $('ul').toggle();
})



