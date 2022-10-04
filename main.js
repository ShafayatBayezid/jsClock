var secondsHand = document.querySelector(".seconds");
var minsHand = document.querySelector(".minutes");
var hoursHand = document.querySelector(".hours");
var digiTime = document.querySelector(".digiTime");
var currentDate = document.querySelector(".currentDate");

const setDate = () => {
  const time = new Date();

  const seconds = time.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = time.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = time.getHours();
  const hoursHandDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursHandDegrees}deg)`;

  const digital = time.toLocaleTimeString("en-US");
  digiTime.innerHTML = digital;
};

setInterval(setDate, 1000);

const date = new Date();

const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();

currentDate.innerHTML = day + `.` + month + `.` + year;
