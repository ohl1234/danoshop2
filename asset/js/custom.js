// 1. 검색버튼 클릭 시  검색영역 등장
const btnSearch = document.querySelector('.btn-search');
const searchWrap = document.querySelector('.search-wrap');
const btnClose = document.querySelector('.btn-close');

btnSearch.addEventListener('click', (e) => {
  e.preventDefault();
  searchWrap.style.display = 'block';
});

btnClose.addEventListener('click', () => {
  searchWrap.style.display = 'none';
});

// 2. 메인슬라이드 비동기처리

fetch("./asset/data/mainslide.json")
  .then((response) => response.json())
  .then((json) => {

    const mainSlide = json.mainSlide;

    let html = '';
    mainSlide.forEach(el => {
      html += `<div class="swiper-slide">
                    <a href="${el.url}">
                        <img src="${el.imgSrc}" alt="${el.alt}">
                    </a>
                </div>`
    });

    const slideList = document.querySelector('.sc-visual .swiper-wrapper');
    slideList.innerHTML = html;

    // 3. sc-visual swiper slide
    const slide1 = new Swiper(".slide1 .swiper", {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });

  });

// 4. sc-recipe swiper slide
const slide2 = new Swiper(".slide2 .swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// 5. sc-type1 비동기처리

fetch("./asset/data/product.json") //
  .then((response) => response.json())
  .then((json) => {

    const veganMain = json.veganMain;
    const veganList = json.veganList;

    let mainHtml = '';
    let listHtml = '';

    // vegan main
    const newEl = `<span class="new">new</span>`;
    const saleEl = `<span class="sale">sale</span>`;
    const freeEl = `<em class="free-delivery"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-delivery"><path d="M16.1504 7.39453L21.3902 7.39453" stroke="currentColor" stroke-linecap="round"></path><path d="M17.2314 10.168H22.4385" stroke="currentColor" stroke-linecap="round"></path><path d="M4.07812 17.9218H2.91627C2.3056 17.9218 1.81055 17.4268 1.81055 16.8161V12.2799C1.81055 12.0391 1.88912 11.8049 2.03433 11.6129L4.11783 8.85774C4.32682 8.58137 4.65328 8.41895 4.99977 8.41895H7.88768" stroke="currentColor"></path><path d="M7.30464 18.7162C7.30464 17.8002 6.56206 17.0576 5.64605 17.0576C4.73003 17.0576 3.98746 17.8002 3.98746 18.7162C3.98746 19.6322 4.73003 20.3748 5.64605 20.3748C6.56206 20.3748 7.30464 19.6322 7.30464 18.7162Z" stroke="currentColor" stroke-linecap="round"></path><path d="M2.06955 12H5.90504" stroke="currentColor" stroke-linecap="round"></path><path d="M19.4333 4.6875H8.98073C8.37005 4.6875 7.875 5.18255 7.875 5.79323V17.9216" stroke="currentColor" stroke-linecap="round"></path><path d="M18.293 17.9215H19.3814C19.9921 17.9215 20.4871 17.4265 20.4871 16.8158V12.7969" stroke="currentColor" stroke-linecap="round"></path><path d="M18.3279 18.7162C18.3279 17.8002 17.5853 17.0576 16.6693 17.0576C15.7533 17.0576 15.0107 17.8002 15.0107 18.7162C15.0107 19.6322 15.7533 20.3748 16.6693 20.3748C17.5853 20.3748 18.3279 19.6322 18.3279 18.7162Z" stroke="currentColor" stroke-linecap="round"></path><path d="M7.20312 17.9219L14.9497 17.9219" stroke="currentColor"></path></svg>무료배송</em>`;

    const isNew = veganMain[0].new ? newEl : "";
    const isSale = veganMain[0].sale ? saleEl : "";
    const isFree = veganMain[0].freeDelivery ? freeEl : "";

    mainHtml = `<div class="thumb-box">
                <a href="${veganMain[0].url}"><img src="${veganMain[0].thumbImg}" alt="${veganMain[0].prdName}"></a>
                <div class="badge-box">
                    ${isSale}${isNew}
                </div>
                <button class="cart">
                    <span class="blind">장바구니 추가</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4H2.8132C3.70795 4 4.49383 4.59428 4.73757 5.45519L7.16941 14.0448C7.41315 14.9057 8.19903 15.5 9.09378 15.5H18.1171C19.0329 15.5 19.8316 14.878 20.0561 13.9901L21.3705 8.79014C21.6899 7.52659 20.7348 6.3 19.4315 6.3H15.9767" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.9302 19C10.9302 18.1716 10.2586 17.5 9.43018 17.5C8.60175 17.5 7.93018 18.1716 7.93018 19C7.93018 19.8284 8.60175 20.5 9.43018 20.5C10.2586 20.5 10.9302 19.8284 10.9302 19Z" stroke="currentColor"></path><path d="M19.3024 19C19.3024 18.1716 18.6308 17.5 17.8024 17.5C16.9739 17.5 16.3024 18.1716 16.3024 19C16.3024 19.8284 16.9739 20.5 17.8024 20.5C18.6308 20.5 19.3024 19.8284 19.3024 19Z" stroke="currentColor"></path><path d="M11 3.8V8.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 6.3H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
              </div>
              <a href="${veganMain[0].url}" class="info-box">
                ${isFree}
                <p class="product-name">${veganMain[0].prdName}</p>
                <span class="price">
                    <em>${veganMain[0].priceOrigin}</em>원
                </span>
              </a>`
    // vegan list
    veganList.forEach(el => {
      const isNew = el.new ? newEl : "";
      const isSale = el.sale ? saleEl : "";
      const isFree = el.freeDelivery ? freeEl : "";

      listHtml += `<li class="product-item">
                  <div class="thumb-box">
                      <a href="${el.url}"><img src="${el.thumbImg}" alt="${el.prdName}"></a>
                      <div class="badge-box">
                        ${isSale}${isNew}
                      </div>
                  </div>
                  <a href="${el.url}" class="info-box">
                      ${isFree}
                      <p class="product-name">${el.prdName}</p>
                      <em class="current-sale">
                          ${el.priceDiscount}
                          <del>${el.priceOrigin}</del>
                      </em>
                      <span class="price">
                          <em>${el.priceCurrent}</em>원
                      </span>
                  </a>
                </li>`
    });
    const main = document.querySelector('#vegan .product-main');
    const list = document.querySelector('#vegan .product-list');
    main.innerHTML = mainHtml;
    list.innerHTML = listHtml;
  });