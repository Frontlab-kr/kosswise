$(document).ready(function () {
  $('#header').load('./../../assets/header.html');
  $('#footer').load('./../../assets/footer.html');

  // $('#header').load('/kosswise/assets/header.html'); // 절대 경로
  // $('#footer').load('/kosswise/assets/footer.html'); // 절대 경로
});

$(document).ready(function () {
  // 검색폼
  $('.kw-searchform')
    .not('.kw-searchform--detail')
    .each(function () {
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

  $('.kw-align > button').on('click', function (e) {
    // 버튼 클릭 시 부모에 클래스 토글
    e.stopPropagation(); // 이벤트 버블링 방지
    $('.kw-align')
      .not($(this).parents('.kw-align'))
      .removeClass('kw-align--open');
    $(this).parents('.kw-align').toggleClass('kw-align--open');
  });

  $('.kw-align-layer button').on('click', function () {
    const clickedClass = $(this).attr('class'); // 클릭한 버튼의 클래스 가져오기
    const parentButton = $(this).closest('.kw-align').find('> button'); // 부모의 첫 번째 버튼 선택

    // 부모 버튼에서 기존 클래스 제거
    parentButton.removeClass(function (index, className) {
      return (className.match(/(^|\s)kw-align-\S+/g) || []).join(' ');
    });

    // 클릭한 버튼의 클래스를 부모 버튼에 추가
    parentButton.addClass(clickedClass);
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
  // $('.kw-list-table-faq-title').on('click', function () {
  //   $(this)
  //     .parents('tr')
  //     .toggleClass('active')
  //     .next('.kw-list-table-faq-contents__tr')
  //     .toggleClass('active');

  //   //return false;
  // });
  $(document).ready(function () {
    // 초기 상태: 높이 기억 및 숨기기
    $('.kw-list-table-faq-contents').each(function () {
      const contentHeight = $(this).outerHeight(); // 컨텐츠 높이 기억
      $(this).data('original-height', contentHeight); // 높이 저장
      $(this).css('height', 0).hide(); // 초기 높이를 0으로 설정하고 숨김
    });

    // 특정 칸 미리 열기
    $('.kw-list-table-faq-contents__tr[data-default-open]').each(function () {
      const $contentRow = $(this); // 현재 행
      const $content = $contentRow.find('.kw-list-table-faq-contents'); // 컨텐츠 영역
      const originalHeight = $content.data('original-height'); // 저장된 높이 가져오기
      $content.show().css('height', originalHeight); // 높이 설정 후 표시
      $contentRow.addClass('active'); // 열림 상태 클래스 추가
    });

    // kw-list-table-faq-title 클릭 이벤트
    $('.kw-list-table-faq-title').on('click', function () {
      const $currentRow = $(this).closest('tr'); // 현재 클릭된 tr
      const $contentRow = $currentRow.next('.kw-list-table-faq-contents__tr'); // 다음 tr 찾기
      const $content = $contentRow.find('.kw-list-table-faq-contents'); // 컨텐츠 영역

      if ($contentRow.hasClass('active')) {
        // 닫기 동작
        $content.animate(
          { height: 0 },
          {
            duration: 400, // 닫기 애니메이션 속도
            easing: 'swing', // 부드러운 애니메이션
            complete: function () {
              $content.hide(); // 애니메이션 완료 후 숨기기
            },
          }
        );
        $currentRow.removeClass('active');
        $contentRow.removeClass('active');
      } else {
        // 열기 동작
        const originalHeight = $content.data('original-height'); // 저장된 원래 높이 가져오기
        $content.show().animate(
          { height: originalHeight },
          {
            duration: 300, // 열기 애니메이션 속도
            easing: 'swing', // 부드러운 애니메이션
          }
        );
        $currentRow.addClass('active');
        $contentRow.addClass('active');
      }
    });
  });

  //tree
  $('.kw-tree-collapse, .kw-tree-text label').on('click', function () {
    $(this)
      .parent('.kw-tree-text')
      .parent('li')
      .parent('ol')
      .toggleClass('fold');
  });

  //table drag
  $('.kw-list-table table').resizableColumns({
    store: window.store,
  });

  $('.kw-list-table table').dragtable({
    dragHandle: '.kw-list-table-title__title',
  });
});
