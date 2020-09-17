(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global.RollupHello = {})));
})(this, function (exports) {
  "use strict";
  debugger;
  var CatSpeaker = /** @class */ (function () {
    function CatSpeaker() {}
    CatSpeaker.prototype.speak = function () {
      return "喵喵。。。";
    };
    return CatSpeaker;
  })();

  var DogSpeaker = /** @class */ (function () {
    function DogSpeaker() {}
    DogSpeaker.prototype.speak = function () {
      return "汪汪。。。";
    };
    return DogSpeaker;
  })();

  var HumenType;
  (function (HumenType) {
    HumenType[(HumenType["Baby"] = 0)] = "Baby";
    HumenType[(HumenType["Boy"] = 1)] = "Boy";
    HumenType[(HumenType["Girl"] = 2)] = "Girl";
    HumenType[(HumenType["Man"] = 3)] = "Man";
    HumenType[(HumenType["Woman"] = 4)] = "Woman";
  })(HumenType || (HumenType = {}));
  var HumanSpeaker = /** @class */ (function () {
    function HumanSpeaker(options) {
      this.type = options.type;
      this.word = options.word;
    }
    HumanSpeaker.prototype.speak = function () {
      if (this.word) {
        return "A " + this.type + ' says,"' + this.word + '"';
      } else {
        return "I am " + this.type;
      }
    };
    return HumanSpeaker;
  })();

  var Hello = /** @class */ (function () {
    function Hello(speaker) {
      this.speaker = speaker;
    }
    Hello.prototype.setSpeaker = function (speaker) {
      this.speaker = speaker;
    };
    Hello.prototype.speak = function () {
      return this.speaker.speak();
    };
    Hello.CatSpeaker = CatSpeaker;
    Hello.DogSpeaker = DogSpeaker;
    Hello.HumanSpeaker = HumanSpeaker;
    return Hello;
  })();

  exports.default = Hello;

  Object.defineProperty(exports, "__esModule", { value: true });
});
