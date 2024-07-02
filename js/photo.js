document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');
  const galleryItems = document.querySelectorAll('.gallery-item');
  let lastScrollTop = 0;

  // 初始显示图片
  galleryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.classList.add('fade-in');
  });

  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // 向下滚动
      navbar.classList.add('hidden');
      navbar.classList.remove('visible');
    } else {
      // 向上滚动
      navbar.classList.add('visible');
      navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});
