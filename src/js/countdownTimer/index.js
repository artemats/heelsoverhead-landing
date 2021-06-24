// init countdown timer //
class CountDownTimer {
    constructor(container) {
        this.container = container;
        this.day = this.container.querySelector('[data-counter="day"]');
        this.hour = this.container.querySelector('[data-counter="hour"]');
        this.min = this.container.querySelector('[data-counter="min"]');
        this.sec = this.container.querySelector('[data-counter="sec"]');
        this.date = new Date(this.container.dataset.date);
        this.startTimer();
    }

    startTimer() {
        const self = this;
        // Init timer date. Without it timer is empty first second.
        self.calcDate(self);
        setInterval(function () {
            self.calcDate(self);
        }, 1000);
    };

    calcDate(self) {
        let now = new Date().getTime();
        let t = self.date - now;
        if (t >= 0) {
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);
            self.day.innerHTML = ('0' + days).slice(-2);
            self.hour.innerHTML = ("0" + hours).slice(-2);
            self.min.innerHTML = ("0" + mins).slice(-2);
            self.sec.innerHTML = ("0" + secs).slice(-2);
        } else {
            console.log('time is over');
        }
    };
}

const timers = document.querySelectorAll('[data-counter-container]');
[].forEach.call(timers, timer => {
    new CountDownTimer(timer);
    // output.timer = hours + ':' + mins + ':' + secs;
    // output.CountDownTimer = hours + ':' + mins + ':' + secs;
});