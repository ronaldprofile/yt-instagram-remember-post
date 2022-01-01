import { Emitter } from "./Emitter.js";
import { Messages } from "./Messages.js";
import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";

// challenge next level
const messagesAlreadyUsed = [];

const notify = () => {
  const indexMessage = Math.floor(Math.random() * Messages.length);

  const notification = Notifier.notify({
    title: "Instagram remember",
    message: Messages[indexMessage]
  });

  notification();
};

const App = {
  async start() {
    try {
      await Notifier.init();

      Emitter.on("countdown-start", notify);
      Emitter.on("countdown-end", Timer.init);

      Timer.init(0.1 * 60);
    } catch (error) {
      alert(error.message);
    }
  }
};

export { App };
