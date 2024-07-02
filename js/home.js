document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();

        const startDate = new Date(2002, 12, 11); // 开始日期是2002年12月11日
        const diff = now - startDate;
        const years = now.getFullYear() - startDate.getFullYear();
        const months = now.getMonth() - startDate.getMonth();
        const days = now.getDate() - startDate.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;

        // 春节倒计时计算
        const springFestival = new Date(now.getFullYear() + 1, 1, 10); // 假设下一次春节是2月10日
        const springDiff = springFestival - now;
        const diffDays = Math.floor(springDiff / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((springDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((springDiff % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((springDiff % (1000 * 60)) / 1000);

        document.getElementById("spring-festival").textContent = `${diffDays}天${diffHours}时${diffMinutes}分${diffSeconds}秒`;
    }

    setInterval(updateTime, 1000);
    updateTime();
});
