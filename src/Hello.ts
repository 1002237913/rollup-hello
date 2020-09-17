import { CatSpeaker } from "./CatSpeaker";
import { DogSpeaker } from "./DogSpeaker";
import { HumanSpeaker } from "./HumanSpeaker";
import { Speaker } from "./Speaker";

export default class Hello {
  public static CatSpeaker: typeof CatSpeaker = CatSpeaker;
  public static DogSpeaker: typeof DogSpeaker = DogSpeaker;
  public static HumanSpeaker: typeof HumanSpeaker = HumanSpeaker;

  speaker: Speaker;
  constructor(speaker: Speaker) {
    this.speaker = speaker;
  }
  setSpeaker(speaker: Speaker) {
    this.speaker = speaker;
  }
  speak(): String {
    return this.speaker.speak();
  }
}
