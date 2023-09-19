const customHeader = (scrollPoint) =>{
  const isInViewport = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  const mobileButton = document.querySelector(".header__mobile-button");
  const mobileMenu = document.querySelector(".header ul");
  
  mobileButton.addEventListener("click", () => {
    mobileButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
  
  const headerBlack = document.querySelector(".header__black");
  
  window.addEventListener("scroll", () => {
    if (!isInViewport(scrollPoint)) {
      headerBlack.classList.add("active");
    } else headerBlack.classList.remove("active");
  });
}
