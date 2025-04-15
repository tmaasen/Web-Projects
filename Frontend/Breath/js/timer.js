class Timer {

  constructor(timeLeft) {
    this.timeLeft = timeLeft;
    this.timeInterval = null
  }

  pause() {
    clearInterval(this.timeInterval)
  }

  play() {
    var counter = null
    let endTime = this.timeLeft -= counter
    
    let minutes = Math.floor(endTime / 60);
    let seconds = endTime - minutes * 60;

    this.timeInterval = setInterval(function () {
        seconds-- ? seconds == 0 : (seconds = 59)
        counter++
        console.log(counter)
        seconds >= 10
          ? console.log(minutes + ":" + seconds)
          : console.log(minutes + ":0" + seconds)
        if (seconds == 0 && minutes == 0) {
          clearAnimation()
        }
    }, 1000);
  }

}
