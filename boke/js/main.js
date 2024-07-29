function toggleClass(selector, className) {
    var elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle(className);
    });
}

function pop(imageURL) {
    var tcMainElement = document.querySelector(".tc-img");
    if (imageURL) {
        tcMainElement.src = imageURL;
    }
    toggleClass(".tc-main", "active");
    toggleClass(".tc", "active");
}

var tc = document.getElementsByClassName('tc');
var tc_main = document.getElementsByClassName('tc-main');
tc[0].addEventListener('click', function (event) {
    pop();
});
tc_main[0].addEventListener('click', function (event) {
    event.stopPropagation();
});


document.getElementById("more").addEventListener("click", function () {

    toggleClass(".nav_home", "active");

});



document.getElementsByClassName("nav_home")[0].addEventListener("click", function () {
    toggleClass(".nav_home", "active");

});
document.getElementsByClassName('nav_home_container')[0].addEventListener('click', function (event) {
    event.stopPropagation();
});



let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const header_container = document.querySelector('.header_container');
    const header = document.querySelector('.header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header_container.style.top = '-100%';
        header.classList.remove("active");
    } else {
        header_container.style.top = '0';
        header.classList.add("active");
    }

    lastScrollTop = scrollTop;
    if (scrollTop < 20) {
        header_container.style.top = '0';
        document.querySelector(".header").classList.remove("active");
    }
});





document.addEventListener('DOMContentLoaded', function () {
    setTimeout(fadeout, 500);

});

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';

    document.querySelectorAll('.fadein').forEach(function (element) {
        element.style.transform="translateY(0)";
        element.style.opacity = '1';    
    });

    document.querySelectorAll('.fadein1').forEach(function (element) {
        element.style.transform="translateY(0)";
        element.style.opacity = '1';    
    });


}



