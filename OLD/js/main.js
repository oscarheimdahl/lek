$(document).ready(function() {
  aboutButton();
  aboutBackground();
  //   console.log('object');
});

function aboutButton() {
  $('.about-button').click(function(e) {
    e.preventDefault();
    $('.about-background')
      .css('transition-duration', '300ms')
      .css('top', '0');
    setTimeout(() => {
      $('body').css('overflow', 'auto');
    }, 300);
  });
}

function aboutBackground() {
  // do stuff here
  $('.about-background').click(function(e) {
    if ($(e.target).is('.about-background')) {
      e.preventDefault();
      $('.about-background').css('top', '100vh');
      $('body').css('overflow', 'hidden');
    }
  });
}
