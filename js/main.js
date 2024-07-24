

$(function () {
  // ハンバーガーメニュー
  $(".toggle-btn").click(function () {
    $("header").toggleClass('open');
  });
  $("nav").on("click", function () {
    $("header").toggleClass("open");
  });
  
  


// pickup スライダー
  $('.slick-list').slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // about
  // 左からのスライド
  $(window).scroll(function () {
    $(".left-content").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-left");
      }
    });
  });
  // 右からのスライド
  $(window).scroll(function () {
    $(".right-content").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        $(this).addClass("slide-right");
      }
    });
  });

  // スクロール時のイベント
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
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });



function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
});


// すべてのモーダルを開くボタンと閉じるボタン、オーバーレイを取得
const modalBtns = document.querySelectorAll('.modal-toggle');
const closeBtns = document.querySelectorAll('.modal-close');
const overlays = document.querySelectorAll('.overlay');

// モーダルを開く関数
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    // オーバーレイにも.activeクラスを追加する
    document.querySelector('.overlay').classList.add('active');
  } 
}

// モーダルを閉じる関数
function closeModal(modal) {
  if (modal) {
    modal.classList.remove('active');
    // オーバーレイにも.activeクラスを追加する
    document.querySelector('.overlay').classList.remove('active');
  } 
}

// モーダルを開くボタンにクリックイベントを設定
modalBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = btn.getAttribute('data-modal');
    openModal(modalId);
  });
});

// モーダルの閉じるボタンにクリックイベントを設定
closeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const modal = btn.closest('.modal');
    closeModal(modal);
  });
});

// オーバーレイにクリックイベントを設定
overlays.forEach(overlay => {
  overlay.addEventListener('click', function() {
    const modal = overlay.closest('.modal');
    closeModal(modal);
  });
});

// ウィンドウ全体のクリックイベントリスナーを設定
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal(event.target);
  }
});


// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述