setTimeout(() => {
  $(".typing").addClass("show")
  $('.typing').t({
    delay: 0.5,
    speed: 100,
    speed_vary: false,
    repeat: false,
  });
}, 1000);