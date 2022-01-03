'use strict';

const $toggle = document.querySelector('.navbar-toggle');
const $navbar = document.querySelector('#bosenyblog-navbar');
const $collapse = document.querySelector('.navbar-collapse');
const topBtn = document.querySelector('.gotop-btn');
const $toc = document.querySelector('#toc');

const headerHeight = $('.header-container').height();

$toggle.addEventListener('click', handleMagic);
function handleMagic(e) {
  if ($navbar.className.indexOf('in') > 0) {
    // CLOSE
    $navbar.className = '';
    // wait until animation end.
    setTimeout(() => {
      // prevent frequently toggle
      if ($navbar.className.indexOf('in') < 0) {
        $collapse.style.height = '0px';
      }
    }, 400);
  } else {
    // OPEN
    $collapse.style.height = 'auto';
    $navbar.className += ' in';
  }
}
$(window).scroll(() => {
  $(this).scrollTop() > 400
    ? $('.gotop-btn').css('display', 'block')
    : $('.gotop-btn').hide();
  const $catalog = $('#toc');
  // $catalog.show()
  if ($(this).scrollTop() > headerHeight + 95) {
    $catalog.addClass('fixed');
    // $catalog.removeAttr('left')
  } else {
    $catalog.removeClass('fixed');
    // $catalog.css('left', '15%')
  }
});
$('.gotop-btn').hover(
  () => {
    $(this).addClass('top-active');
  },
  () => {
    $(this).removeClass('top-active');
  }
);
topBtn.addEventListener('click', () => {
  $('html,body').animate({ scrollTop: '0px' }, 500);
  $('.gotop-btn').removeClass('top-active');
});
if ($toc && $toc.childElementCount && $toc.childElementCount <= 1) {
  $toc.style.display = 'none';
}
