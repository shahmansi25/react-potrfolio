import React from "react";
import data from "../asset/data.json";

const Timeline = () => {
  return (
    <div id="experience">
      <div className="timelineBox">
        {data.experience.map((item, index) => (
          <TimelineItem
            heading={item.role}
                text={item.start_date}
                company ={item.company}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index ,company}) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
            <p></p>
            <p>{company} ({text})</p>
    </div>
  </div>
);

export default Timeline;