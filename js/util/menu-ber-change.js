let isOpen = false;

$(function () {
  $('.js-btn, .cover').on('click', function () {
    isOpen = !isOpen;
    $('.menu , .btn-line').toggleClass('js-open');
    $('.cover').toggleClass('js-filter');
  })
});