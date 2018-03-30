import './css/movies.styl'
var html = require('./index.pug')

// var select = document.getElementById('.burger')

var menu = $('#menu')
var bar = $('.bar')

menu.click(function () {
  var burger = $( this ).find('.burger')
  var user = $( this ).find('.user')

  burger.toggleClass('open')
  user.toggleClass('view')
})

bar.click(function () {

  if ( $('.post').css('grid-column-start') === '1' ) {
    $('.post').css('grid-column-start', '2')
    bar.css('left', '100px')
  }
  else {
    $('.post').css('grid-column-start', '1')
    bar.css('left', '0px')

  }
})
