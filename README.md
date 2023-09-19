# Script for adding custom header into instapage

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/BuckedUp-DasLabs/custom_header@latest/style.css" />
<script src="https://cdn.jsdelivr.net/gh/BuckedUp-DasLabs/custom_header@latest/scripts.js"></script>
<script>
  customHeader("#element-133");
</script>
```

```
<header class="header">
    <nav>
      <a href="/" class="header__logo">
        <svg width="165" height="42" viewBox="0 0 165 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21.2439 32.855C21.5519 32.3314 22.3276 31.8814 22.6066 31.3232L23.1915 31.2486C23.6364 32.0761 21.86 32.7609 21.2439 32.855ZM37.5102 14.4847C34.9378 19.3861 25.2297 24.4768 25.2297 25.7349C25.2297 26.0875 25.751 26.0205 27.3163 25.8431C32.5431 25.2622 33.9435 23.6233 31.552 28.2478C31.2288 28.8763 30.7828 29.2268 30.2733 29.27C23.4673 29.8455 25.5065 31.6283 24.8472 34.8952C24.3086 36.2473 23.0816 36.6941 22.3696 37.7824C22.7455 35.9434 24.5952 35.423 23.6709 33.1633C23.3779 33.6793 23.0127 34.1574 22.3103 34.4116C21.8051 34.5944 21.1943 34.6377 20.6126 34.7004C20.593 34.2788 20.6071 33.8563 20.6546 33.437C21.1361 33.3401 21.6056 33.191 22.055 32.9924C23.1517 32.5164 24.3172 31.6769 23.7064 30.7639C23.7028 30.76 23.7008 30.7547 23.7008 30.7493C23.7008 30.7439 23.7028 30.7387 23.7064 30.7347C23.8243 30.6585 23.9466 30.5895 24.0727 30.5281C24.0766 30.5256 24.0797 30.5221 24.0816 30.5178C24.0835 30.5136 24.0842 30.5089 24.0835 30.5043C23.9994 29.9634 24.5531 29.8012 24.9797 29.7201L24.9668 29.6292C23.4177 29.9862 22.4493 30.5919 22.348 30.7769C21.8708 31.651 20.562 33.4997 19.7034 31.9733C20.2216 33.0908 20.493 34.5631 20.7052 36.031C20.8478 36.4847 21.0243 36.9269 21.2331 37.354C21.7114 38.3113 22.0001 38.9766 21.9872 39.591C21.9785 40.3007 21.5369 40.8891 20.7268 41.3749C20.3075 41.7761 19.7505 42 19.1712 42C18.592 42 18.035 41.7761 17.6157 41.3749C16.8056 40.8881 16.3639 40.3007 16.3543 39.591C16.3467 38.9766 16.6354 38.3113 17.1137 37.354C17.3225 36.9269 17.499 36.4847 17.6416 36.031C17.857 34.5631 18.1252 33.0908 18.6434 31.9733C17.7816 33.4997 16.476 31.6488 15.9988 30.7769C15.8975 30.5919 14.9291 29.9862 13.3789 29.6292L13.3671 29.7201C13.798 29.8012 14.3463 29.9689 14.2633 30.5043C14.2626 30.5089 14.2633 30.5136 14.2652 30.5178C14.2671 30.5221 14.2702 30.5256 14.2741 30.5281C14.4002 30.5895 14.5225 30.6585 14.6404 30.7347C14.6438 30.7388 14.6457 30.744 14.6457 30.7493C14.6457 30.7547 14.6438 30.7599 14.6404 30.7639C14.0296 31.6769 15.1951 32.5164 16.2918 32.9924C16.7411 33.1912 17.2107 33.3403 17.6922 33.437C17.7397 33.8563 17.7538 34.2788 17.7342 34.7004C17.1525 34.6377 16.5417 34.5923 16.0365 34.4116C15.3341 34.1574 14.9689 33.6793 14.6759 33.1633C13.7516 35.423 15.6013 35.9423 15.9772 37.7824C15.2609 36.6941 14.0382 36.2473 13.4996 34.8952C12.8403 31.6229 14.8795 29.8401 8.07349 29.27C7.56395 29.2268 7.12013 28.8763 6.7948 28.2478C4.40224 23.6233 5.80374 25.2622 11.0305 25.8431C12.5947 26.0172 13.1171 26.0843 13.1171 25.7349C13.1171 24.4736 3.41226 19.3828 0.836572 14.4847C-1.21881 10.5665 0.710534 4.30861 4.47227 1.07093C4.21696 2.45016 -0.590772 10.0495 4.59292 5.31248C4.59292 5.31248 5.6777 3.24633 6.49317 2.14511C7.21062 1.17802 8.14028 0.237985 8.77262 0C8.61319 0.558184 7.52517 1.94715 7.23539 2.3885C6.5772 3.37939 6.14199 4.56931 6.09136 4.92954C6.17431 4.95442 8.56902 4.10416 9.3511 4.15392C7.86127 5.72463 5.37715 5.50611 5.06475 8.08177C4.75558 10.6304 4.79113 12.7517 5.46764 14.7475C5.66154 13.5468 6.81204 11.6429 7.92375 11.0847C7.89682 13.1682 5.71648 13.5186 6.72909 17.2821C7.86558 18.9047 9.18843 19.5873 10.9303 20.7588C10.9012 19.2617 11.0542 17.4703 11.6381 16.1008C11.7458 17.9744 11.6381 19.4661 12.6679 21.4468C12.9556 20.3413 13.8701 19.4997 14.4518 19.4229C14.4518 19.4229 13.4726 20.8053 13.1527 22.2873C13.4306 22.4399 14.8461 23.7477 16.3704 24.3362H21.9635C23.4878 23.7477 24.9032 22.4399 25.1812 22.2873C24.858 20.8053 23.882 19.4229 23.882 19.4229C24.4627 19.5018 25.3772 20.3413 25.6659 21.4468C26.6947 19.4661 26.5913 17.9744 26.6958 16.1008C27.2796 17.4703 27.4315 19.2617 27.4035 20.7588C29.1454 19.5873 30.4694 18.9047 31.6048 17.2821C32.6174 13.5186 30.436 13.1714 30.4101 11.0847C31.5218 11.6429 32.6723 13.5468 32.8662 14.7475C33.5427 12.7517 33.5783 10.6304 33.2691 8.08177C32.9567 5.50611 30.4683 5.72463 28.9828 4.15392C29.7638 4.10416 32.1596 4.95442 32.2425 4.92954C32.1919 4.56931 31.7567 3.37939 31.0985 2.3885C30.8087 1.9558 29.7207 0.558184 29.5612 0C30.1936 0.237985 31.1232 1.17802 31.8407 2.14511C32.6562 3.24633 33.7409 5.31248 33.7409 5.31248C38.9214 10.0473 34.1169 2.45016 33.8616 1.07093C37.6395 4.30861 39.5688 10.5665 37.5124 14.4847H37.5102ZM3.20112 9.8818C3.24852 9.289 3.42195 8.0504 3.42195 8.0504C1.43767 9.33876 1.15975 12.4585 2.83701 14.2056C3.12894 14.5095 3.29915 14.4219 3.2873 14.2521C3.2259 13.2947 3.08155 11.4017 3.20112 9.8818ZM11.9386 28.0931C10.4391 27.5522 8.75754 26.57 7.25047 26.4012C7.47131 28.8016 9.89941 28.1926 11.6025 28.1948C11.7113 28.1818 11.874 28.198 11.9408 28.0888L11.9386 28.0931ZM17.6276 30.7196C16.5503 29.6378 15.5075 28.4479 13.952 28.3873L14.0123 28.8655C15.3912 29.1402 16.4458 30.0478 17.5295 30.9035C17.5534 30.8361 17.5872 30.7726 17.6297 30.7153L17.6276 30.7196ZM20.4866 41.3857L19.1799 40.7918L17.8721 41.3857C18.2365 41.6983 18.7 41.8701 19.1793 41.8701C19.6586 41.8701 20.1222 41.6983 20.4866 41.3857ZM19.4944 38.7895C19.3982 38.8433 19.29 38.8715 19.1799 38.8715C19.0698 38.8715 18.9615 38.8433 18.8653 38.7895C18.6819 38.6963 18.5105 38.5812 18.3547 38.4466C18.0714 38.2194 17.7859 37.9814 17.4401 37.9814L17.1708 38.6088L19.1799 40.3256L21.1911 38.6056L20.9228 37.9781C20.577 37.9781 20.2905 38.2161 20.0083 38.4433C19.852 38.5778 19.6802 38.6929 19.4966 38.7862L19.4944 38.7895ZM24.4099 28.3798C22.8533 28.4414 21.8159 29.6249 20.7332 30.712C20.7754 30.7679 20.8088 30.8299 20.8324 30.8959C21.915 30.0403 22.9707 29.1327 24.3495 28.8579L24.4099 28.3798ZM26.4232 28.0855C26.49 28.1937 26.6581 28.1786 26.7583 28.1872C28.4625 28.1872 30.8906 28.7941 31.1114 26.3937C29.6043 26.5657 27.9228 27.5447 26.4232 28.0888V28.0855ZM34.9399 8.04282C34.9399 8.04282 35.1134 9.28143 35.1554 9.87423C35.2771 11.3984 35.1327 13.2915 35.0692 14.2445C35.0573 14.4176 35.2275 14.502 35.5195 14.198C37.2054 12.4542 36.9242 9.33444 34.9399 8.04282ZM17.1202 32.855C16.811 32.3314 16.0354 31.8814 15.7575 31.3232L15.1725 31.2486C14.7276 32.0761 16.504 32.7609 17.1202 32.855Z"
            fill="black" />
          <path
            d="M59.4514 27H50.5234V15.992H59.3234C61.7874 15.992 62.6034 16.6 62.6034 18.888V19.528C62.6034 20.568 62.1394 21.128 61.2434 21.304C62.1554 21.448 62.8754 22.056 62.8754 23.336V24.056C62.8754 26.36 61.9154 27 59.4514 27ZM60.2194 23.688V23.144C60.2194 22.648 60.0434 22.456 59.4994 22.456H53.1954V24.328H59.4514C60.0274 24.328 60.2194 24.136 60.2194 23.688ZM59.9634 19.832V19.304C59.9634 18.856 59.7714 18.68 59.3234 18.68H53.1954V20.488H59.3554C59.7874 20.488 59.9634 20.296 59.9634 19.832ZM73.2613 27H67.8053C65.3093 27 64.4293 26.008 64.4293 23.512V15.992H67.0853V23.512C67.0853 24.088 67.2933 24.328 67.8053 24.328H73.2613C73.7893 24.328 73.9973 24.088 73.9973 23.512V15.992H76.6533V23.512C76.6533 26.008 75.7573 27 73.2613 27ZM88.2537 27H81.9017C79.2297 27 78.4137 26.168 78.4137 23.432V19.56C78.4137 16.808 79.2297 15.992 81.9017 15.992H88.1897C89.8537 15.992 90.6057 17 90.8777 17.608L89.1817 19.336C89.0057 18.984 88.7177 18.68 88.0137 18.68H81.9177C81.3097 18.68 81.0697 18.904 81.0697 19.56V23.448C81.0697 24.04 81.2297 24.328 81.9177 24.328H88.0937C88.8137 24.328 89.0697 24.008 89.2457 23.672L90.9417 25.384C90.6857 25.992 89.9177 27 88.2537 27ZM105.581 27H101.805L97.9973 23.08L95.1333 25.768V27H92.4453V15.992H95.1333V22.344L101.805 15.992H105.613L99.8213 21.368L105.581 27ZM117.385 27H106.617V15.992H117.385V18.68H109.289V20.488H117.145V22.504H109.289V24.328H117.385V27ZM128.401 27H118.977V15.992H128.401C131.105 15.992 131.905 16.872 131.905 19.56V23.432C131.905 26.136 131.105 27 128.401 27ZM129.249 23.448V19.576C129.249 18.888 128.993 18.68 128.385 18.68H121.649V24.328H128.385C129.009 24.328 129.249 24.12 129.249 23.448ZM147.433 27H141.977C139.481 27 138.601 26.008 138.601 23.512V15.992H141.257V23.512C141.257 24.088 141.465 24.328 141.977 24.328H147.433C147.961 24.328 148.169 24.088 148.169 23.512V15.992H150.825V23.512C150.825 26.008 149.929 27 147.433 27ZM161.002 23.624H155.274V27H152.602V15.992H161.002C163.578 15.992 164.394 16.808 164.394 19.416V20.456C164.394 22.76 163.578 23.624 161.002 23.624ZM161.754 20.52V19.416C161.754 18.872 161.53 18.68 161.002 18.68H155.274V21.24H161.002C161.53 21.24 161.754 21.016 161.754 20.52Z"
            fill="black" />
        </svg>
      </a>
      <ul>
        <li><a href="#">Order</a></li>
        <li><a href="#">Quick & Easy</a></li>
        <li><a href="#">Why Bucked Up</a></li>
        <li><a href="#">Ingredients</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Faq</a></li>
      </ul>
      <button class="header__mobile-button" type="button"><span></span><span></span><span></span></button>
    </nav>
    <div class="header__black">
      <div class="header__black__container">
        <div class="header__black__img-text">
          <svg width="39" height="42" viewBox="0 0 39 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.2439 32.855C21.5519 32.3314 22.3276 31.8814 22.6066 31.3232L23.1915 31.2486C23.6364 32.0761 21.86 32.7609 21.2439 32.855ZM37.5102 14.4847C34.9378 19.3861 25.2297 24.4768 25.2297 25.7349C25.2297 26.0875 25.751 26.0205 27.3163 25.8431C32.5431 25.2622 33.9435 23.6233 31.552 28.2478C31.2288 28.8763 30.7828 29.2268 30.2733 29.27C23.4673 29.8455 25.5065 31.6283 24.8472 34.8952C24.3086 36.2473 23.0816 36.6941 22.3696 37.7824C22.7455 35.9434 24.5952 35.423 23.6709 33.1633C23.3779 33.6793 23.0127 34.1574 22.3103 34.4116C21.8051 34.5944 21.1943 34.6377 20.6126 34.7004C20.593 34.2788 20.6071 33.8563 20.6546 33.437C21.1361 33.3401 21.6056 33.191 22.055 32.9924C23.1517 32.5164 24.3172 31.6769 23.7064 30.7639C23.7028 30.76 23.7008 30.7547 23.7008 30.7493C23.7008 30.7439 23.7028 30.7387 23.7064 30.7347C23.8243 30.6585 23.9466 30.5895 24.0727 30.5281C24.0766 30.5256 24.0797 30.5221 24.0816 30.5178C24.0835 30.5136 24.0842 30.5089 24.0835 30.5043C23.9994 29.9634 24.5531 29.8012 24.9797 29.7201L24.9668 29.6292C23.4177 29.9862 22.4493 30.5919 22.348 30.7769C21.8708 31.651 20.562 33.4997 19.7034 31.9733C20.2216 33.0908 20.493 34.5631 20.7052 36.031C20.8478 36.4847 21.0243 36.9269 21.2331 37.354C21.7114 38.3113 22.0001 38.9766 21.9872 39.591C21.9785 40.3007 21.5369 40.8891 20.7268 41.3749C20.3075 41.7761 19.7505 42 19.1712 42C18.592 42 18.035 41.7761 17.6157 41.3749C16.8056 40.8881 16.3639 40.3007 16.3543 39.591C16.3467 38.9766 16.6354 38.3113 17.1137 37.354C17.3225 36.9269 17.499 36.4847 17.6416 36.031C17.857 34.5631 18.1252 33.0908 18.6434 31.9733C17.7816 33.4997 16.476 31.6488 15.9988 30.7769C15.8975 30.5919 14.9291 29.9862 13.3789 29.6292L13.3671 29.7201C13.798 29.8012 14.3463 29.9689 14.2633 30.5043C14.2626 30.5089 14.2633 30.5136 14.2652 30.5178C14.2671 30.5221 14.2702 30.5256 14.2741 30.5281C14.4002 30.5895 14.5225 30.6585 14.6404 30.7347C14.6438 30.7388 14.6457 30.744 14.6457 30.7493C14.6457 30.7547 14.6438 30.7599 14.6404 30.7639C14.0296 31.6769 15.1951 32.5164 16.2918 32.9924C16.7411 33.1912 17.2107 33.3403 17.6922 33.437C17.7397 33.8563 17.7538 34.2788 17.7342 34.7004C17.1525 34.6377 16.5417 34.5923 16.0365 34.4116C15.3341 34.1574 14.9689 33.6793 14.6759 33.1633C13.7516 35.423 15.6013 35.9423 15.9772 37.7824C15.2609 36.6941 14.0382 36.2473 13.4996 34.8952C12.8403 31.6229 14.8795 29.8401 8.07349 29.27C7.56395 29.2268 7.12013 28.8763 6.7948 28.2478C4.40224 23.6233 5.80374 25.2622 11.0305 25.8431C12.5947 26.0172 13.1171 26.0843 13.1171 25.7349C13.1171 24.4736 3.41226 19.3828 0.836572 14.4847C-1.21881 10.5665 0.710534 4.30861 4.47227 1.07093C4.21696 2.45016 -0.590772 10.0495 4.59292 5.31248C4.59292 5.31248 5.6777 3.24633 6.49317 2.14511C7.21062 1.17802 8.14028 0.237985 8.77262 0C8.61319 0.558184 7.52517 1.94715 7.23539 2.3885C6.5772 3.37939 6.14199 4.56931 6.09136 4.92954C6.17431 4.95442 8.56902 4.10416 9.3511 4.15392C7.86127 5.72463 5.37715 5.50611 5.06475 8.08177C4.75558 10.6304 4.79113 12.7517 5.46764 14.7475C5.66154 13.5468 6.81204 11.6429 7.92375 11.0847C7.89682 13.1682 5.71648 13.5186 6.72909 17.2821C7.86558 18.9047 9.18843 19.5873 10.9303 20.7588C10.9012 19.2617 11.0542 17.4703 11.6381 16.1008C11.7458 17.9744 11.6381 19.4661 12.6679 21.4468C12.9556 20.3413 13.8701 19.4997 14.4518 19.4229C14.4518 19.4229 13.4726 20.8053 13.1527 22.2873C13.4306 22.4399 14.8461 23.7477 16.3704 24.3362H21.9635C23.4878 23.7477 24.9032 22.4399 25.1812 22.2873C24.858 20.8053 23.882 19.4229 23.882 19.4229C24.4627 19.5018 25.3772 20.3413 25.6659 21.4468C26.6947 19.4661 26.5913 17.9744 26.6958 16.1008C27.2796 17.4703 27.4315 19.2617 27.4035 20.7588C29.1454 19.5873 30.4694 18.9047 31.6048 17.2821C32.6174 13.5186 30.436 13.1714 30.4101 11.0847C31.5218 11.6429 32.6723 13.5468 32.8662 14.7475C33.5427 12.7517 33.5783 10.6304 33.2691 8.08177C32.9567 5.50611 30.4683 5.72463 28.9828 4.15392C29.7638 4.10416 32.1596 4.95442 32.2425 4.92954C32.1919 4.56931 31.7567 3.37939 31.0985 2.3885C30.8087 1.9558 29.7207 0.558184 29.5612 0C30.1936 0.237985 31.1232 1.17802 31.8407 2.14511C32.6562 3.24633 33.7409 5.31248 33.7409 5.31248C38.9214 10.0473 34.1169 2.45016 33.8616 1.07093C37.6395 4.30861 39.5688 10.5665 37.5124 14.4847H37.5102ZM3.20112 9.8818C3.24852 9.289 3.42195 8.0504 3.42195 8.0504C1.43767 9.33876 1.15975 12.4585 2.83701 14.2056C3.12894 14.5095 3.29915 14.4219 3.2873 14.2521C3.2259 13.2947 3.08155 11.4017 3.20112 9.8818ZM11.9386 28.0931C10.4391 27.5522 8.75754 26.57 7.25047 26.4012C7.47131 28.8016 9.89941 28.1926 11.6025 28.1948C11.7113 28.1818 11.874 28.198 11.9408 28.0888L11.9386 28.0931ZM17.6276 30.7196C16.5503 29.6378 15.5075 28.4479 13.952 28.3873L14.0123 28.8655C15.3912 29.1402 16.4458 30.0478 17.5295 30.9035C17.5534 30.8361 17.5872 30.7726 17.6297 30.7153L17.6276 30.7196ZM20.4866 41.3857L19.1799 40.7918L17.8721 41.3857C18.2365 41.6983 18.7 41.8701 19.1793 41.8701C19.6586 41.8701 20.1222 41.6983 20.4866 41.3857ZM19.4944 38.7895C19.3982 38.8433 19.29 38.8715 19.1799 38.8715C19.0698 38.8715 18.9615 38.8433 18.8653 38.7895C18.6819 38.6963 18.5105 38.5812 18.3547 38.4466C18.0714 38.2194 17.7859 37.9814 17.4401 37.9814L17.1708 38.6088L19.1799 40.3256L21.1911 38.6056L20.9228 37.9781C20.577 37.9781 20.2905 38.2161 20.0083 38.4433C19.852 38.5778 19.6802 38.6929 19.4966 38.7862L19.4944 38.7895ZM24.4099 28.3798C22.8533 28.4414 21.8159 29.6249 20.7332 30.712C20.7754 30.7679 20.8088 30.8299 20.8324 30.8959C21.915 30.0403 22.9707 29.1327 24.3495 28.8579L24.4099 28.3798ZM26.4232 28.0855C26.49 28.1937 26.6581 28.1786 26.7583 28.1872C28.4625 28.1872 30.8906 28.7941 31.1114 26.3937C29.6043 26.5657 27.9228 27.5447 26.4232 28.0888V28.0855ZM34.9399 8.04282C34.9399 8.04282 35.1134 9.28143 35.1554 9.87423C35.2771 11.3984 35.1327 13.2915 35.0692 14.2445C35.0573 14.4176 35.2275 14.502 35.5195 14.198C37.2054 12.4542 36.9242 9.33444 34.9399 8.04282ZM17.1202 32.855C16.811 32.3314 16.0354 31.8814 15.7575 31.3232L15.1725 31.2486C14.7276 32.0761 16.504 32.7609 17.1202 32.855Z"
              fill="white" />
          </svg>
          <p><span>SIGN UP</span> & GET 20% OFF YOUR FIRST PURCHASE</p>
        </div>
        <a href="#element-120">CLAIM OFFER</a>
      </div>
    </div>
  </header>
```