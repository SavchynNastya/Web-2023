(function () {
    const inputQuantity = document.querySelector(".items__quantity-input");
    const increaseQuantityBtn = document.querySelector(".increase");
    const decreaseQuantityBtn = document.querySelector(".decrease");

    // inputQuantity.addEventListener('keydown', function(e){
    //     e.preventDefault();
    //     console.log("helo")
    // });

    increaseQuantityBtn.addEventListener("click", function () {
      inputQuantity.value = parseInt(inputQuantity.value) + 1;
    });

    decreaseQuantityBtn.addEventListener("click", function () {
        if (parseInt(inputQuantity.value) > 1) {
            inputQuantity.value = parseInt(inputQuantity.value) - 1;
        }
    });
})();

(function () {
  const likeItemButton = document.querySelectorAll(".like__item-button");
  console.log(likeItemButton);
  likeItemButton.forEach((likeButton) => {
    likeButton.addEventListener("click", () => {
      let likeButtonIcon = likeButton.querySelector(".like__item");
      console.log(likeButtonIcon);
      if (likeButtonIcon.src.includes("/img/svg/item_liked.svg")) {
        likeButtonIcon.src = "img/svg/item_like.svg";
      } else {
        likeButtonIcon.src = "img/svg/item_liked.svg";
      }
    });
  });
})();