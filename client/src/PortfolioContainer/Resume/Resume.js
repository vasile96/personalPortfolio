import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import EducationIcon from '../../assets/Resume/education.svg'
import WorkHistoryIcon from '../../assets/Resume/work-history.svg'
import ProgrammingSkillsIcon from '../../assets/Resume/programming-skills.svg'
import ProjectsIcon from '../../assets/Resume/projects.svg'
import InterestsIcon from '../../assets/Resume/interests.svg'

const Resume = (props) => {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
  
      Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});


  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: EducationIcon },
    { label: "Work History", logoSrc: WorkHistoryIcon },
    { label: "Programming Skills", logoSrc: ProgrammingSkillsIcon },
    { label: "Projects", logoSrc: ProjectsIcon  },
    { label: "Interests", logoSrc: InterestsIcon },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 55 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "React Native", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 5 },
    { skill: "Node JS", ratingPercentage: 10 },
    { skill: "Mongo Db", ratingPercentage: 5 },
    { skill: "Core Java", ratingPercentage: 5 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "GPT-3 ",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "First project that i made with React.",
      subHeading: "Technologies Used:  React Native, HTML, CSS, jQuery.",
    },
    {
      title: "Weather application ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "An simply weather application that allows you to check weather.",
      subHeading: "Technologies Used: RestAPI, HTML, CSS.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"EDX"}
        subHeading={"Introduction to HTML and JavaScript"}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"Analyst Programmer"}
        subHeading={
          "Ministry of National Education and Scientific Research, Romania"
        }
        fromDate={"2016"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Constantin Angelescu, Romania"}
        fromDate={"2011"}
        toDate={"2015"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ursu Technogy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently taking designs from figma and convert them to Web
            Applications.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an site from scratch .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="I am an enthusiastic code writer and i belive that sharing our skills with others is crucial to develop a reliable IT society. Thats why from a junior position i am already thinking about sharing my future knowledge throut teching in several years."
      />
      <ResumeHeading
        heading="Music"
        description="Music is my passion, that's why interpreting it in my own way through dj-ing not only satisfies me, but also has been proven as good way to increase both, mine and overs productivity and good mood."
      />
      <ResumeHeading
        heading="Walking"
        description="I really enjoy long walks because during them you can clear your mind and make space for the great ideas to come in."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
