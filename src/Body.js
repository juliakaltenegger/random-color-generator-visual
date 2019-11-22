import React, { useState } from "react";

export default Body;

let randomColor = require("randomcolor"); // import the script

function Body() {
  const [myRandomColor, setMyRandomColor] = useState("#ff0000");
  const [hue, setHue] = useState("random");
  const [luminosity, setLuminosity] = useState("random");

  return (
    <body className="Body" style={{ backgroundColor: myRandomColor }}>
      <select
        className="hueButton"
        value={hue}
        onChange={e => setHue(e.target.value)}
      >
        <option value="random">Random</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
        <option value="monochrome">Monochrome</option>
      </select>

      <select
        className="luminosityButton"
        value={luminosity}
        onChange={e => setLuminosity(e.target.value)}
      >
        <option value="random">Random</option>
        <option value="bright">Bright</option>
        <option value="light">Light</option>
      </select>

      <button
        className="generateColorButton"
        onClick={() => {
          setMyRandomColor(
            randomColor({
              luminosity: luminosity,
              hue: hue
            })
          );
        }}
      >
        Generate Color
      </button>
      <div>{myRandomColor}</div>
    </body>
  );
}

//   return (
//     <div>
//       <button className="generateColorButton" onClick={() => setHide(!hide)}>
//         Generate Color
//       </button>
//       <div className={hide ? "whatsThisHide" : "whatsThisShow"}>
//         <p>
//           This random color generator provides you with four functions in order
//           to achieve the best color schemes for your design:
//         </p>
//         <ol>
//           <li>
//             Generate a completely random color by simply clicking the “Generate
//             Color” button.
//           </li>
//           <li>Generate a random color from a pre-selected hue.</li>
//           <li>Generate a random color from a pre-selected luminosity.</li>
//           <li>
//             Generate a random color from a pre-selected hue AND luminosity.
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// }
