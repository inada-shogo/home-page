$(function () {
  $('.js-btn, .cover, .filter').on('click', function () {
    $('.menu , .btn-line').toggleClass('js-open');
    $('.cover').toggleClass('js-filter');
  })
});