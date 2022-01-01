const Emitter = {
  events: {},

  on(eventName, cb) {
    Emitter.events[eventName] = Emitter.events[eventName] || [];

    Emitter.events[eventName].push(cb);
  },

  // rest operator
  emit(eventName, ...rest) {
    // prop in object
    if (eventName in Emitter.events === false) {
      console.log("event not found!");
      return;
    }

    Emitter.events[eventName].forEach(event => {
      event(...rest);
    });
  }
};

export { Emitter };
