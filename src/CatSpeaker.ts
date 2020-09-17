import { Speaker } from "./Speaker";

export class CatSpeaker implements Speaker {
  speak(): String {
    return "喵喵。。。";
  }
}
