import { Emitter } from "./Emitter.js";
import { View } from "./View.js";

const Timer = {
  time: 60 * 60,
  currentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60,
  formatTime: time => String(time).padStart(2, "0").split(""),

  init(time) {
    Emitter.emit("countdown-start");

    Timer.time = time || Timer.time;

    Timer.currentTime = Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.currentTime = Timer.currentTime - 1;

    const [minutesLeft, minutesRight] = Timer.formatTime(
      Timer.timeToMinutes(Timer.currentTime)
    );

    const [secondsLeft, secondsRight] = Timer.formatTime(
      Timer.timeToSeconds(Timer.currentTime)
    );

    const minutes = { minutesLeft, minutesRight };
    const seconds = { secondsLeft, secondsRight };

    View.render(minutes, seconds);

    if (Timer.currentTime === 0) {
      clearInterval(Timer.interval);
      Emitter.emit("countdown-end");
      return;
    }
  }
};

export { Timer };
