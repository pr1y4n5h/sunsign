import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [getvalue, setvalue] = useState("");

  var flags = {
    "♈": "Aries",
    "♊": "Gemini",
    "♉": "Taurus",
    "♋": "Cancer",
    "♌": "Leo",
    "♍": "Virgo",
    "♎": "Libra",
    "♏": "Scorpio",
    "♐": "Sagittarius",
    "♑": "Capricorn",
    "♒": "Aquarius",
    "♓": "Pisces"
  };

  function changeHandler(event) {
    var uinput = event.target.value;
    var getvalue = flags[uinput];
    if (uinput in flags) {
      return setvalue(getvalue);
    } else {
      return setvalue("Please make a valid selection from the below list");
    }
  }

  function clickHandler(key) {
    var getvalue = flags[key];
    setvalue(getvalue);
  }

  return (
    <div className="App">
      <h1>Emoji/Symbol Interpreter for Sun Signs</h1>
      <h4>
        Please click on any of the below Sun Sign symbols, and we will tell you
        its name!
      </h4>
      <h4>You can either enter that emoji/symbol in the below box</h4>
      <input onChange={changeHandler} />

      <div className="sunsigns">
        {Object.entries(flags).map(([key]) => {
          return (
            <span
              key={key}
              style={{ cursor: "pointer", padding: "1rem", fontSize: "3rem" }}
              onClick={() => clickHandler(key)}
            >
              {key}
            </span>
          );
        })}
      </div>
      <h2> {getvalue} </h2>
    </div>
  );
}
