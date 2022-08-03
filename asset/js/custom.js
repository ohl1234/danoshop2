// 1. 검색버튼 클릭 시  검색영역 등장
const btnSearch = document.querySelector('.btn-search');
const searchWrap = document.querySelector('.search-wrap');
const btnClose = document.querySelector('.btn-close');

btnSearch.addEventListener('click',(e)=>{
  e.preventDefault();
  searchWrap.style.display = 'block';
});

btnClose.addEventListener('click',()=>{
  searchWrap.style.display = 'none';
});

// 2. swiper slide
const slide1 = new Swiper(".slide1 .swiper", {
    loop:true,
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