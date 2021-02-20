// import React, { useState, useEffect } from "react";
// import useInterval from "react-useinterval";
// import { useTransition, animated, config } from "react-spring";
// import "./test.scss";
// import img0 from "../../assets/images/Me.jpg";
// import img1 from "../../assets/images/img1.jpeg";
// import img2 from "../../assets/images/img2.jpeg";
// import img3 from "../../assets/images/img3.jpg";
// import img4 from "../../assets/images/img4.jpg";
// import img5 from "../../assets/images/img5.jpg";

// const slides = [
//   {
//     id: 0,
//     img: img0,
//   },
//   {
//     id: 1,
//     img: img1,
//   },
//   {
//     id: 2,
//     img: img2,
//   },
//   {
//     id: 3,
//     img: img3,
//   },
//   {
//     id: 4,
//     img: img4,
//   },
//   {
//     id: 5,
//     img: img5,
//   },
// ];

// export default function Test() {
//   const [index, set] = useState(0);
//   useEffect(
//     () =>
//       void setInterval(() => set((state) => (state + 1) % slides.length), 2000),
//     []
//   );

//   const transitions = useTransition(slides[index], (item) => item.id, {
//     from: { opacity: 0, transform: "scale(1.1)" },
//     enter: { opacity: 1, transform: "scale(1)" },
//     leave: { opacity: 0, transform: "scale(0.9)" },
//     config: config.molasses,
//   });

//   return (
//     <div className="Wrapper">
//       <div className="bg">
//         {transitions.map(({ item, props, key }) => {
//           return (
//             <animated.img
//               key={key}
//               class="hooray"
//               src={item.img}
//               style={{ ...props }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
