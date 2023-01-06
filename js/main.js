console.log('js')

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
})

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
})


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500 ){
    gsap.to(badgeEl,0.3,{
      opacity:0,
      display : 'none'
    })
    gsap.to(toTopEl,0.2,{
      x:0,
    })
  }else{
    gsap.to(badgeEl,0.3,{
      opacity:1,
      display:'block'
      })
    gsap.to(toTopEl,0.2,{
      x:100,
    })

  }
},300))

toTopEl.addEventListener('click',function(){
  gsap.to(window,0.7,{
    scrollTo : 0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((element,index) => {
  gsap.to(element,1,{
    opacity: 1,
    delay: (index+1)*.4,
  });
});

new Swiper('.notice-line .swiper',{
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.promotion .swiper',{
    slidesPerView : 3,
    spaceBetween : 10,
    centeredSlides : true,
    loop : true,
    autoplay : {
      delay : 3000,
    },
    pagination : {
      el: '.swiper-pagination',
      type : 'bullets'
    },
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    }  
  })

new Swiper('.awards .swiper',{
  slidesPerView : 5,
  spaceBetween : 3,
  autoplay:true,
  loop : true,
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  }  
})

const promotionEl= document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    promotionEl.classList.add('hide')
  }else{
    promotionEl.classList.remove('hide')
  }
})

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay,size){
  gsap.to(selector,random(1.5,2.5),{
    y:size,
    repeat:-1,
    yoyo:true,
    ease: Power1.easeInOut,
    delay:random(0,delay),
  });

}

floatingObject('.floating1',1,15);
floatingObject('.floating2',0.5,15);
floatingObject('.floating3',3,15);

// 범위 랜덤 함수(소수점 2자리까지)

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement : spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent= new Date().getFullYear();