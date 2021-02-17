import React from "react";
import "./Homepage.scss";
import TextTransition, { presets } from "react-text-transition";
import Me from "../../assets/images/Me.jpg";

const texts = [
  "James",
  "'TJ'",
  "22",
  "A Software Developer",
  "Filipino!",
  "A Musician",
  "An Artist",
  "Spiritual",
  "A loud laugher",
  "Addicted to smiling",
  "Wondering why...",
  "you aren't...",
  "scrolling down...",
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
            springConfig={presets.gentle}
          />
        </div>
        <img src={Me} className="Homepage__image" />
      </div>
      <div className="Homepage__bottomWrap">
        <p>Hello</p>
      </div>
    </div>
  );
}
