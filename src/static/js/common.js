const locomotiveScroll = new LocomotiveScroll();
$('.header-button').on('click', function (e) {
  e.preventDefault();
  const ths = $(this);
    ths.find('span').toggleClass('hidden');
    $('.header-nav').toggleClass('open');
})