import { Speaker } from "./Speaker";
enum HumenType {
  Baby,
  Boy,
  Girl,
  Man,
  Woman,
}
interface Options {
  type: HumenType;
  word: String;
}

export class HumanSpeaker implements Speaker {
  type: HumenType;
  word: String;
  constructor(options: Options) {
    this.type = options.type;
    this.word = options.word;
  }
  speak(): String {
    if (this.word) {
      return `A ${this.type} says,"${this.word}"`;
    } else {
      return `I am ${this.type}`;
    }
  }
}
