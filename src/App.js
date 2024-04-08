import "./App.css";
import WheelComponent from "react-wheel-of-prizes";
import React, { useState } from "react";

function App() {
  const segments = ["Red", "Pink", "Yellow", "Blue", "Green", "Black"];
  const segColors = [
    "#EE4040",
    "#FF69B4  ",
    "#FFFF00",
    "#3DA5E0",
    "#008000",
    "#000",
  ];
  const [colorDescription, setColorDescription] = useState("")
 const statement = [
    {
      color: "Red",
      type: "Red attracts the most attention and is associated with strong emotions, such as love, passion, and anger.",
    },
    { color: "Pink", type: "We associate pink with youth, innocence, and childhood sweetness." },
    { color: "Yellow", type: "Yellow is the color of the mind and the intellect, resonating with the left, logical side of the brain." },
    { color: "Blue", type: "Blue is the color of trust, serenity, and peace. It suggests loyalty and integrity as well as conservatism and predictability." },
    { color: "Green", type: "Green is of nature, of balance and growth. It is restful and secure, symbolizing harmony, healing, and stability." },
    { color: "Black", type: "Black as a staple color can make a brand appear sophisticated, powerful, and elegant. " },
  ]

  const onFinished = (winner) => {
    console.log(winner);
   const value  = statement.find((element) => {
      return element.color === winner 
    })
    //  const value =  statement.findIndex(item =>
    //      item.color === winner 
    //     )
    // const selectedColor = statement[value]
    console.log(value,'colorDescr', value.type )
    setColorDescription(value.type)
  };
  return (
    <div className="App">
      <h1>Fovourite Colour</h1>
      {colorDescription}

      <div className="set-position">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={50}
          downDuration={200}
          fontFamily="Arial"
        />
      </div>
    </div>
  );
}

export default App;
