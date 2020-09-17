const Hello = require("rollup-hello/dist/rollup-hello.cjs");
const hello = new Hello(new Hello.DogSpeaker());

console.log(hello.speak());
hello.setSpeaker(new Hello.CatSpeaker());
console.log(hello.speak());

var humanSpeaker = new Hello.HumanSpeaker({ type: "Man" });
hello.setSpeaker(humanSpeaker);
console.log(hello.speak());
