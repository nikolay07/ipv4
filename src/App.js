import React, { useState } from "react";
import "./index.css";

function App() {
  const [num, setNum] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    let inputNum = e.target.value;
    setNum(inputNum);
    let arrIp = [];
    let l = inputNum.length - 3;
    for (let a = 0; a < l; a++) {
      for (let b = 0; b < l - a; b++) {
        for (let c = 0; c < l - a - b; c++) {
          const chars = inputNum.split("");
          chars.splice(a + 1, 0, ".");
          chars.splice(a + b + 3, 0, ".");
          chars.splice(a + b + c + 5, 0, ".");
          let am = [...chars].join("");
          arrIp.push([am]);
          setList(arrIp);
        }
      }
    }
  };
  const ipList = (
    <ul>
      <div className="text">IP List: </div>
      {list.map((ip, i) => {
        return <li key={i}>{ip}</li>;
      })}
    </ul>
  );

  const message = num.length > 0 ? "Error: Not found" : "";
  return (
    <div className="main">
      <div className="text">Enter number</div>
      <input
        type="number"
        maxLength="12"
        placeholder="0"
        onChange={handleChange}
        className="input"
      />
      <br />
      <div className="text">
        {num.length < 4 ? message : `IP variants found: ${list.length}`}
      </div>
      <span>{num.length < 4 ? null : ipList}</span>
    </div>
  );
}

export default App;
