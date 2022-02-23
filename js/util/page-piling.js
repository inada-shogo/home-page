$(function() {
  $('#pagepiling').pagepiling({
    menu: '#nav',
    direction: 'horizontal',
    sectionSelector: '.section',
    sectionsColor: ['#fff', '#fff'],
    anchors: ['page1', 'page2'],
    easing: 'linear',
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['page1', 'page2']
    },
  });
});