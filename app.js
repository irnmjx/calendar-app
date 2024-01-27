const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll(".prev, .next");

const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

let date = new Date();
let month = date.getMonth(); // 0
let year = date.getFullYear(); // 2024

function renderCalendar() {
  const start = new Date(year, month, 1).getDay(); // 이번 달의 시작 요일 "1(월)""
  const endDate = new Date(year, month + 1, 0).getDate(); // 이번 달의 마지막 날짜 "31"
  const end = new Date(year, month, endDate).getDay(); // 이번 달의 마지막 요일 "3(수)"
  const endDatePrev = new Date(year, month, 0).getDate(); // 2023년 12월 31일의 날짜 "31"

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml = `<li class='inactive'>${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    datesHtml += `<li>${i}</li>`;
  }

  for (let i = 1; i <= 6 - end; i++) {
    datesHtml += `<li class='inactive'>${i}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.innerText = `${year}년 ${months[month]}`;
}

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnclass = e.target.className;

    if (btnclass === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnclass === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnclass === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();
