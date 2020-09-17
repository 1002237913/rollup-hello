import { CatSpeaker } from "./CatSpeaker";
import { DogSpeaker } from "./DogSpeaker";
import { HumanSpeaker } from "./HumanSpeaker";
import { Speaker } from "./Speaker";

export default class Hello {
  public static CatSpeaker = CatSpeaker;
  public static DogSpeaker = DogSpeaker;
  public static HumanSpeaker = HumanSpeaker;

  speaker: Speaker;
  constructor(speaker: Speaker) {
    this.speaker = speaker;
  }
  speak(): String {
    return this.speaker.speak();
  }
}
