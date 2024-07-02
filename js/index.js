document.addEventListener('DOMContentLoaded', function() {
    // 获取页面元素
    const bgImage = document.getElementById('bgImage');
    const hourElement = document.querySelector('.hour');
    const minuteElement = document.querySelector('.minute');
    const periodElement = document.querySelector('.period');
    const lunarDateElement = document.querySelector('.lunar-date');
    const solarDateElement = document.querySelector('.solar-date');
    
    // 背景图片数组，根据需要修改路径
    const backgroundImages = [
        '../images/音乐背景.jpg',
        '../images/音乐背景.jpg',
        '../images/音乐背景.jpg'
        // 添加更多背景图片路径
    ];

    // 随机选择背景图片
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];
    bgImage.src = selectedImage;
    bgImage.classList.add('loaded'); // 添加类以触发渐变效果

    // 更新时间
    function updateTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // 处理 12 小时制

        hourElement.textContent = hours;
        minuteElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        periodElement.textContent = period;

        // 更新农历日期信息
        const lunar = Lunar.toLunarDate(now.getFullYear(), now.getMonth() + 1, now.getDate());
        const lunarYear = lunar.getYearInGanZhi();
        const lunarMonth = lunar.getMonthInChinese();
        const lunarDay = lunar.getDayInChinese();
        lunarDateElement.textContent = ${lunarYear}年 ${lunarMonth}${lunarDay};

        // 更新阳历日期信息
        solarDateElement.textContent = (now.getMonth() + 1) + '月' + now.getDate() + '日 周' + ['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
    }

    updateTime(); // 初次加载页面时更新时间

    // 每秒更新时间
    setInterval(updateTime, 1000);

    // 头像悬停效果
    const avatar = document.querySelector('.avatar img');
    avatar.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(360deg)';
    });
    avatar.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg)';
    });
});