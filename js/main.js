$(function () {

  /*=================================================
    ハンバーガーメニュー
    ===================================================*/

  $(".toggle_btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });

  $(".mask,nav a").on("click", function () {
    $("header").removeClass("open");
  });



  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $("h2").hide().fadeIn(3000); // 3秒かけてフェードイン

  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

 // ヘッダーのアニメーションを実行
 $("#header").css({ top: "-100px" }).animate({ top: "0px" }, 1000);

 // ページ遷移後にハッシュ（#section1など）があればスクロール調整
 if (window.location.hash) {
     var targetId = window.location.hash;
     var targetElement = $(targetId);
     var headerHeight = $('header').outerHeight();

     $('html, body').scrollTop(targetElement.offset().top - headerHeight);
 }

 // ページ内リンククリック時のスムーズスクロール
 $('a[href^="#"]').on('click', function(e) {
     e.preventDefault();

     var targetId = $(this).attr('href');
     var targetElement = $(targetId);
     var headerHeight = $('header').outerHeight();

     $('html, body').animate({
         scrollTop: targetElement.offset().top - headerHeight
     }, 500);
 });
});



