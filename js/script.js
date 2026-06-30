// ページの読み込みが完了してから実行する
window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("js-hamburger");
  const nav = document.getElementById("js-nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  // ハンバーガーボタンのクリックイベント
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active"); // ボタンの「×」切り替え
      nav.classList.toggle("is-active"); // メニューの表示・非表示
    });
  }

  // リンクをクリックしたらメニューを閉じる
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger && nav) {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
      }
    });
  });
});
