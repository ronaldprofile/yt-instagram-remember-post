import { Notifier } from "./Notifier.js";

const App = {
  async start() {
    try {
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
