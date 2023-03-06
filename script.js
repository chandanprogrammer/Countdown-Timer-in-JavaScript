const endDate = "8 March 2025 0:00 AM";
document.getElementById('end-date').innerHTML = endDate;
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; // Difference between end and now date in seconds

    days.innerHTML = Math.floor(diff / (60 * 60 * 24));
    hours.innerHTML = Math.floor((diff / (60 * 60)) % 24);
    minutes.innerHTML = Math.floor((diff / (60)) % (60));
    seconds.innerHTML = Math.floor(diff % 60);
}

setInterval(clock, 1000);