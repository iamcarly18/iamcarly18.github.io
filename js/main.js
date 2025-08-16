// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 初始化画廊
const initSwiper = () => {
    new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initSwiper();
});

// 平滑滚动函数
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // 减去导航栏高度
            behavior: 'smooth'
        });
    }
}

// 为所有导航链接添加点击事件
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认跳转
        const target = this.getAttribute('href');
        smoothScrollTo(target);
        
        // 可选：更新URL（不刷新页面）
        history.pushState(null, null, target);
    });
});