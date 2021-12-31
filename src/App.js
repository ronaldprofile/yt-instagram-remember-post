import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";

const App = {
  async start() {
    try {
      Timer.init();

      await Notifier.init();

      Notifier.notify({
        title: "Instagram remember",
        message: "Hello Notification"
      });
    } catch (error) {
      alert(error.message);
    }
  }
};

export { App };
