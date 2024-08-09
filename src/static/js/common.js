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
  if(progress >= .32){
    $('.community-top').css('opacity', '1').addClass('active');
    $('.community-bottom').css('opacity', '1').addClass('active');
  }else{
    $('.community-bottom').css('opacity', '1').removeClass('active');
    $('.community-top').css('opacity', '1').removeClass('active');
  }
});
$('.play-btn').on('click', function (e) {
  e.preventDefault();
  const t = $(this);
  const tVideo = t.prev().attr('src');
  $('body').addClass('scroll');
  $('.popup-video').addClass('active').find('video').attr('src', tVideo);
  $('.popup-video').find('video').attr('autoplay', 'true');
});
$('.close-popup').on('click', function (e) {
  var $this = $(this);
  $this.parent().removeClass('active');
  $('body').removeClass('scroll');
  $('.popup-video').removeClass('active').find('video').attr('src', '');
  $('.popup-video').find('video').attr('autoplay', 'false');
});

window.addEventListener("progressEvent", (e) => {
  const { progress } = e.detail;
  if(progress >= 0.2539680028129395){
    $('.chart-container').addClass('active');
    $('.circle-chart-circle').css('animation', 'circle-chart-fill 1.35s reverse');
    $('.circle-chart-one').css('animation', 'circle-chart-fill 2s reverse');
    $('.circle-chart-two').css('animation', 'circle-chart-fill 1.7s reverse');
    $('.circle-chart-three').css('animation', 'circle-chart-fill 1.7s  reverse');
    setTimeout(function (e) {
      $('.chart-container-info').addClass('active');
    }, 2000)
  } else{
    $('.chart-container, .chart-container-info').removeClass('active');
    $('.circle-chart-circle').css('animation', ' none');
    $('.circle-chart-one').css('animation', 'none');
    $('.circle-chart-two').css('animation', 'none');
    $('.circle-chart-three').css('animation', 'none');
  }
});
window.addEventListener("progressEventComparison", (e) => {
  const { progress } = e.detail;
  if(progress >= 0.2539680028129395){
    $('.comparison-wrap').addClass('active');
  } else{
    $('.comparison-wrap').removeClass('active');
  }
});
