const locomotiveScroll = new LocomotiveScroll();


// $(document).ready(function() {
//   $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     $('.parallax-sectionimage1').css('top', '-' + 1 + scrollTop * 0.02 + '%'); // Adjust the multiplier to control the speed
//     $('.parallax-sectionimage2').css('top', '-' + 5 + scrollTop * 0.02 + '%'); // Adjust the multiplier to control the speed
//   });
// });

// $(document).ready(function() {
//   var sectionOffset = $('#section2').offset().top;
//   var sectionHeight = $('#section2').outerHeight();
//
//   $(window).scroll(function() {
//     var scrollTop = $(window).scrollTop();
//     var sectionScrollTop = scrollTop - (sectionOffset - 400);
//
//     if (scrollTop >= sectionOffset && scrollTop < sectionOffset + sectionHeight) {
//       $('.community-top').css('top', 80 - sectionScrollTop * 0.2 + '%'); // Adjust the multiplier to control the speed
//       $('.parallax-sectionimage2').css('top', 50 - sectionScrollTop * 0.2 + '%'); // Adjust the multiplier to control the speed
//     }
//   });
// });

$('.header-button').on('click', function (e) {
  e.preventDefault();
  const ths = $(this);
    ths.find('span').toggleClass('hidden');
    $('.header-nav').toggleClass('open');
});
$('.header-nav a').on('click', function (e) {
  e.preventDefault();
  const ths = $(this);
    $('.header-button').find('span').toggleClass('hidden');
    $('.header-nav').toggleClass('open');
});
window.addEventListener('progressEvent', (e) => {
  const { target, progress } = e.detail;
  console.log(progress);

  $('.community-top').css('top', -progress * 100 + 20 + '%');
  $('.community-top').css('opacity', progress + .7);
  $('.community-bottom').css('top', -progress * 100 + 20 + '%');
  $('.community-bottom').css('opacity', progress + .7);
});