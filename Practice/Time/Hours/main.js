// const times = new Date()

// const seconds = times.getSeconds();
// const displayGiay = document.getElementById('Giay');
// displayGiay.textContent = `${String(seconds)}`;

// const minutes = times.getMinutes();
// const displayPhut = document.getElementById('Phut');
// displayPhut.textContent = `${String(minutes)}`;

// const Hours = times.getHours();
// const displayGio = document.getElementById('Gio');
// displayGio.textContent = `${String(Hours)}`;

function updateTime() {
    const times = new Date();

    const seconds = times.getSeconds();
    const minutes = times.getMinutes();
    const hours = times.getHours();

    document.getElementById('Giay').textContent = String(seconds).padStart(2, '0');
    document.getElementById('Phut').textContent = String(minutes).padStart(2, '0');
    document.getElementById('Gio').textContent = String(hours).padStart(2, '0');
}

// Gọi lần đầu khi trang load
updateTime();

// Cập nhật mỗi giây
setInterval(updateTime, 1000);
