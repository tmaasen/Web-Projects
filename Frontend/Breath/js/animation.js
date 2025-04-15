const container = document.querySelector(".container"),
  text = document.querySelector("#text"),
  circle = document.querySelector(".circle"),
  pointer = document.querySelector(".pointer-container"),
  audio = document.querySelector("#sound"),
  timer = document.querySelector("#time"),
  totalTime = 7500,
  breatheTime = (totalTime / 5) * 2,
  holdTime = totalTime / 5;

let animate = 1,
  timeLeft = document.querySelector("#time").value,
  display = document.querySelector("#display"),
  minutes = Math.floor(timeLeft / 60),
  seconds = timeLeft - minutes * 60;

var breatheInterval, breatheTimeout, holdTimeout, timeInterval;

display.innerHTML = minutes + ":" + seconds;
text.innerText = "START!";
audio.currentTime = 5;

timer.addEventListener("change", function () {
  clearAnimation();
  timeLeft = document.querySelector("#time").value;
  calcTimeLeft(timeLeft);
  timeLeft != 30
    ? (display.innerHTML = minutes + ":" + seconds + "0")
    : (display.innerHTML = minutes + ":" + seconds);
});

circle.addEventListener("click", function () {
  animate += 1;
  pointer.classList.toggle("animate");
  if (animate % 2 == 0) {
    play();
    breatheInterval = setInterval(breatheAnimation, totalTime);
    breatheAnimation();
  } else {
    clearAnimation();
  }
});

function calcTimeLeft(value) {
  minutes = Math.floor(value / 60);
  seconds = value - minutes * 60;
}

function breatheAnimation() {
  text.innerText = "Breathe In";
  container.className = "container grow";
  audio.play();
  breatheTimeout = setTimeout(() => {
    text.innerText = "Hold";
    holdTimeout = setTimeout(() => {
      text.innerText = "Breathe Out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

function clearAnimation() {
  text.innerText = "START!";
  container.className = "container";
  pointer.className = "pointer-container";
  clearTimeout(breatheTimeout);
  clearTimeout(holdTimeout);
  clearInterval(breatheInterval);
  clearInterval(timeInterval);
  animate = 1;
  audio.pause();
}

function pause() {
  clearInterval(timeInterval);
}

function play() {
  timeInterval = setInterval(function () {
    if (minutes != 0 && seconds == 0) {
      minutes--;
    }
    seconds-- ? seconds == 0 : (seconds = 59);
    timeLeft--;
    seconds >= 10
      ? (display.innerHTML = minutes + ":" + seconds)
      : (display.innerHTML = minutes + ":0" + seconds);
    if (seconds == 0 && minutes == 0) {
      clearAnimation();
      timeLeft = 0;
    }
  }, 1000);
}
