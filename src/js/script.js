const bodyScroll = document.querySelector('.body');
const blackout = document.querySelector('.block-blackout');
const menuCall = document.querySelector('.order-a-call');
const burgerMenu = document.querySelector('.burger-nav');
const feedbackMenu = document.querySelector('.feedback');
 
 function swiperFunction(){
  let swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        allowTouchMove: false, 
        enabled: false,
        spaceBetween: 0,
      }
    }
  });
 }

 swiperFunction();

 const repairedDevicesContainer = document.querySelectorAll('.repaired-devices');

 let imageRepaired = [
  {
    imgUrl: require('../img/icon/lenovo_logo.png'),
    alt: 'Логотип lenovo'
  },
  {
    imgUrl: require('../img/icon/samsung_logo.png'),
    alt: 'Логотип samsung'
  },
  {
    imgUrl: require('../img/icon/apple_logo.png'),
    alt: 'Логотип apple'
  },
  {
    imgUrl: require('../img/icon/sonic_logo.png'),
    alt: 'Логотип ViewSonic'
  },
  {
    imgUrl: require('../img/icon/bosh_logo.png'),
    alt: 'Логотип bosh'
  },
  {
    imgUrl: require('../img/icon/hp_logo.png'),
    alt: 'Логотип hp'
  },
  {
    imgUrl: require('../img/icon/acer_logo.png'),
    alt: 'Логотип acer'
  },
  {
    imgUrl: require('../img/icon/hp_logo.png'),
    alt: 'Логотип hp'
  },
  {
    imgUrl: require('../img/icon/lenovo_logo.png'),
    alt: 'Логотип lenovo'
  },
  {
    imgUrl: require('../img/icon/samsung_logo.png'),
    alt: 'Логотип samsung'
  },
  {
    imgUrl: require('../img/icon/sonic_logo.png'),
    alt: 'Логотип ViewSonic'
  }
]

function createCardRepaired(image){
  
  for(let i = 0; i < image.length; i++){

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    repairedDevicesContainer[0].appendChild(slide);

    const slideItem = document.createElement('a');
    slideItem.classList.add('repaired-devices__item');
    slide.appendChild(slideItem);

    const imgItem = document.createElement('img');
    imgItem.src = image[i].imgUrl;
    imgItem.alt = image[i].alt;
    slideItem.appendChild(imgItem);

    const btn = document.createElement('button');
    btn.classList.add('icon-button');
    slideItem.appendChild(btn)
  }
}

createCardRepaired(imageRepaired)

let repairedTechnic = [
  {
    nameTechnic: 'Ремонт ноутбуков'
  },
  {
    nameTechnic: 'Ремонт планшетов'
  },
  {
    nameTechnic: 'Ремонт телефонов'
  },
  {
    nameTechnic: 'Ремонт ПК'
  },
  {
    nameTechnic: 'Ремонт мониторов'
  },
  {
    nameTechnic: 'Ремонт ноутбуков'
  },
  {
    nameTechnic: 'Ремонт ноутбуков'
  },
  {
    nameTechnic: 'Ремонт ноутбуков'
  },
  {
    nameTechnic: 'Ремонт ноутбуков'
  },
  {
    nameTechnic: 'Ремонт ноутбуков'
  },
  {
    nameTechnic: 'Ремонт ноутбуков'
  }
]

function createCardTechnic(name){
  for(let i = 0; i < name.length; i++){

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    repairedDevicesContainer[1].appendChild(slide);

    const slideItem = document.createElement('a');
    slideItem.classList.add('repaired-devices__item', 'repaired-technic');
    slide.appendChild(slideItem);

    const nameTechnic = document.createElement('p');
    nameTechnic.textContent = name[i].nameTechnic;
    slideItem.appendChild(nameTechnic);
   
    const btn = document.createElement('button');
    btn.classList.add('icon-button');
    slideItem.appendChild(btn)
  }
}

createCardTechnic(repairedTechnic)

function btnReadMore(){
  const btnRead = document.querySelector('.btn-functional__text1');
  const imgBtnRead = document.querySelector('.btn-functional__arrow1');
  const sectionAbout = document.querySelector('.main__section-about');
    btnRead.addEventListener('click', ()=>{
      if(btnRead.innerHTML === 'Читать далее'){
        btnRead.textContent = 'Cкрыть';
        imgBtnRead.style.transform = 'rotate(180deg)';
        sectionAbout.style.maxHeight = '100%';
      } else{
        btnRead.textContent = 'Читать далее';
        imgBtnRead.style.transform = 'rotate(0deg)';
        sectionAbout.style.maxHeight = '160px'
      }
    })
}

btnReadMore();

function btnShowMore(){
  const btnRepaired = document.querySelectorAll('.btn-functional__text2');
  const imgBtnRepaired = document.querySelectorAll('.btn-functional__arrow2');
  const swiperRepaired = document.querySelectorAll('.repaired-devices');
  for(let i = 0; i < btnRepaired.length; i++){
    btnRepaired[i].addEventListener('click', ()=>{
      if(btnRepaired[i].innerHTML === 'Показать все'){
        btnRepaired[i].textContent = 'Cкрыть';
        imgBtnRepaired[i].style.transform = 'rotate(180deg)';
        swiperRepaired[i].style.maxHeight = '100%';
      } else{
        btnRepaired[i].textContent = 'Показать все';
        imgBtnRepaired[i].style.transform = 'rotate(0deg)';
        swiperRepaired[i].style.maxHeight = '160px'
      }

    })
  }

}



btnShowMore();

function styleBody(toggle){
  if(toggle){
    blackout.classList.add('block-blackout--visible');
    bodyScroll.classList.add('body--scroll-ban');
  } else {
    blackout.classList.remove('block-blackout--visible');
    bodyScroll.classList.remove('body--scroll-ban');
  }
}



function keyExit(){
    document.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27 && menuCall.classList.contains('order-a-call--open') ||
     evt.keyCode === 27 && burgerMenu.classList.contains('burger-nav--open') ||
      evt.keyCode === 27 && feedbackMenu.classList.contains('feedback--open')){
      menuCall.classList.remove('order-a-call--open');
      burgerMenu.classList.remove('burger-nav--open');
      feedbackMenu.classList.remove('feedback--open');
      styleBody(false)
    }
  })
}

keyExit()

document.addEventListener('click', function(evt){
  if(evt.target.classList.contains('block-blackout--visible')){
    burgerMenu.classList.remove('burger-nav--open');
    menuCall.classList.remove('order-a-call--open');
    feedbackMenu.classList.remove('feedback--open');
    styleBody(false)
  }
})

function menuBurger(){
  const btnBurger = document.querySelector('.icon-button--burger');
  const btnClose = burgerMenu.querySelector('.icon-button--close');

  btnBurger.addEventListener('click', function(){
    burgerMenu.classList.add('burger-nav--open');
    styleBody(true)
  })

  btnClose.addEventListener('click', function(){
    burgerMenu.classList.remove('burger-nav--open');
    styleBody(false)
  })
  
}

menuBurger();

function menuCallOpen(){
  const btnCall = document.querySelectorAll('.icon-button--tel');
  const btnClose = menuCall.querySelector('.icon-button--close');

  for(let i = 0; i < btnCall.length; i++){
    btnCall[i].addEventListener('click', function(){
      menuCall.classList.add('order-a-call--open');
      styleBody(true)
      burgerMenu.classList.remove('burger-nav--open');
      feedbackMenu.classList.remove('feedback--open');
    });
  }

  btnClose.addEventListener('click', function(){
    menuCall.classList.remove('order-a-call--open');
    
    styleBody(false)
  });

}

menuCallOpen()

function openFeedbackMenu(){
  const messageBtn = document.querySelectorAll('.icon-button--message');
  const btnClose = feedbackMenu.querySelector('.icon-button--close');
  
  for(let i = 0; i < messageBtn.length; i++){
    messageBtn[i].addEventListener('click', function(){
      feedbackMenu.classList.add('feedback--open');
      burgerMenu.classList.remove('burger-nav--open');
      menuCall.classList.remove('order-a-call--open');
      
      styleBody(true)
    })
  }

  btnClose.addEventListener('click', function(){
    feedbackMenu.classList.remove('feedback--open');
    styleBody(false)
  })
}

openFeedbackMenu()