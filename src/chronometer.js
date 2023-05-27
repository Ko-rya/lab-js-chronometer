class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    this.printTimeCallback = printTimeCallback;
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (typeof this.printTimeCallback === 'function') {
          this.printTimeCallback(this.currentTime);
        }
      }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime%60
  }

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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
