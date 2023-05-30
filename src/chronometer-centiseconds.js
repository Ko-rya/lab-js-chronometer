class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (typeof printTimeCallback === 'function') {
          printTimeCallback(this.currentTime);
        }
      }, 10);
  }
  getMinutes() {
    return Math.floor(this.currentTime/6000)
  }

  getSeconds() {
    return this.currentTime < 6000 ? Math.floor(this.currentTime/100) : Math.floor(this.currentTime % 6000/100);
  }

getCentiseconds() {
    return this.currentTime%100
}
/* Something I tried before I remembered that centiseconds go up to 100 and not 60
if (this.currentTime === 0 ){
  return 0
}
let time = this.currentTime.toString()
return parseInt(time[time.length - 2] + time[time.length - 1]) */
  computeTwoDigitNumber(value) {
    let stringed = value.toString()
    if (stringed.length === 1){
      return "0"+ stringed
    }
    else return stringed
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;
  }
}




