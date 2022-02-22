$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    $('.screen-cover').toggleClass('filter'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

$(function () {
  $('.screen-cover, .filter').on('click', function () {
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    $('.screen-cover').toggleClass('filter'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});
