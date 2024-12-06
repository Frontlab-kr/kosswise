$(document).ready(function () {
  $('#header').load('./../../assets/header.html');
  $('#footer').load('./../../assets/footer.html');

  // $('#header').load('/kosswise/assets/header.html'); // 절대 경로
  // $('#footer').load('/kosswise/assets/footer.html'); // 절대 경로
});

$(document).ready(function () {
  // 검색폼
  $('.kw-searchform').each(function () {
    var $searchform = $(this);
    var heightOpen = $searchform.outerHeight();
    var heightFold = 68;

    // 초기 높이 설정
    $searchform.css({ height: heightOpen + 'px' });

    $searchform.find('.kw-searchform-toggle').on('click', function () {
      $searchform.toggleClass('kw-searchform--open');
      if ($searchform.hasClass('kw-searchform--open')) {
        $searchform.css({ height: heightOpen + 'px' });
      } else {
        $searchform.css({ height: heightFold + 'px' });
        $searchform.addClass('kw-searchform--tooltip');
        setTimeout(() => {
          $searchform.removeClass('kw-searchform--tooltip');
        }, 3000);
      }
    });
  });

  //align
  $(document).on('click', function (e) {
    // 클릭한 대상이 .kw-align 요소 내부인지 확인
    if (!$(e.target).closest('.kw-align').length) {
      // .kw-align 영역 외를 클릭한 경우
      $('.kw-align').removeClass('kw-align--open');
    }
  });

  $('.kw-align button').on('click', function (e) {
    // 버튼 클릭 시 부모에 클래스 토글
    e.stopPropagation(); // 이벤트 버블링 방지
    $('.kw-align').removeClass('kw-align--open');
    $(this).parents('.kw-align').toggleClass('kw-align--open');
  });

  //tooltip
  $('.kw-list').hover(
    function () {
      setTimeout(() => {
        $('.kw-list-table-tooltip').fadeOut();
      }, 400);
    },
    function () {}
  );

  $('.kw-tooltip__button').on('click', function () {
    $('.kw-tooltip').removeClass('active');
    $(this).parents('.kw-tooltip').toggleClass('active');
  });
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.kw-tooltip').length) {
      $('.kw-tooltip').removeClass('active');
    }
  });

  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });
  $('[data-toggle=popover]').popover({
    container: 'body', // body width
  });

  //faq
  $('.kw-list-table-faq-title').on('click', function () {
    $(this)
      .parents('tr')
      .toggleClass('active')
      .next('.kw-list-table-faq-contents__tr')
      .toggleClass('active');

    //return false;
  });

  //tree
  $('.kw-tree-collapse, .kw-tree-text label').on('click', function () {
    $(this)
      .parent('.kw-tree-text')
      .parent('li')
      .parent('ol')
      .toggleClass('fold');
  });
});
