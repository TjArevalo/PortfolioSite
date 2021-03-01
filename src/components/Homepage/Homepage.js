import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Homepage.scss";
import TextTransition, { presets } from "react-text-transition";
import { useTransition, animated, config } from "react-spring";
import img0 from "../../assets/images/Me.jpg";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";

const texts = [
  "TJ",
  "James",
  "A Software Developer",
  "Filipino",
  "Soulace",
  "A Musician",
  "A loud laugher",
  "A smile addict :3",
];

const slides = [
  {
    id: 0,
    img: img0,
  },
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
];

export default function Homepage() {
  const [textIndex, setText] = useState(0);
  const [index, set] = useState(0);
  const history = useHistory();
  function codingRedirect() {
    history.push("/portfolio");
  }
  function soulaceRedirect() {
    // history.push("/soulace");
  }

  useEffect(
    () =>
      void setInterval(
        () => setText((textState) => (textState + 1) % texts.length),
        5000
      ),
    []
  );

  useEffect(
    () =>
      void setInterval(() => set((state) => (state + 1) % slides.length), 5000),
    []
  );

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: config.molasses,
  });

  return (
    <div className="Homepage">
      <div className="Homepage__wrapper">
        <div className="Homepage__header">
          Kamusta! I'm...
          <TextTransition
            className="Homepage__transition"
            text={texts[textIndex % texts.length]}
            springConfig={presets.wobbly}
            style={{ color: "purple" }}
            direction="down"
            inline
          />
        </div>
        <div className="Homepage__picture">
          <h1 className="Homepage__picText">This is me!</h1>
          <div className="Homepage__image">
            {transitions.map(({ item, props, key }) => {
              return (
                <animated.img
                  key={key}
                  class="Homepage__imageTransition"
                  src={item.img}
                  style={{ ...props }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="Homepage__bottomWrap">
        <div className="Homepage__codingWrap" onClick={codingRedirect}>
          <div className="Homepage__coding">
            <h2 className="Homepage__linkText">CODING</h2>
          </div>
        </div>
        <div className="Homepage__soulaceWrap" onClick={soulaceRedirect}>
          <div className="Homepage__soulace">
            <h2 className="Homepage__linkText--white">SOULACE</h2>
            <p className="Homepage__linkText--white">(Coming soon!)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
