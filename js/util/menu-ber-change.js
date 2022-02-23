$(function () {
  $('.js-btn, .cover').on('click', function () {
    $('.menu , .btn-line').toggleClass('js-open');
    $('.cover').toggleClass('js-filter');
  })
});