var slider1 = new Swiper('.tabs-slider', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: { // Mobil uchun
      spaceBetween: 8,
      slidesPerView: 1.1,
    },
    992: { // Katta ekranlar uchun
      spaceBetween: 0,
      slidesPerView: 1,
    }
  }
});

const accordions = document.querySelectorAll('.accordion')
accordions.forEach(item => {
  const accordionHeader = item.querySelector('.accordion-header')
  const accordionContent = item.querySelector('.accordion-content');

  accordionHeader.addEventListener('click', () => {
    accordionContent.classList.toggle('show');
    accordionHeader.classList.toggle('active');
  })
})


// Elementlarni tanlash
const tabBtns = document.querySelectorAll('.tabs_btns button');
const tabContents = document.querySelectorAll('.tab-content');

// Har bir tab tugmasi uchun hodisa o‘rnatish
tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target'); // Tanlangan tab ID

    // Barcha tugmalardan "active" klassini olib tashlash
    tabBtns.forEach((b) => b.classList.remove('active'));

    // Barcha kontentlarni yashirish
    tabContents.forEach((content) => content.classList.remove('active'));

    // Tanlangan tugmaga "active" klassini qo‘shish
    btn.classList.add('active');

    // Maqsadli kontentni ko‘rsatish
    document.getElementById(target).classList.add('active');
  });
});
