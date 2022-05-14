let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};
let speedy = {
  __proto__: hamster,
  stomach : []
};
let lazy = {
  __proto__: hamster,
  stomach : []
};

speedy.eat("apple");
lazy.eat("banana");
alert(speedy.stomach); // apple
alert(lazy.stomach);


// q2


