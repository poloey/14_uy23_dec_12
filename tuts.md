# class 14

## how to change environment variable in windows 

search `environment` in windows start menu. And click on `edit the system environment variable`. Click on `environment variables`. from the the box click on `path`. Put `;` at the end of current path and paste your program file path.


## Math.random()

`Math.random()` gives us value between 0 - 1. To parse to integer we use `parseInt` function 
~~~js
parseInt(Math.random() * 7);  // it will gives use value between 0 - 6
~~~

## color change using math random
~~~js
var button = document.querySelector('button');
  var colors = ['yellow', 'maroon', 'blue', 'grey', 'brown'];
// to listen to button click 
button.addEventListener('click', function(){
  var randomNumber = parseInt(Math.random() * colors.length);
  var randomColor = colors[randomNumber];
  document.body.style.backgroundColor = randomColor;
});
~~~

## string interpolation
var world = `${variable} world ${variable} ameria`;

## rgb color change  with string interpolation
~~~js
document.querySelector('button').addEventListener('click', function (){
  var randomNumber1 = parseInt(Math.random() * 255)
  var randomNumber2 = parseInt(Math.random() * 255)
  var randomNumber3 = parseInt(Math.random() * 255)
  document.body.style.backgroundColor= `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
});
~~~

## select document using jquery 
we can select document using css selector by `jQuery` function. `jQuery` function can be written short form `$`.
I mean `$ = jQuery`

~~~js
//tag selector
var body = jQuery('body')
or 
var body = $('body')
// id selector 
var hello = jQuery('#id')
var hello = jQuery('.class')
~~~


## hide, show, toggle using jquery 
to hide we use `hide()` function. to show we use `show()` function. For toggling we use `toggle()`;
~~~js
$('ul').hide();
$('ul').show();
$('ul').toggle();
~~~

## event in jquery 
In jquery we use `on` function for event. 

~~~js
$('button').on('event_name', function);
~~~













