import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import WifiIcon from "@material-ui/icons/Wifi";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import "./Portfolio.scss";
import Me from "../../assets/images/Me.jpg";
import Earth from "../../assets/images/Earth.jpeg";
import Moon from "../../assets/images/Moon.jpeg";
import Horizon from "../../assets/images/Horizon.jpeg";

export default function Portfolio() {
  let cards = [
    {
      id: "0",
      image: Horizon,
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
      id: "1",
      image: Earth,
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
      id: "2",
      image: Moon,
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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="Portfolio">
      <div className="Portfolio__dragBox">
        <h1 className="Portfolio__header">My Skillset</h1>
        <div className="Portfolio__cardList">
          {cards.map(({ title, skills, image }, index) => {
            return (
              <div
                key={index}
                className="Portfolio__card"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h2 className="Portfolio__cardHeader">{title}</h2>
                <ul className="Portfolio__skillBox">
                  {skills.map((skill, index) => {
                    return (
                      <li key={index} className="Portfolio__skill">
                        {skill.skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="Portfolio__projects">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#75106A",
              color: "#fff",
              border: "2px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="Feb 2021"
            iconStyle={{
              background: "#4F4049",
              color: "#fff",
              cursor: "pointer",
            }}
            icon={<HomeIcon />}
            iconOnClick={() =>
              openInNewTab("https://github.com/TjArevalo/PortfolioSite")
            }
          >
            <h3 className="vertical-timeline-element-title">
              Portfolio Site Created
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vancouver, BC
            </h4>
            <p>
              <a
                href="https://github.com/TjArevalo/PortfolioSite"
                className="Portfolio__projects--link"
              >
                https://github.com/TjArevalo/PortfolioSite
              </a>
            </p>
            <p>
              React | SASS | React Router | React Spring | React Vertical
              Timeline
            </p>
            <p className="Portfolio__important">
              (Mouse over the icons to check for a corresponding github link!)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#75106A",
              color: "#fff",
              border: "2px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="Feb 2021 - Present"
            iconStyle={{
              background: "#4F4049",
              color: "#fff",
            }}
            icon={<WifiIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Dashboard - Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Toronto, ON (Remote)
            </h4>
            <p>
              <a
                href="https://www.dashboardsocialapp.com/"
                className="Portfolio__projects--link"
              >
                https://www.dashboardsocialapp.com/
              </a>
            </p>
            <p>Currently developing a social media app.</p>
            <p>
              React | SASS | React Router | MongoDB | Express | Axios |
              AGILE-SCRUM{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#75106A",
              color: "#fff",
              border: "2px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="December 2020"
            iconStyle={{
              background: "#4F4049",
              color: "#fff",
              cursor: "pointer",
            }}
            icon={<HomeIcon />}
            iconOnClick={() => openInNewTab("https://www.amay-sweets.com")}
          >
            <h3 className="vertical-timeline-element-title">
              Amay Sweets - Co-developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vancouver, BC (Contract)
            </h4>
            <p>
              <a
                href="https://amay-sweets.com/"
                className="Portfolio__projects--link"
              >
                https://amay-sweets.com/
              </a>
            </p>
            <p>Developed website for family-owned business in Vancouver</p>
            <p>React | Styled Components | React Reveal</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#75106A",
              color: "#fff",
              border: "2px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="Oct 2020 - Feb 2021"
            iconStyle={{
              background: "#4F4049",
              color: "#fff",
              cursor: "pointer",
            }}
            icon={<SchoolIcon />}
            iconOnClick={() =>
              openInNewTab("https://github.com/TjArevalo/Notes_to_NoOne")
            }
          >
            <h3 className="vertical-timeline-element-title">
              BrainStation - Student
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Toronto, ON (Remote)
            </h4>
            <p>Web Development Graduate</p>

            <p>Capstone Project: Notes to No-One</p>
            <a
              href="https://github.com/TjArevalo/Notes_to_NoOne"
              className="Portfolio__projects--link"
            >
              https://github.com/TjArevalo/Notes_to_NoOne
            </a>

            <p>
              HTML/CSS | Javascript | React | SASS | Styled Components | React
              Springs | Express | Axios | MySQL | Jest | Google Firebase |
              etc...
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#75106A",
              color: "#fff",
              border: "2px solid #fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date="July 2020"
            iconStyle={{
              background: "#4F4049",
              color: "#fff",
            }}
            icon={<ChildFriendlyIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              My Coding Journey Begins!
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vancouver, BC
            </h4>
            <p>Transitioned from audio engineering to software engineering</p>
            <p>Javascript | React</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

      <div className="Portfolio__contact">
        <div className="Portfolio__contactPhotoBox">
          <img src={Me} className="Portfolio__contactPhoto" />
        </div>
        <div className="Portfolio__contactInfo">
          <h3 className="Portfolio__contactHeader">Contact Me!</h3>
          <p className="Portfolio__contactLink">
            LinkedIn :{" "}
            <a
              className="Portfolio__link"
              href="https://www.linkedin.com/in/jamesyngson/"
            >
              https://www.linkedin.com/in/jamesyngson/
            </a>
          </p>
          <p className="Portfolio__contactLink">
            GitHub :{" "}
            <a className="Portfolio__link" href="https://github.com/TjArevalo">
              https://github.com/TjArevalo
            </a>
          </p>
          <p>
            Email :{" "}
            <a
              className="Portfolio__link"
              href="mailto:timothyjamesarevalo@gmail.com"
            >
              timothyjamesarevalo@gmail.com
            </a>
          </p>
          <div className="Portfolio__resume">
            <a
              className="Portfolio__emailLink"
              href="mailto:timothyjamesarevalo@gmail.com"
            >
              Email Me!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
