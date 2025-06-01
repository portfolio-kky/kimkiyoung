$(function () {
  // 상단 슬라이드
  $(".slide").slick({
    autoplay: true,
    // autoplaySpeed: 2000,
    dots: true,
    dotsClass: "paging",
    customPaging: function (slick, index) {
      // console.log(slick, index);
      return `<span>${index}</span>`;
    },
    prevArrow: ".visual .btn.btn-prev",
    nextArrow: ".visual .btn.btn-next",
  });

  // 차별화상품
  const $tabMenu = $('.tab-menu li');
  const $tabContent = $('.tab-con-item');
  // 초기로딩 화면에서 0번 탭으로 설정
  tabAction(0);
  $tabMenu.on('click', function (e) {
    e.preventDefault();
    let index = $(this).index();
    // 탭 메뉴의 인덱스 값 가져오기
    tabAction(index);
  });

  function tabAction(index) {
    $tabMenu.removeClass('on');
    $tabMenu.eq(index).addClass('on');
    $tabContent.hide();
    $tabContent.eq(index).show();
  }

  // tab menu slide
  // $tabContent.slick({
  //   // slidesToShow: 3,
  //   // slidesToScroll: 1,
  //   // arrows: true,
  // });


  // header gnb
  // 자주 사용할 대상을 변수에 저장
  const $win = $(window);
  const $header = $('header');
  const $gnb = $('.gnb');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu');
  const duration = 300;

  $gnb.on('mouseenter', 'li', function () {
    $header.addClass('active');
    $(this).addClass('on');
    $submenu.stop().show();
  });
  $gnb.on('mouseleave', 'li', function () {
    $header.removeClass('active');
    $menu.removeClass('on');
    $submenu.stop().hide();
  });


  // 마우스 휠을 움직일 때
  $win.on('wheel', function (e) {
    // console.log(e);

    if (e.originalEvent.wheelDelta > 0) {
      // 마우스 휠을 올렸을 때
      console.log('휠 올림');
      $header.removeClass('hide');
    } else {
      // 마우스 휠을 내렸을 때
      console.log('휠 내림');
      $header.addClass('hide');
    }
  });
});