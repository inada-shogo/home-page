setTimeout(() => {
  $(".typing-text").addClass("js-show")
  $('.typing-text').t({
    delay: 0.5,
    speed: 100,
    speed_vary: false,
    repeat: false,
    caret:false
  });
}, 1000);