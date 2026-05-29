// ELEMENT
const monthYear = document.querySelector(".month-year");
const daysContainer = document.querySelector(".days");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// DATE SEKARANG
let date = new Date();

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
];

// ELEMENT JAM
const clockElement = document.querySelector('.clock');
const clockTime = document.querySelector('.clock-time');
const clockDate = document.querySelector('.clock-date');

function Clock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const day = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  clockTime.textContent = `${hours}:${minutes}:${seconds}`;
  clockDate.textContent = `${day}, ${month}, ${year}`;
}

// FUNCTION RENDER CALENDAR
function renderCalendar() {

  // Ambil tahun & bulan sekarang
  const year = date.getFullYear();
  const month = date.getMonth();

  // Tampilkan bulan dan tahun
  monthYear.innerHTML = `${monthNames[month]} ${year}`;

  // Hari pertama bulan
  const firstDay = new Date(year, month, 1).getDay();

  // Total hari dalam bulan
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Kosongkan tanggal sebelumnya
  daysContainer.innerHTML = "";

  // Tambahkan kotak kosong sebelum tanggal 1
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    daysContainer.appendChild(emptyDiv);
  }

  // Generate semua tanggal
  for (let day = 1; day <= lastDate; day++) {

    // Buat element div
    const dayDiv = document.createElement("div");

    // Tambahkan class
    dayDiv.classList.add("day");

    // Isi angka tanggal
    dayDiv.innerHTML = day;

    // Highlight hari ini
    const today = new Date();

    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add("active");
    }

    // Masukkan ke container
    daysContainer.appendChild(dayDiv);
  }
}

// PREVIOUS MONTH
prevBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

// NEXT MONTH
nextBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// PERTAMA KALI JALAN
renderCalendar();
Clock();
setInterval(Clock, 1000);