let listElements = document.querySelectorAll('.main');
let sidebarWrap = document.querySelector('.sidebar-wrap');
listElements.forEach(listItem => {
  listItem.addEventListener('click', () => {
    listElements.forEach(el => {
      if (el !== listItem) {
        el.classList.remove('Active');
        el.nextElementSibling.style.maxHeight = '0';
        let rotateImg = el.querySelector('.rotate');
        rotateImg.classList.remove('rotate-180');
      }
    });
    listItem.classList.toggle('Active');
    let submenu = listItem.nextElementSibling;
    let submenuHeight = submenu.scrollHeight + 'px';
    if (submenu.style.maxHeight === submenuHeight) {
      submenu.style.maxHeight = '0';
      let rotateImg = listItem.querySelector('.rotate');
      rotateImg.classList.remove('rotate-180');
      sidebarWrap.style.maxHeight = '0';
    } else {
      submenu.style.maxHeight = submenuHeight;
      let rotateImg = listItem.querySelector('.rotate');
      rotateImg.classList.add('rotate-180');
    }
  });
});
var form = document.getElementById("form");
form.addEventListener("submit", validateForm);
function validateForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var mobileNumber = document.getElementById("tel");
  var originalValue = mobileNumber.value;
  mobileNumber.value = mobileNumber.value.replace(/[^\d]/g, '');
  if (name.length < 3) {
    alert("Name field is required!");
    return;
  }
  if (originalValue !== mobileNumber.value) {
    alert("Only numerical numbers are allowed!");
  }
  if (mobileNumber.value.length > 10) {
    alert("Mobile number should be 10 digits only!");
    mobileNumber.value = mobileNumber.value.slice(0, 10);
  }
  if (mobileNumber.value.length < 10) {
    alert("Mobile number should be 10 digits only!");
    mobileNumber.value = mobileNumber.value.slice(0, 10);
  }
  if (email.length < 8) {
    alert("Invalid email address!");
    return;
  }
  form.submit();
}
let valueDisplays = document.querySelectorAll('.counter');
let duration = 2;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  let increment = Math.ceil(endValue / (duration / 5));
  let counterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: valueDisplay,
      start: 'top bottom-=100px',
      ease: 'expo',
      onEnter: () => {
        let counter = setInterval(function () {
          startValue += increment;
          if (startValue >= endValue) {
            clearInterval(counter);
            startValue = endValue;
          }
          valueDisplay.textContent = startValue;
        }, 10);
      },
      onLeaveBack: () => {
        startValue = 0;
        valueDisplay.textContent = startValue;
      },
      repeatRefresh: true,
      toggleActions: "restart none restart reset",
    }
  });
  counterTimeline.to(valueDisplay, {
    duration: duration, onUpdate: () => {
      valueDisplay.textContent = Math.round(counterTimeline.progress() * endValue);
    }
  });
});
const faq = document.querySelectorAll('.faq');
faq.forEach((item, index) => {
  let question = item.querySelector('.question');
  question.addEventListener("click", () => {
    item.classList.toggle("open");
    let answer = item.querySelector('.answer');
    if (item.classList.contains('open')) {
      answer.style.height = `${answer.scrollHeight}px`;
      item.querySelector('i').classList.add('rotate-180');
    } else {
      answer.style.height = "0px";
      item.querySelector('i').classList.remove('rotate-180');
    }
    removeOpen(index);
    console.log(answer)
  })
});
function removeOpen(index1) {
  faq.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open');
      let des = item2.querySelector('.answer');
      des.style.height = '0px';
      item2.querySelector('i').classList.remove('rotate-180');
    }
    console.log(index1)
  })
}
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const toggle = document.querySelector('.navBtn');
const cross = document.querySelector('.mob-cross');
const sidebar = document.querySelector('.Sidebar');
const mobBlur = document.querySelector('.mob-blur');
toggle.addEventListener('click', () => {
  sidebar.classList.toggle('close');
  mobBlur.style.display = "block";
  listElements.forEach(el => {
    el.classList.remove('Active');
    el.nextElementSibling.style.maxHeight = '0';
    let rotateImg = el.querySelector('.rotate');
    rotateImg.classList.remove('rotate-180');
  });
});
cross.addEventListener('click', () => {
  sidebar.classList.add('close');
  mobBlur.style.display = "none";
  listElements.forEach(el => {
    el.classList.remove('Active');
    el.nextElementSibling.style.maxHeight = '0';
    let rotateImg = el.querySelector('.rotate');
    rotateImg.classList.remove('rotate-180');
  });
});
let tl = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 2 }
});
tl.to
  ('.animation1',
    {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      duration: 1.2
    })
tl.to
  ('.animation2',
    {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      opacity: 1,
      y: 0,
      delay: -.2
    },
    "-=1.25"
  );
gsap.fromTo('.Sidebar', {
  x: '-150%',
  opacity: 0,
}, {
  duration: 1.5,
  x: '0',
  ease: 'power2.out',
  opacity: 1,
  delay: .5,
});
gsap.fromTo('.main', {
  x: '-100%',
  opacity: 0,
}, {
  duration: 1,
  x: '0',
  ease: 'power2.out',
  opacity: 1,
  stagger: .07,
  delay: .5,
});
gsap.fromTo('.sidebar-ani1', {
  x: '-100%',
  opacity: 0,
}, {
  duration: 1,
  x: '0',
  ease: 'power2.out',
  opacity: 1,
  stagger: .1,
  delay: .8,
});
gsap.fromTo('.Header-Links', {
  opacity: 0,
}, {
  duration: 1.5,
  delay: 1,
  opacity: 1,
});
gsap.fromTo('.arrow-up-main', {
  opacity: 0,
}, {
  duration: 1.5,
  delay: .5,
  opacity: 1,
});
gsap.fromTo('.whatsapp-main', {
  opacity: 0,
}, {
  duration: 1.5,
  delay: .5,
  opacity: 1,
});
gsap.fromTo('.Main', {
  opacity: 0,
}, {
  duration: 1.5,
  delay: .5,
  opacity: 1,
});
