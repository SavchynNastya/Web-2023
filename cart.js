(function () {
    const items = document.querySelectorAll(".cart__item__card");

    function updateTotalCartPrice() {
      let total = 0;
      items.forEach((item) => {
        const quantity = parseInt(
          item.querySelector(".items__quantity-input").value
        );
        const price = parseFloat(item.querySelector(".item__cost").textContent);
        const itemTotal = (quantity * price).toFixed(0);
        item.querySelector(".cart__summary__pricing-value #value").textContent =
          itemTotal;
        total += parseFloat(itemTotal);
      });
      document.getElementById("total-value").textContent = total.toFixed(0);
    }

    items.forEach((item) => {
      const increaseQuantityBtn = item.querySelector(".increase");
      const decreaseQuantityBtn = item.querySelector(".decrease");
      const inputQuantity = item.querySelector(".items__quantity-input");

      increaseQuantityBtn.addEventListener("click", function () {
        inputQuantity.value = parseInt(inputQuantity.value) + 1;
        updateTotalCartPrice();
      });

      decreaseQuantityBtn.addEventListener("click", function () {
        if (parseInt(inputQuantity.value) > 1) {
          inputQuantity.value = parseInt(inputQuantity.value) - 1;
          updateTotalCartPrice();
        }
      });
    });
})();

(function () {
  const likeItemButton = document.querySelectorAll(".cart__like__item-button");
  console.log(likeItemButton);

  likeItemButton.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      let likeButtonIcon = likeButton.querySelector(".like__item");
      if (likeButtonIcon.src.includes("/img/svg/item_liked.svg")) {
        likeButtonIcon.src = "img/svg/item_like.svg";
      } else {
        likeButtonIcon.src = "img/svg/item_liked.svg";
      }
    });
  });
})();

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".nav__links");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const menuLinks = document.querySelectorAll(".header__link");
  // const hiddenLinks = document.querySelectorAll(".hidden__link");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
    // hiddenLinks.forEach((link) => {
    //   // link.classList.add("hidden__link_active");
    // });
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  // if (window.innerWidth < 768) {
  for (let i = 0; i < menuLinks.length; i += 1) {
    menuLinks[i].addEventListener("click", () => {
      menu.classList.remove("header__nav_active");
    });
  }
  // }
})();