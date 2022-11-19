const logo = document.querySelector(".header__logo");
const headerNav = document.querySelector(".header__nav");
const newsArticle = document.querySelectorAll('.news__item-article');
const sidebarNewsArticle = document.querySelectorAll(".news-sidebar__article");
const lang = document.querySelector('.header__lang');
const newsPosts = document.querySelectorAll('.news__item');
const headerNavLinks = document.querySelectorAll('.header__nav-link');

const addClassWhenScroll = [
    logo,
    headerNav,
]

window.addEventListener("scroll", function() {
    let iScrolled = window.scrollY;

    if(iScrolled >= 35) {

                addClassWhenScroll.forEach(item => {
            item.classList.add('active');
        })

    }
    else {
        addClassWhenScroll.forEach(item => {
            item.classList.remove('active');
        })
    }
}) 

newsPosts[0].classList.add('news__item_fluid');




newsArticle.forEach(item => {
    if(item.innerHTML.length - 70 > 55)
    {
        let str = item.innerHTML.substring(0, 55 + 70);
        str += "...";
        item.innerHTML = str;
    }
})

sidebarNewsArticle.forEach(item => {
    if(item.innerHTML.length - 70 > 96)
    {
        let str = item.innerHTML.substring(0, 96 + 70);
        str += "...";
        item.innerHTML = str;
    }
})

lang.addEventListener('click', function(){
    lang.classList.toggle('active');
})