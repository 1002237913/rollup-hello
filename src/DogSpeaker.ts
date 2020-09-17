import { Speaker } from "./Speaker";

export class DogSpeaker implements Speaker {
  speak(): String {
    return "汪汪。。。";
  }
}
