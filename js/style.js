// 制作物スライドショー
window.addEventListener("DOMContentLoaded", () => {
    const infiniteSlider = new Swiper(".infinite-slider", {
      loop: true,
      loopedSlides: 2,
      slidesPerView: "auto",
      speed: 8000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  });

  // 制作物アコーディオンメニュー
  const menu = document.querySelectorAll(".js-menu");
 
      function toggle() {
        const content = this.nextElementSibling;
        this.classList.toggle("is-active");
        content.classList.toggle("is-open");
      }

      for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", toggle);
      }

    // このハンドラーは、カーソルが順序なしリストの上を移動した
    // ときに1度だけ実行されます
    // menu.addEventListener("mouseenter", function( event ) {
    // // mouseenter の対象を強調
    // event.target.style.color = "purple";

    // // 少し待ってから色をリセット
    // setTimeout(function() {
    //     event.target.style.color = "";
    //   }, 500);
    // }, false);

    // // このハンドラーは異なるリスト項目の上を移動するごとに
    // // 実行されます
    // test.addEventListener("mouseover", function( event ) {
    //   // mouseover の対象を強調
    //   event.target.style.color = "orange";

    //   // 少し待ってから色をリセット
    //   setTimeout(function() {
    //     event.target.style.color = "";
    //   }, 500);
    // }, false);