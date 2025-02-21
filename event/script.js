document.getElementById("searchInput").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();
    let cards = document.querySelectorAll("#eventList .event-card");

    cards.forEach(card => {
        let title = card.querySelector("h5").innerText.toLowerCase();
        let description = card.querySelector(".short-desc").innerText.toLowerCase();

        if (title.includes(keyword) || description.includes(keyword)) {
            card.style.display = "block"; // Tampilkan kartu event
        } else {
            card.style.display = "none"; // Sembunyikan kartu event
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvEzh0Ps5yeM9uGO5vuubyRlI2ZQQXbBqIQ-r6pwWopnu3XkI5ajEvrK13cmLCa2UlfyJ4xrWMQDKs/pub?gid=1636637928&single=true&output=csv";
    

    // https://docs.google.com/spreadsheets/d/e/2PACX-1vSvEzh0Ps5yeM9uGO5vuubyRlI2ZQQXbBqIQ-r6pwWopnu3XkI5ajEvrK13cmLCa2UlfyJ4xrWMQDKs/pub?output=csv


    const eventList = document.getElementById("eventList");
    const searchInput = document.getElementById("searchInput");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // fetch(csvUrl)
    //     .then(response => response.text())
    //     .then(data => {
    //         let events = parseCSV(data);
    //         processEvents(events);
    //     });


    fetch(csvUrl)
        .then(response => response.text())
        .then(data => {
            let events = parseCSV(data);
            let { upcoming, ongoing, past } = processEvents(events);
        
            displayEvents(ongoing.slice(0,3), "<div style='background-color:darkgreen;color:white;padding:10px;font-weight:500;'>&nbsp;Event yang Sedang Berlangsung</div>");
            displayEvents(upcoming.slice(0, 9), "<div style='background-color:brown;color:white;padding:10px;font-weight:500;'>&nbsp;Event yang Akan Datang</div>");
            displayEvents(past.slice(0, 3), "<div style='background-color:gray;color:white;padding:10px;font-weight:500;'>&nbsp;Event yang Telah Selesai</div>");
        });
        

    function parseCSV(data) {
        let rows = data.split("\n").slice(1);
        return rows.map(row => {
            let cols = row.split(",");
            return {
                namaevent: cols[3],
                deskripsi: cols[4],
                waktuevent: cols[2]
            };
        }).filter(event => event.waktuevent);
    }

    function processEvents(events) {
        let now = new Date();
        let todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Awal hari ini
        let todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1); // Awal besok

        let upcoming = [];
        let ongoing = [];
        let past = [];

        events.forEach(event => {
            let eventDate = parseDate(event.waktuevent);
    
            if (eventDate >= todayStart && eventDate < todayEnd) {
                ongoing.push(event); // Event berlangsung hari ini
                
            } else if (eventDate > now) {
                upcoming.push(event); // Event akan datang
            } else {
                past.push(event); // Event telah berlalu
            }
        });
    

       // Urutkan event
    upcoming.sort((a, b) => parseDate(a.waktuevent) - parseDate(b.waktuevent));
    past.sort((a, b) => parseDate(b.waktuevent) - parseDate(a.waktuevent));

        return { upcoming, ongoing, past };
      

    }

    function parseDate(dateStr) {
        let parts = dateStr.split(/[\s/:]+/); // Pisahkan berdasarkan spasi, garis miring, atau titik dua
    
        if (parts.length < 3) return null; // Pastikan minimal ada tiga bagian (DD/MM/YYYY)
    
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10) - 1; // Bulan dalam JS dimulai dari 0
        let year = parseInt(parts[2], 10);
        let hours = parseInt(parts[3] || "00", 10);
        let minutes = parseInt(parts[4] || "00", 10);
        let seconds = parseInt(parts[5] || "00", 10);
    
        let parsedDate = new Date(year, month, day, hours, minutes, seconds);
    
        console.log(`Parsing date: ${dateStr} ->`, parsedDate); // Debugging
    
        return parsedDate;
    }
    
    
    

    function displayEvents(events, title) {
        let section = document.createElement("div");
        section.innerHTML = `<h3 class="mt-4">${title}</h3><div class="row"></div>`;
        let row = section.querySelector(".row");
    
        events.forEach((event, index) => {
            let eventDate = parseDate(event.waktuevent);
            let countdownId = `countdown-${event.waktuevent.replace(/[\s/:]/g, "")}-${index}`;
            let shortDesc = event.deskripsi.length > 25 ? event.deskripsi.substring(0, 25) + "..." : event.deskripsi;
    
            let card = document.createElement("div");
            card.className = "col-md-4 mb-3";
            card.innerHTML = `
                <div class="bard p-3 shadow event-card" style="cursor:pointer;" data-index="${index}">
                    <h5>${event.namaevent}</h5>
                    <p class="short-desc">${shortDesc}</p>
                    <small>Waktu: ${event.waktuevent}</small>
                    <p id="${countdownId}" class="countdown mt-2 fw-bold text-danger"></p>

                </div>
            `;
    
            row.appendChild(card);
            
                setTimeout(() => {
                    startCountdown(eventDate, countdownId);
                }, 100);
                

    
            // Tambahkan event listener agar modal muncul saat card diklik
            card.addEventListener("click", () => showEventDetails(event));
        });
    
        // startCountdown(eventDate, countdownId);
        eventList.appendChild(section);
    }
    
    

    let countdownIntervals = {}; // Simpan interval berdasarkan ID

    function startCountdown(eventDate, countdownId) {
        let countdownElem = document.getElementById(countdownId);
        if (!countdownElem) {
            console.warn("⚠️ Element countdown tidak ditemukan:", countdownId);
            return;
        }
    
        console.log(`⏳ Mencoba countdown untuk: ${countdownId}`);
        console.log("Event Date:", eventDate);
        console.log("Now:", new Date());
    
        let updateCountdown = () => {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Reset waktu ke 00:00:00
            let eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()); // Reset waktu ke 00:00:00
            let diff = eventDate - now;
            
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
            if (eventDay.getTime() === today.getTime()) { 
                // Jika tanggal event sama dengan tanggal hari ini (abaikan jam)
                countdownElem.innerHTML = `<span class="text-info">🎉 Event Berlangsung 🎉</span>`;
                showFireworks();
            } 
            else if (diff > 0) {
                // Countdown menuju event
                countdownElem.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
            } 
            else {
                // Event sudah selesai
                clearInterval(countdownIntervals[countdownId]);
                let hari = Math.abs(days);
                countdownElem.innerHTML = `<span class="text-secondary">Event selesai! ${hari} hari yang lalu</span>`;
            }
        };
        
         
        // Jalankan sekali sebelum interval agar langsung muncul
        updateCountdown();
    
        // Set interval untuk update setiap detik
        countdownIntervals[countdownId] = setInterval(updateCountdown, 1000);
    }
    
    function showFireworks() {
        let firework = document.createElement("div");
        firework.className = "firework";
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 100000);
    }

    function showEventDetails(event) {
        document.getElementById("modalTitle").innerText = event.namaevent;
        document.getElementById("modalDescription").innerText = event.deskripsi;
        document.getElementById("modalTime").innerText = `Waktu: ${event.waktuevent}`;
        new bootstrap.Modal(document.getElementById("eventModal")).show();
    }

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", darkModeToggle.checked);
    });

    searchInput.addEventListener("input", function () {
        let keyword = searchInput.value.toLowerCase();
        let cards = eventList.getElementsByClassName("card");
        for (let card of cards) {
            let title = card.getElementsByTagName("h5")[0].innerText.toLowerCase();
            card.style.display = title.includes(keyword) ? "" : "none";
        }
    });
});

class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = Math.random() * 3 + 2;
        this.vx = Math.random() * 4 - 2;
        this.vy = Math.random() * 4 - 2;
        this.alpha = 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.02;
    }

    draw(ctx) {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
const canvas = document.getElementById("fireworksCanvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let fireworks = [];

function createFirework() {
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        fireworks.push(new Firework(x, y, color));
    }
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw(ctx);
        if (firework.alpha <= 0) {
            fireworks.splice(index, 1);
        }
    });
    requestAnimationFrame(animateFireworks);
}