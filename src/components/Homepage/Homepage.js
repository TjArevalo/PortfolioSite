import React from "react";
import "./Homepage.scss";
import TextTransition, { presets } from "react-text-transition";
import Me from "../../assets/images/Me.jpg";

const texts = [
  "James",
  "TJ",
  "22 years old",
  "A Software Developer",
  "Filipino",
  "A Musician",
  "A loud laugher",
  "A smile addict :3",
];

export default function Homepage() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 3 seconds
    );
  }, []);
  return (
    <div className="Homepage">
      <div className="Homepage__wrapper">
        <div className="Homepage__header">
          Kamusta! I'm...
          <TextTransition
            className="Homepage__transition"
            text={texts[index % texts.length]}
            springConfig={presets.wobbly}
            style = {{color: "purple"}}
            direction = "down"
            inline
          />
        </div>
        <div className="Homepage__picture">
          <h1 className="Homepage__picText">This is me!</h1>
          <img src={Me} className="Homepage__image" />
        </div>
      </div>
      <div className="Homepage__bottomWrap">
        <p>Hello</p>
      </div>
    </div>
  );
}
