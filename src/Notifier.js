const Notifier = {
  async init() {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") throw new Error("Permission denied!");
  },

  notify({ title, message, icon }) {
    return () =>
      new Notification(title, {
        body: message,
        icon
      });
  }
};

export { Notifier };
