
const navBar = document.querySelector("nav");
const linksList = document.querySelector(".links");
const navButtons = document.querySelectorAll(".links a");
const techElements = document.querySelectorAll(".tech-element");
const techs = document.querySelector(".techs");
const valueDisplays = document.querySelectorAll(".tech");
const projects = document.querySelectorAll(".project");
const companies = document.querySelectorAll(".companies a");
const experienceDetails = document.querySelectorAll(".experience-details");
const phoneNumber=document.querySelector(".phone-number")
const phoneNumberBtn=document.querySelector(".phone-number button")
const mailAddress=document.querySelector(".mail-address")
const mailAddressBtn=document.querySelector(".mail-address button")

//------------- NAVIGATION BUTTON---------------
const btnNav = document.querySelector(".btn-nav");
const btnOff = document.querySelector(".icon-nav[name=close-outline]");
const btnOn = document.querySelector(".icon-nav[name=menu-outline]");
btnNav.addEventListener("click", () => {
  navBar.classList.toggle("open-nav");
});
document.addEventListener("click", function (e) {
  let openedList = document.querySelector(".open-nav .links");
  if (
    openedList &&
    !openedList.contains(e.target) &&
    !navBar.contains(e.target) &&
    navBar.classList.contains("open-nav")
  ) {
        navBar.classList.remove("open-nav");
  }
});

//--------SCROLL--------------
const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
  element.classList.remove("x");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
  };
const handleScrollAnimation = () => {
  techElements.forEach((el) => {
    if (elementInView(techs)) {
      displayScrollElement(el);
      if (valueDisplays[0].textContent == "0") increasePercentage();
    } else {
      hideScrollElement(el);
    }
  });
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
const increasePercentage = () => {
  let interval = 2500;
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      if (startValue == endValue) return;
      startValue += 1;
      valueDisplay.textContent = startValue;
      valueDisplay.insertAdjacentHTML("beforeend", "%");
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
};
//------SWITCH COMPANIES----------- 
companies.forEach((company) =>
  company.addEventListener("click", (e) => {
    e.preventDefault();
    experienceDetails.forEach((ex) => (ex.style.display = "none"));
    document.querySelector(`.${company.id}`).style.display = "block";
  })
);
//---------SHOW PHONE/EMAIL---------
phoneNumberBtn.addEventListener("click", ()=>{
  phoneNumber.innerHTML='<a href="tel:0040723298467">OO4O.723.298.467</a>'
})

mailAddressBtn.addEventListener("click", ()=>{
  mailAddress.innerHTML='<a href="mailto:cosmin.tudosie81@yahoo.ro">cosmin.tudosie81@yahoo.ro</a>'
})