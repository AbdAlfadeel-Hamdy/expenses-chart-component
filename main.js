const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const barsContainer = document.querySelector(".bars");

const displayBars = function () {
  barsContainer.innerHTML = "";
  data.forEach((bar) => {
    const text = `
  <div class="bar">
  <div class="value">$${bar.amount}</div>
  <div class="amount" style="height: ${bar.amount * 1.8}px"></div>
  <div class="day">${bar.day}</div>
</div>
  `;
    barsContainer.insertAdjacentHTML("beforeend", text);
  });
};

displayBars();

const renderLongestBar = function () {
  const bars = [...document.querySelectorAll(".amount")];
  const heighestVal = Math.max(
    ...bars.map((bar) => Number.parseFloat(+bar.style.height))
  );
  const heighestBar = bars.find(
    (bar) => +bar.style.height.slice(0, -2) === heighestVal
  );
  heighestBar.style.backgroundColor = `hsl(186, 34%, 60%)`;
};

renderLongestBar();

console.log(document.querySelector(".btn::before"));
