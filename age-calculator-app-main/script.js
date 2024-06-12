const calculateBtn = document.getElementById('calculate');
const output = document.getElementById('output');
const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');

calculateBtn.addEventListener('click', () => {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const age = today.getTime() - birthDate.getTime();
  const ageDays = Math.floor(age / (1000 * 60 * 60 * 24));
  const ageYears = Math.floor(ageDays / 365);
  const ageMonths = Math.floor((ageDays % 365) / 30);
  const ageRemainingDays = ageDays % 30;

  years.innerText = ageYears + ' years';
  months.innerText = ageMonths + ' months';
  days.innerText = ageRemainingDays + ' days';
});