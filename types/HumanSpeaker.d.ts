import { Speaker } from "./Speaker";
declare enum HumenType {
    Baby = 0,
    Boy = 1,
    Girl = 2,
    Man = 3,
    Woman = 4
}
interface Options {
    type: HumenType;
    word: String;
}
export declare class HumanSpeaker implements Speaker {
    type: HumenType;
    word: String;
    constructor(options: Options);
    speak(): String;
}
export {};
