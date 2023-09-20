const customHeader = (scrollPoint) =>{
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  const mobileButton = document.querySelector(".header__mobile-button");
  const mobileMenu = document.querySelector(".header ul");
  const links = mobileMenu.querySelectorAll("a");
  
  mobileButton.addEventListener("click", () => {
    mobileButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
  
  links.forEach(link=>{
    link.addEventListener("click",()=>{
      mobileButton.classList.remove("active");
      mobileMenu.classList.remove("active");
    })
  })
  
  const headerBlack = document.querySelector(".header__black");
  const scrollElement = document.getElementById(scrollPoint)
  window.addEventListener("scroll", () => {
    if (!isInViewport(scrollElement)) {
      headerBlack.classList.add("active");
    } else headerBlack.classList.remove("active");
  });
}
