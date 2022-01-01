import { Emitter } from "./Emitter.js";
import { sortMessage } from "./Messages.js";
import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";

const notify = () => {
  const message = sortMessage();

  const notification = Notifier.notify({
    title: "Instagram remember",
    message
  });

  notification();
};

const App = {
  async start() {
    try {
      await Notifier.init();

      Emitter.on("countdown-start", notify);
      Emitter.on("countdown-end", Timer.init);

      Timer.init();
    } catch (error) {
      alert(error.message);
    }
  }
};

export { App };
