import React, { useState } from "react";
import ReactDOM from "react-dom";
import Hello from "rollup-hello";

function App() {
  const [msg, setMsg] = useState("😅，无人说话");

  function speak(speaker) {
    const hello = new Hello(speaker);
    setMsg(hello.speak());
  }

  return (
    <div>
      <a
        style={{ marginRight: "1rem" }}
        href="javascript:;"
        onClick={() => speak(new Hello.DogSpeaker())}
      >
        狗叫
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="javascript:;"
        onClick={() => speak(new Hello.CatSpeaker())}
      >
        猫叫
      </a>
      <a
        style={{ marginRight: "1rem" }}
        href="javascript:;"
        onClick={() =>
          speak(new Hello.HumanSpeaker({ word: "我是好孩子", type: "Boy" }))
        }
      >
        人讲
      </a>
      <h1>{msg}</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
