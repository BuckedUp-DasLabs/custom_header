const customHeader = (scrollPoint) =>{
  const mobileButton = document.querySelector(".header__mobile-button");
  const mobileMenu = document.querySelector(".header ul");
  
  mobileButton.addEventListener("click", () => {
    mobileButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
  
  const headerBlack = document.querySelector(".header__black");
  
  window.addEventListener("scroll", () => {
    if (!isElementInViewport(scrollPoint)) {
      headerBlack.classList.add("active");
    } else headerBlack.classList.remove("active");
  });
}
