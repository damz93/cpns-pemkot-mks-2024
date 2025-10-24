document.addEventListener("DOMContentLoaded", function () {
    // === 1. UCAPAN ULANG TAHUN (HARUS DI ATAS SEMUA) ===
    const ucapanUlangTahun = [
        "Selamat ulang tahun Semoga setiap langkahmu menjadi pijakan menuju masa depan yang penuh cahaya dan prestasi.",
        "Hari ini bukan sekadar bertambah usia, tapi bertambah kesempatan untuk tumbuh, belajar, dan menginspirasi.",
        "Selamat ulang tahun Semoga energi mudamu menjadi suluh yang menerangi jalanmu dan orang-orang di sekitarmu.",
        "Semoga usia muda ini menjadi ruang untuk menanam karya, yang kelak tumbuh menjadi warisan kebaikan.",
        "Ulang tahun adalah momentum: bukan sekadar menghitung tahun, tapi menghitung nilai dari setiap pengalaman yang kau jalani.",
        "Selamat ulang tahun Semoga keberanianmu melangkah sejalan dengan kebeningan hatimu bermimpi.",
        "Hari ini adalah awal baru, semoga hidupmu senantiasa dipenuhi semangat juang dan harapan yang tak pernah padam.",
        "Selamat ulang tahun Semoga masa mudamu menjadi kisah penuh prestasi, bukan sekadar cerita yang berlalu.",
        "Usia muda adalah modal, semoga engkau kelola dengan bijak, untuk melahirkan masa depan yang gemilang.",
        "Selamat ulang tahun Semoga semangatmu hari ini menjadi inspirasi bagi banyak orang.",
        "Hari ini adalah momentum untuk bersyukur atas potensi yang kau miliki dan kesempatan yang menantimu.",
        "Selamat ulang tahun Semoga engkau selalu kreatif, berani mencoba, dan terbuka pada pengalaman baru.",
        "Usia muda adalah hadiah, semoga engkau menapakinya dengan bijak dan penuh keberanian.",
        "Selamat ulang tahun Semoga setiap rintangan menjadi pelajaran yang memperkuat langkahmu.",
        "Hari ini adalah awal babak baru, semoga engkau mampu memanfaatkan setiap kesempatan dengan bijak.",
        "Selamat ulang tahun Semoga impianmu semakin jelas dan langkahmu mantap menuju masa depan.",
        "Usia muda adalah ladang untuk berkarya, semoga engkau menanam kebaikan di setiap tindakan.",
        "Selamat ulang tahun Semoga setiap harimu menjadi langkah kecil menuju pencapaian besar.",
        "Hari ini adalah pengingat, bahwa waktu adalah teman, gunakanlah sebaik mungkin.",
        "Selamat ulang tahun Semoga perjalanan hidupmu selalu diberkati, penuh inspirasi dan energi positif.",
        "Semoga engkau selalu berani mengambil keputusan, meski penuh tantangan.",
        "Selamat ulang tahun Semoga engkau menjadi pribadi yang rendah hati, meski prestasi menanti.",
        "Hari ini adalah momentum untuk refleksi dan perencanaan masa depan.",
        "Selamat ulang tahun Semoga setiap pengalaman menjadi guru terbaikmu.",
        "Semoga engkau selalu menemukan cahaya di tengah gelap dan harapan di tengah rintangan.",
        "Selamat ulang tahun Semoga persahabatan dan cinta selalu mengisi hari-harimu.",
        "Hari ini bukan sekadar perayaan, tapi juga penghargaan atas perjalananmu sejauh ini.",
        "Selamat ulang tahun Semoga setiap momen menjadi pembelajaran berharga.",
        "Usia muda adalah energi, semoga energi itu selalu positif dan bermanfaat bagi sekelilingmu.",
        "Selamat ulang tahun Semoga langkahmu selalu mantap dan pikiranmu selalu jernih.",
        "Hari ini adalah hadiah, gunakanlah untuk merenung dan merencanakan masa depan.",
        "Selamat ulang tahun Semoga impianmu selalu selaras dengan tindakan nyata.",
        "Semoga semangatmu menular pada orang-orang di sekitarmu.",
        "Selamat ulang tahun Semoga keberanianmu menjadi inspirasi bagi generasi muda.",
        "Hari ini adalah waktu untuk bersyukur, dan bersiap menyambut tantangan baru.",
        "Selamat ulang tahun Semoga kreativitas dan kecerdasanmu selalu terasah.",
        "Usia muda adalah kesempatan untuk menjadi versi terbaik dari dirimu sendiri.",
        "Selamat ulang tahun Semoga engkau selalu diberi keberanian untuk bermimpi besar.",
        "Hari ini adalah awal dari babak baru, semoga langkahmu semakin mantap.",
        "Selamat ulang tahun Semoga setiap hari membawa pengalaman berharga.",
        "Semoga semangatmu untuk belajar dan berkarya tidak pernah pudar.",
        "Selamat ulang tahun Semoga engkau selalu menemukan kesempatan di setiap tantangan.",
        "Hari ini adalah waktu untuk mensyukuri semua hal baik yang telah datang.",
        "Selamat ulang tahun Semoga selalu diberkati dengan kebahagiaan dan cinta.",
        "Usia muda adalah ladang untuk menanam nilai-nilai kebaikan.",
        "Selamat ulang tahun Semoga perjalananmu selalu penuh berkah.",
        "Hari ini adalah kesempatan untuk menegaskan tujuan hidupmu.",
        "Selamat ulang tahun Semoga setiap langkahmu membawa manfaat bagi banyak orang.",
        "Semoga engkau selalu berani menghadapi ketidakpastian dan tetap optimis.",
        "Selamat ulang tahun Semoga hidupmu selalu penuh inspirasi.",
        "Hari ini adalah pengingat, bahwa engkau mampu menaklukkan rintangan dengan bijak.",
        "Selamat ulang tahun Semoga energi positif selalu menemanimu.",
        "Usia muda adalah permulaan, gunakanlah untuk mencetak sejarah yang indah.",        
    "Selamat ulang tahun. Semoga setiap langkahmu menjadi pijakan menuju masa depan yang penuh cahaya dan prestasi.",
    "Hari ini bukan sekadar bertambah usia, tapi bertambah kesempatan untuk tumbuh, belajar, dan menginspirasi.",
    "Selamat ulang tahun. Semoga energi mudamu menjadi suluh yang menerangi jalanmu dan orang-orang di sekitarmu.",
    "Semoga usia muda ini menjadi ruang untuk menanam karya, yang kelak tumbuh menjadi warisan kebaikan.",
    "Ulang tahun adalah momentum: bukan sekadar menghitung tahun, tapi menghitung nilai dari setiap pengalaman yang kau jalani.",
    "Selamat ulang tahun. Semoga keberanianmu melangkah sejalan dengan kebeningan hatimu bermimpi.",
    "Setiap tahun baru dalam hidup adalah undangan untuk menulis kisah yang lebih bermakna. Tulislah dengan hati yang jujur.",
    "Bertambah usia berarti bertambah tanggung jawab untuk menjadikan hidup lebih berguna bagi sesama.",
    "Selamat ulang tahun. Jadikan setiap hari sebagai ladang kebaikan yang kelak kau panen di masa depan.",
    "Hidup bukan tentang berapa lama kita hidup, tapi seberapa dalam kita memberi arti pada kehidupan.",
    "Selamat ulang tahun. Semoga langkah-langkahmu selalu berpijak pada nilai dan keberanian, bukan sekadar ambisi.",
    "Hari lahir adalah saat untuk bersyukur — bukan karena waktu yang bertambah, tapi karena kesempatan untuk terus berbuat baik.",
    "Semoga cahaya semangatmu tak pernah padam, meski dunia di sekitarmu berubah begitu cepat.",
    "Ulang tahun adalah waktu terbaik untuk berhenti sejenak, melihat ke belakang dengan syukur, dan menatap ke depan dengan harapan.",
    "Selamat ulang tahun. Jadikan semangat mudamu sebagai cahaya yang menuntunmu melintasi gelapnya tantangan.",
    "Di setiap pertambahan usia, semoga engkau tak hanya bertambah tua, tapi juga bertambah bijaksana.",
    "Selamat ulang tahun. Semoga keberhasilanmu kelak lahir dari ketulusan dan kerja kerasmu hari ini.",
    "Jangan hitung tahun yang telah lewat, hitunglah kebaikan yang sudah kau tanamkan sepanjang perjalanan hidupmu.",
    "Selamat ulang tahun. Jadikan mimpimu bukan sekadar harapan, tapi arah yang membimbing langkahmu setiap hari.",
    "Setiap tahun adalah kesempatan baru untuk memperbaiki diri dan memperluas kebaikan.",
    "Selamat ulang tahun. Semoga semesta merestui setiap niat baikmu, dan langkahmu selalu dalam bimbingan yang benar.",
    "Usia boleh bertambah, tapi semoga semangatmu tetap muda, penuh asa dan cinta pada kehidupan.",
    "Ulang tahun adalah pengingat bahwa waktu tak menunggu. Gunakan setiap detiknya untuk menebar manfaat.",
    "Selamat ulang tahun. Jadilah cahaya yang menuntun bukan hanya dirimu, tapi juga orang-orang yang berjalan bersamamu.",
    "Semoga setiap langkah kecilmu hari ini menjadi pondasi bagi karya besar di masa depan.",
    "Selamat ulang tahun. Tetaplah rendah hati dalam pencapaian, dan tetap tegar dalam ujian.",
    "Usia baru, semangat baru, dan harapan baru — semoga semuanya berjalin dalam kebaikan dan makna.",
    "Selamat ulang tahun. Semoga setiap impianmu tumbuh bersama ketekunan dan doa yang tak pernah padam.",
    "Hari ini adalah perayaan hidup. Rayakan dengan syukur, jalani dengan niat baik, dan teruslah melangkah dengan keyakinan.",
    "Selamat ulang tahun. Jadikan hidupmu sebagai kisah tentang keberanian, bukan tentang ketakutan.",
    "Di balik setiap lilin yang menyala, ada doa dan harapan yang tumbuh bersama waktu. Semoga semuanya berbuah indah.",
    "Selamat ulang tahun. Jadikan syukur sebagai bahasa pertama dalam setiap langkah hidupmu.",
    "Semoga perjalanan usiamu senantiasa disertai kebaikan yang berlipat, dan keberkahan yang tak pernah surut.",
    "Ulang tahun adalah saat untuk meneguhkan kembali arah hidupmu — agar langkahmu selalu menuju kebaikan.",
    "Selamat ulang tahun. Tetaplah menjadi pribadi yang membawa teduh di tengah panasnya kehidupan.",
    "Tak ada usia yang sia-sia bila dijalani dengan cinta dan ketulusan. Selamat ulang tahun.",
    "Hari ini adalah tanda bahwa hidup masih mempercayakan padamu satu hari lagi untuk berbuat baik.",
    "Selamat ulang tahun. Semoga keberkahan senantiasa menyertai setiap langkahmu, di mana pun engkau berada.",
    "Bertambah usia bukan berarti harus berhenti bermimpi. Justru saatnya bermimpi lebih tinggi dan bekerja lebih sungguh.",
    "Selamat ulang tahun. Jadikan setiap harapanmu sebagai alasan untuk terus melangkah dengan keyakinan.",
    "Usia baru bukan akhir dari perjalanan, tapi awal dari babak yang lebih bijaksana.",
    "Selamat ulang tahun. Semoga setiap doa yang kau panjatkan hari ini menjadi kenyataan yang indah di masa depan.",
    "Ulang tahun adalah waktu untuk berterima kasih pada masa lalu, dan berjanji untuk menjadi lebih baik di masa depan.",
    "Selamat ulang tahun. Jangan berhenti menjadi pribadi yang membawa semangat dan harapan bagi orang lain.",
    "Setiap detik hidupmu adalah kesempatan untuk menulis sejarah kebaikan. Gunakanlah dengan sebaik-baiknya.",
    "Selamat ulang tahun. Semoga langkahmu selalu terarah oleh cahaya nilai dan kejujuran.",
    "Tak perlu menjadi sempurna untuk berarti, cukup jadilah berguna bagi orang lain. Selamat ulang tahun.",
    "Selamat ulang tahun. Semoga hidupmu dipenuhi cinta, karya, dan makna yang abadi.",
    "Bertambah usia adalah anugerah, tapi memberi manfaat bagi sesama adalah pilihan. Pilihlah untuk bermakna.",
    "Selamat ulang tahun. Jadikan waktumu sebagai persembahan terbaik bagi kebaikan dan kemajuan.",
    "Usia boleh berganti, tapi semangat memberi tak boleh berhenti. Selamat ulang tahun.",
    "Selamat ulang tahun. Semoga hari-harimu dipenuhi keberanian untuk mencoba, dan kebijaksanaan untuk belajar dari setiap langkah.",
    "Jangan takut dengan waktu yang berlalu, sebab yang abadi bukan usia — melainkan amal dan cinta yang ditinggalkan.",
    "Selamat ulang tahun. Semoga kebahagiaanmu hari ini menjadi doa baik bagi banyak orang.",
    "Setiap ulang tahun adalah peringatan bahwa hidup adalah perjalanan menuju makna, bukan sekadar angka.",
    "Selamat ulang tahun. Jadilah pribadi yang menyalakan semangat, bukan yang memadamkan harapan.",
    "Ulang tahun adalah saat yang tepat untuk memulai kembali — dengan hati yang lebih lapang dan niat yang lebih tulus.",
    "Selamat ulang tahun. Semoga engkau tumbuh menjadi pribadi yang tangguh dalam prinsip, lembut dalam sikap, dan luas dalam kasih.",
    "Hidup bukan tentang seberapa cepat kita berlari, tapi seberapa bermakna kita melangkah. Selamat ulang tahun.",
    "Selamat ulang tahun. Semoga langkahmu diiringi keberanian untuk menjadi diri sendiri di tengah arus yang berubah.",
    "Ulang tahun adalah cermin: menatap ke belakang dengan syukur, dan ke depan dengan harapan.",
    "Selamat ulang tahun. Jadikan kesederhanaan sebagai kemewahan yang paling abadi dalam hidupmu.",
    "Usia baru adalah peluang untuk memperbaiki, memperkuat, dan memperluas makna hidupmu.",
    "Selamat ulang tahun. Semoga setiap langkahmu menjadi doa, dan setiap doamu menjadi cahaya bagi banyak jiwa.",
    "Tak ada usia yang sia-sia bila dijalani dengan cinta dan ketulusan. Selamat ulang tahun.",
    "Selamat ulang tahun. Jadikan setiap luka sebagai guru, dan setiap keberhasilan sebagai pengingat untuk tetap rendah hati.",
    "Hidup akan terus berjalan, tapi jadikan setiap ulang tahunmu titik untuk tumbuh lebih bijak dan lebih bermanfaat.",
    "Selamat ulang tahun. Semoga hidupmu menjadi kisah tentang kebaikan yang menular dan semangat yang tak pernah padam.",
    "Hari ini engkau tak hanya bertambah umur, tapi juga bertambah tanggung jawab untuk menjadikan dunia lebih baik.",
    "Selamat ulang tahun. Semoga setiap napasmu membawa berkah, dan setiap langkahmu membawa harapan.",
    "Jangan jadikan waktu sebagai pengingat bahwa kita menua, tapi sebagai saksi bahwa kita terus berkarya.",
    "Selamat ulang tahun. Semoga engkau terus belajar, terus tumbuh, dan terus memberi manfaat di mana pun berada.",
    "Usia hanyalah angka, tapi makna hidupmu adalah kisah yang kau tulis dengan tindakanmu sendiri. Selamat ulang tahun.",
    "Selamat ulang tahun. Tetaplah menjadi sumber inspirasi bagi siapa pun yang melihat perjalananmu.",
    "Bertambah usia berarti diberi kesempatan lagi oleh Tuhan untuk memperbaiki dan memperluas kebaikan. Gunakanlah dengan penuh syukur.",
    "Selamat ulang tahun. Jadikan rasa syukur sebagai lentera yang menuntun langkahmu dalam setiap perjalanan hidup.",
    "Hari ini adalah waktu yang indah untuk mengingat: hidup ini bukan tentang siapa yang paling cepat, tapi siapa yang paling tulus.",
    "Selamat ulang tahun. Semoga Tuhan menjaga hatimu tetap hangat, niatmu tetap lurus, dan langkahmu tetap teguh.",
    "Ulang tahun adalah tanda cinta Tuhan bahwa engkau masih dipercaya untuk menebar kebaikan di dunia ini.",
    "Selamat ulang tahun. Semoga hidupmu menjadi ladang amal yang tak pernah kering oleh waktu."
];


    function getRandomUcapan() {
        return ucapanUlangTahun[Math.floor(Math.random() * ucapanUlangTahun.length)];
    }

    // === 2. SETUP VARIABEL UTAMA ===
    const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvEzh0Ps5yeM9uGO5vuubyRlI2ZQQXbBqIQ-r6pwWopnu3XkI5ajEvrK13cmLCa2UlfyJ4xrWMQDKs/pub?gid=1636637928&single=true&output=csv";
    const eventList = document.getElementById("eventList");
    const searchInput = document.getElementById("searchInput");
    const birthdayBanner = document.getElementById("birthdayBanner");

    // Setup canvas kembang api
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let fireworks = [];
    let isFireworksActive = false;
    let fireworksInterval = null;

    // === 3. FUNGSI PARSING & PROSES ===
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

    function parseDate(dateStr) {
        let parts = dateStr.split(/[\s/:]+/);
        if (parts.length < 3) return null;
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10) - 1;
        let year = parseInt(parts[2], 10);
        let hours = parseInt(parts[3] || "00", 10);
        let minutes = parseInt(parts[4] || "00", 10);
        let seconds = parseInt(parts[5] || "00", 10);
        return new Date(year, month, day, hours, minutes, seconds);
    }

    function processEvents(events) {
        let now = new Date();
        let todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        let todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

        let upcoming = [], ongoing = [], past = [];

        events.forEach(event => {
            let eventDate = parseDate(event.waktuevent);
            if (eventDate >= todayStart && eventDate < todayEnd) {
                ongoing.push(event);
            } else if (eventDate > now) {
                upcoming.push(event);
            } else {
                past.push(event);
            }
        });

        upcoming.sort((a, b) => parseDate(a.waktuevent) - parseDate(b.waktuevent));
        past.sort((a, b) => parseDate(b.waktuevent) - parseDate(a.waktuevent));

        return { upcoming, ongoing, past };
    }

    // === 4. DISPLAY EVENTS (dengan share WA & border emas) ===
    function displayEvents(events, title) {
    let section = document.createElement("div");
    section.innerHTML = `<h3 class="mt-4">${title}</h3><div class="row"></div>`;
    let row = section.querySelector(".row");

    events.forEach((event, index) => {
        let eventDate = parseDate(event.waktuevent);
        let countdownId = `countdown-${event.waktuevent.replace(/[\s/:]/g, "")}-${index}`;
        let shortDesc = event.deskripsi.length > 25 ? event.deskripsi.substring(0, 25) + "..." : event.deskripsi;
       
        let isBirthday = event.namaevent.toLowerCase().includes("ulang tahun");

        // === PESAN SHARE KE WA + UCAPAN SPESIAL ===
        let shareText = `*[CPNS Makassar]*\n\n*${event.namaevent}*\n\n📅 ${formatTanggalIndo(event.waktuevent)}\n📝 ${event.deskripsi}`;

        if (isBirthday) {
            const ucapan = getRandomUcapan();
            shareText += `\n\n*Ucapan Spesial:\n"${ucapan}"`;
        }

        shareText += `\n\n🔗 ${window.location.href}`;
        let waLink = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

        let card = document.createElement("div");
        card.className = "col-md-4 mb-3";
        card.innerHTML = `
            <div class="bard p-3 shadow event-card position-relative" 
                 style="cursor:pointer; border-radius: 1rem; overflow: hidden; ${isBirthday ? 'border: 2px solid gold;' : ''}">
                <h5 class="mb-2">${event.namaevent}</h5>
                <p class="short-desc text-light small mb-1">${shortDesc}</p>
                <small class="text-light">Tanggal: ${formatTanggalIndo(event.waktuevent)}</small>
                <p id="${countdownId}" class="countdown mt-2 fw-bold text-danger" style="font-size:0.9rem"></p>
                <a href="${waLink}" target="_blank" class="position-absolute bottom-0 end-0 m-2" 
                   style="font-size: 1.4rem; color: #25D366;" 
                   onclick="event.stopPropagation();" title="Bagikan ke WhatsApp">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
        `;

        row.appendChild(card);

        setTimeout(() => startCountdown(eventDate, countdownId), 100);

        card.addEventListener("click", (e) => {
            if (!e.target.closest('a')) {
                showEventDetails(event, isBirthday);
            }
        });
    });

    eventList.appendChild(section);
}

    // === 5. MODAL DETAIL + UCAPAN ULANG TAHUN ===
    function showEventDetails(event, isBirthday = false) {
        document.getElementById("modalTitle").innerText = event.namaevent;
        document.getElementById("modalDescription").innerHTML = event.deskripsi;
        document.getElementById("modalTime").innerText = `Waktu: ${event.waktuevent}`;

        if (isBirthday) {
            const ucapan = getRandomUcapan();
            const ucapanElem = document.createElement("div");
            ucapanElem.className = "mt-3 p-3 bg-warning bg-opacity-25 rounded text-center";
            ucapanElem.innerHTML = `<strong> Ucapan Spesial:</strong><br><em>"${ucapan}"</em>`;
            document.querySelector(".modal-body").appendChild(ucapanElem);
        }

        const modal = new bootstrap.Modal(document.getElementById("eventModal"));
        modal.show();

        document.getElementById("eventModal").addEventListener("hidden.bs.modal", function clearUcapan() {
            const ucapanElem = document.querySelector(".modal-body > div.bg-warning");
            if (ucapanElem) ucapanElem.remove();
            this.removeEventListener("hidden.bs.modal", clearUcapan);
        });
    }

    // === 6. COUNTDOWN & FIREWORKS ===
    let countdownIntervals = {};

    function startCountdown(eventDate, countdownId) {
        let countdownElem = document.getElementById(countdownId);
        if (!countdownElem) return;

        let update = () => {
            let now = new Date();
            let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            let eventDay = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
            let diff = eventDate - now;

            if (eventDay.getTime() === today.getTime()) {
                countdownElem.innerHTML = `<span class="text-info"> Event Berlangsung </span>`;
                if (!isFireworksActive) startFireworks();
            } else if (diff > 0) {
                let days = Math.floor(diff / 86400000);
                let hours = Math.floor((diff % 86400000) / 3600000);
                let minutes = Math.floor((diff % 3600000) / 60000);
                let seconds = Math.floor((diff % 60000) / 1000);
                countdownElem.innerHTML = ` ${days}h ${hours}j ${minutes}m ${seconds}d `;
                stopFireworks();
            } else {
                clearInterval(countdownIntervals[countdownId]);
                let hari = Math.abs(Math.floor(diff / 86400000)) - 1;
                countdownElem.innerHTML = `<span class="text-secondary">Selesai ${hari} hari lalu</span>`;
                stopFireworks();
            }
        };

        update();
        countdownIntervals[countdownId] = setInterval(update, 1000);
    }

    function startFireworks() {
        if (isFireworksActive) return;
        isFireworksActive = true;
        canvas.style.display = "block";
        fireworksInterval = setInterval(createFirework, 800);
        animateFireworks();
    }

    function stopFireworks() {
        if (!isFireworksActive) return;
        isFireworksActive = false;
        clearInterval(fireworksInterval);
        fireworks = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = "none";
    }

    class Firework {
        constructor(x, y, color) {
            this.x = x; this.y = y; this.color = color;
            this.radius = Math.random() * 3 + 2;
            this.vx = Math.random() * 4 - 2;
            this.vy = Math.random() * 4 - 2;
            this.alpha = 1;
        }
        update() { this.x += this.vx; this.y += this.vy; this.alpha -= 0.02; }
        draw(ctx) {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function createFirework() {
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height * 0.7;
            let color = `hsl(${Math.random() * 360}, 100%, 60%)`;
            fireworks.push(new Firework(x, y, color));
        }
    }

    function formatTanggalIndo(dateStr) {
        const date = parseDate(dateStr);
        if (!date) return dateStr;

        const namaBulan = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const hari = date.getDate();
        const bulan = namaBulan[date.getMonth()];
        const tahun = date.getFullYear();

        return `${hari} ${bulan} ${tahun}`;
    }

    function animateFireworks() {
        if (!isFireworksActive) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fireworks = fireworks.filter((f, i) => {
            f.update();
            f.draw(ctx);
            return f.alpha > 0;
        });
        requestAnimationFrame(animateFireworks);
    }

    // === 7. CARI EVENT ===
    searchInput.addEventListener("input", function () {
        let keyword = this.value.toLowerCase();
        let cards = document.querySelectorAll("#eventList .event-card");

        cards.forEach(card => {
            let title = card.querySelector("h5").innerText.toLowerCase();
            let desc = card.querySelector(".short-desc").innerText.toLowerCase();
            card.style.display = (title.includes(keyword) || desc.includes(keyword)) ? "block" : "none";
        });
    });

    // === 8. FETCH DATA + BANNER ULANG TAHUN ===
    const today = new Date();
    const todayStr = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    fetch(csvUrl)
        .then(r => r.text())
        .then(data => {
            let events = parseCSV(data);

            // Cek ulang tahun hari ini
            let birthdayToday = events.find(e =>
                e.namaevent.toLowerCase().includes("ulang tahun") &&
                e.waktuevent.includes(todayStr)
            );

            if (birthdayToday && birthdayBanner) {
                const ucapan = getRandomUcapan();
                birthdayBanner.innerHTML = `
                    <div class="alert alert-warning py-2 px-3 rounded-pill d-inline-block shadow animate__animated animate__bounceIn">
                        <strong> HARI INI ULANG TAHUN!</strong><br>
                        <em>"${ucapan}"</em>
                    </div>
                `;
                birthdayBanner.style.display = "block";
            }

            
            // Tampilkan event
            let { upcoming, ongoing, past } = processEvents(events);
            displayEvents(ongoing.slice(0, 3), "<div style='border-radius:20px;background-color:green;color:white;padding:10px;font-weight:500;'>Sedang Berlangsung</div>");
            displayEvents(upcoming.slice(0, 9), "<div style='border-radius:20px;background-color:rgb(217, 168, 77);color:white;padding:10px;font-weight:500;'>Akan Datang</div>");
            displayEvents(past.slice(0, 3), "<div style='border-radius:20px;background-color:black;color:white;padding:10px;font-weight:500;'>Selesai</div>");
        })
        .catch(err => console.error("Gagal memuat CSV:", err));
});