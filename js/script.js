$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav");
  const body = document.querySelector("body");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("lock");
  });
});

// $(document).ready(function () {
//   $("#show-more").on("click", function (event) {
//     event.preventDefault();
//     $(".game-catalog__list-item").slice(0, 6).removeClass("hidden");
//     if ($(".game-catalog__list-item .hidden").length === 0) {
//       $("#show-more").hide();
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("show-more");
  const gameItems = document.querySelectorAll(
    ".game-catalog__list-item.hidden"
  );

  showMoreButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Показываем первые 6 скрытых элементов
    let count = 0;
    gameItems.forEach((item) => {
      if (count < 6) {
        item.classList.remove("hidden");
        count++;
      }
    });

    // Проверяем, остались ли еще скрытые элементы
    const remainingHidden = document.querySelectorAll(
      ".game-catalog__list-item.hidden"
    );
    if (remainingHidden.length === 0) {
      showMoreButton.style.display = "none";
    }
  });
});
