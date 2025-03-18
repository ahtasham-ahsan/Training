class EventEmitter {
    constructor() {
      this.events = new Map();
    }
    on(event, listener) {
      if (!this.events.has(event)) {
        this.events.set(event, new Set()); 
      }
      this.events.get(event).add(listener); 
    }
    emit(event, ...args) {
      if (this.events.has(event)) {
        const listeners = this.events.get(event);
        listeners.forEach((listener) => {
          listener(...args); 
        });
      }
    }
  
    off(event, listener) {
      if (this.events.has(event)) {
        const listeners = this.events.get(event);
        listeners.delete(listener);
        if (listeners.size === 0) {
          this.events.delete(event); 
        }
      }
    }
  }
  
  const emitter = new EventEmitter();
  const handler = () => console.log("Event fired!");
  
  emitter.on("test", handler); 
  emitter.emit("test");
  emitter.off("test", handler); 
  emitter.emit("test"); 
