$(document).ready(() => {
  $('.answer-1').parent().on('click', event => {
    $('.cross').removeClass('d-none');
    $('.question-text').addClass('mt-2 mb-0');
    $('.answer-1').parent().removeClass('btn-info');
    $('.answer-1').parent().addClass('btn-danger');
    $('.answer-2').parent().removeClass('btn-info');
    $('.answer-2').parent().addClass('btn-success');
  });

  $('.answer-2').parent().on('click', event => {
    $('.cross').addClass('d-none');
    $('.question-text').removeClass('mt-2 mb-0');
    $('.answer-1').parent().removeClass('btn-danger');
    $('.answer-1').parent().addClass('btn-info');
    $('.answer-2').parent().removeClass('btn-success');
    $('.answer-2').parent().addClass('btn-info');
  });
});