import React, { useState } from "react";
import "./Portfolio.scss";

export default function Portfolio() {
  let cards = [
    {
      title: "Confident",
      skills: [
        {
          id: 0,
          skill: "Javascript",
        },
        {
          id: 1,
          skill: "HTML5",
        },
        {
          id: 2,
          skill: "CSS",
        },
        {
          id: 3,
          skill: "React",
        },
        {
          id: 4,
          skill: "Github",
        },
        {
          id: 5,
          skill: "Styled Components",
        },
        {
          id: 6,
          skill: "SASS",
        },
        {
          id: 7,
          skill: "React-Router",
        },
        {
          id: 8,
          skill: "Jira",
        },
        {
          id: 9,
          skill: "Trello",
        },
        {
          id: 10,
          skill: "AGILE-SCRUM",
        },
      ],
    },
    {
      title: "Intermediate",
      skills: [
        {
          id: 11,
          skill: "Axios",
        },
        {
          id: 12,
          skill: "Google Firebase",
        },
        {
          id: 13,
          skill: "React Bootstrap",
        },
        {
          id: 14,
          skill: "React Springs",
        },
        {
          id: 15,
          skill: "Node.js",
        },
        {
          id: 16,
          skill: "Express.js",
        },
      ],
    },
    {
      title: "Novice",
      skills: [
        {
          id: 17,
          skill: "React Redux",
        },
        {
          id: 18,
          skill: "MySQL",
        },
        {
          id: 19,
          skill: "Jest",
        },
        {
          id: 20,
          skill: "MongoDB",
        },
        {
          id: 21,
          skill: "React Draggable",
        },
      ],
    },
  ];

  return (
    <div className="Portfolio">
      <div className="Portfolio__dragBox">
        <h1 className="Portfolio__header">My Skillset</h1>
        <div className="Portfolio__cardList">
          {cards.map((card) => {
            return (
              <div className="Portfolio__card">
                <h2 className="Portfolio__cardHeader">{card.title}</h2>
                <ul>
                  {card.skills.map((skill) => {
                    return <li className="Portfolio__skill">{skill.skill}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
