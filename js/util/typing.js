setTimeout(() => {
  $(".profile-text").addClass("js-show")
  $('.profile-text').t({
    delay: 0.5,
    speed: 50,
    speed_vary: false,
    repeat: false,
    caret:false
  });
}, 250);