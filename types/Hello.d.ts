import { CatSpeaker } from "./CatSpeaker";
import { DogSpeaker } from "./DogSpeaker";
import { HumanSpeaker } from "./HumanSpeaker";
import { Speaker } from "./Speaker";
export default class Hello {
    static CatSpeaker: typeof CatSpeaker;
    static DogSpeaker: typeof DogSpeaker;
    static HumanSpeaker: typeof HumanSpeaker;
    speaker: Speaker;
    constructor(speaker: Speaker);
    speak(): String;
}
