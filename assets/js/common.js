$(document).ready(function () {
  $('#header').load('./../../assets/header.html');
  $('#footer').load('./../../assets/footer.html');

  // $('#header').load('/kosswise/assets/header.html'); // 절대 경로
  // $('#footer').load('/kosswise/assets/footer.html'); // 절대 경로
});

$(document).ready(function () {
  //검색폼
  $('.kw-searchform-toggle').on('click', function () {
    $(this).parents('.kw-searchform').toggleClass('kw-searchform--open');
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

  //faq
  $('.kw-list-table-faq-title').on('click', function () {
    $(this).parents('.table').find('tr').removeClass('active');
    $('.kw-list-table-faq-contents__tr').removeClass('active');
    $(this)
      .parents('tr')
      .addClass('active')
      .next('.kw-list-table-faq-contents__tr')
      .toggleClass('active');
    return false;
  });
});
