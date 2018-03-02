$(document).ready(() => {
  'use strict';

  var game = new Game();

  game.init();

  $('.answer-1').parent().on('click', event => {
    $('.check').removeClass('d-none');
    $('.question-text').addClass('mt-2 mb-0');
    $('.answer-1').parent().removeClass('btn-info');
    $('.answer-1').parent().addClass('btn-danger');
    $('.answer-2').parent().removeClass('btn-info');
    $('.answer-2').parent().addClass('btn-success');
  
    setTimeout(function () {
      $('body>.container').css('background', 'rgba(255, 255, 255, 0)')
      $('.question-card').removeClass('bounceInRight');
      $('.question-card').addClass('bounceOutLeft');
    }, 2000)
  
    setTimeout(function () {
      $('.check').addClass('d-none');
      $('.question-text').removeClass('mt-2 mb-0');
      $('.answer-1').parent().removeClass('btn-danger');
      $('.answer-1').parent().addClass('btn-info');
      $('.answer-2').parent().removeClass('btn-success');
      $('.answer-2').parent().addClass('btn-info');
      $('.question-card').removeClass('bounceOutLeft');
      $('.question-card').addClass('bounceInRight');
    }, 3000)
  });
});