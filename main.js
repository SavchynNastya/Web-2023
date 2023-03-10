(function () {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  let index = 0;

  const activeSlide = (n) => {
    for (slide of slides) {
      slide.classList.remove("active__slide");
    }
    slides[n].classList.add("active__slide");
  };

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };

  const activeDot = (n) => {
    for (dot of dots) {
      dot.classList.remove("active__dot");
    }
    dots[n].classList.add("active__dot");
  };

  const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
  };

  dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });

  setInterval(nextSlide, 7000);
})();

(function () {
  const likeItemButton = document.querySelectorAll(".like__item-button");
  console.log(likeItemButton)
  likeItemButton.forEach((likeButton) =>{
    likeButton.addEventListener('click', () => {
      let likeButtonIcon = likeButton.querySelector(".like__item");
      console.log(likeButtonIcon)
      if(likeButtonIcon.src.includes("/img/svg/item_liked.svg")){
        likeButtonIcon.src = "img/svg/item_like.svg";
      } else{
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
