import "./scss/style.scss";

const body = document.querySelector("body");
const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
//window.matchMedia 是 JavaScript 中一个用于检测和响应媒体查询的 API
//使用 window.matchMedia() 方法创建一个媒体查询对象，返回一个 MediaQueryList 对象，对象包含两个主要属性: media 和 matches
//media 是媒体查询字符串本身，如下面双引号包住的部分；matches是一个布尔值
const media = window.matchMedia("(width < 69.375em)");
const navContent = document.querySelector('.nav__content')
const navOverlay = document.querySelector('.nav__overlay')

function openMobileMenu() {
    console.log("open menu");
    btnOpen.setAttribute("aria-expanded", "true");
    //Menu 打开的时候页面不可以滚动
    body.classList.add("noscroll")
}
function closeMobileMenu() {
    console.log("close menu");
    btnOpen.setAttribute("aria-expanded", "false");
    body.classList.remove("noscroll")

}

function setupNav(e) {
    if (e.matches) {
        // is mobile
        console.log("is mobile");


        setTimeout(() => {
            navContent.style.display = "block";
            navOverlay.style.display = "block";
        }, 500)
    } else {
        //is desktop
        console.log("is desktop");
        navContent.style.display = ""

    }
}
setupNav(media)
//回调函数
btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);
media.addEventListener("change", function (e) {
    // console.log('window.matchMedia change = ' + e.matches)
    setupNav(e);
});
