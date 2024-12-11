$(document).ready(function () {
    $('.gallery').slick({
        slidesToShow: 1, // 一度に表示するスライド数を1に変更
        slidesToScroll: 1, // 1スライドずつスクロール
        arrows: true, // 左右の矢印を表示
        dots: true, // ページネーションを表示
        adaptiveHeight: true, // 高さをスライドに合わせて調整
        responsive: [
            {
                breakpoint: 768, // スマートフォンのブレイクポイント
                settings: {
                    slidesToShow: 1 // スマートフォンでも1枚表示
                }
            }
        ]
    });
});

