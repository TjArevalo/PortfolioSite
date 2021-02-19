import React, { useState, useEffect } from "react";
import useInterval from "react-useinterval";
import { useTransition, animated, config } from "react-spring";
import "./test.scss";
import img0 from "../../assets/images/Me.jpg";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";

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

export default function Test() {
  const [index, set] = useState(0);
  useEffect(
    () =>
      void setInterval(() => set((state) => (state + 1) % slides.length), 2000),
    []
  );

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    config: config.molasses,
  });

  return (
    <div className="Wrapper">
      <div className="bg">
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.img
              key={key}
              class="hooray"
              src={item.img}
              style={{ ...props }}
            />
          );
        })}
      </div>
    </div>
  );
}

// import { render } from 'react-dom'
// import React, { useState, useEffect } from 'react'
// import { useTransition, animated, config } from 'react-spring'
// import './styles.css'

// const slides = [
//   { id: 0, url: 'photo-1551989137-334bd6577da3?ixlib=rb-1.2.1&w=3450&q=80' },
//   { id: 1, url: 'photo-1501560379-05951a742668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=3300&q=80' },
//   { id: 2, url: 'photo-1551989137-b8ad7595d020?ixlib=rb-1.2.1&w=3300&q=80' },
//   { id: 3, url: 'photo-1503058474900-cb76710f9cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=3300&q=80' },
// ]

// const App = () => {
//   const [index, set] = useState(0)
//   const transitions = useTransition(slides[index], item => item.id, {
//     from: { opacity: 0, transform: 'scale(1.1)' },
//     enter: { opacity: 1, transform: 'scale(1)' },
//     leave: { opacity: 0, transform: 'scale(0.9)' },
//     config: config.molasses,
//   })
//   useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
//   return transitions.map(({ item, props, key }) => (
//     <animated.div
//       key={key}
//       class="bg"
//       style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}
//     />
//   ))
// }
