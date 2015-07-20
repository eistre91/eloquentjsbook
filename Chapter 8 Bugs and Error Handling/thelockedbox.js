var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
    box.unlock();
    try {
        console.log(box.content);
        body();
    } finally {
        box.lock();
    }
}

/*Write a function called withBoxUnlocked that takes a function value as argument, 
unlocks the box, runs the function, and then ensures that the box is locked again before returning, 
regardless of whether the argument function returned normally or threw an exception. */

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
