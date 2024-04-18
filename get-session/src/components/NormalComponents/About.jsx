import React from "react";

const About = (props) => {
  return (
    <>
      <div style={{ backgroundColor: "#333132" }} className="p-6">
        <div className="w-[60%]">
            <div className="pl-[100px]">
            <h3 className="text-green-400 text-lg font-bold pt-10 pb-10">
                <span className="mr-2">&mdash;&mdash;</span>
                {props.heading}
            </h3>
            <p className="text-white text-4xl leading-snug">{props.paragraph}</p>
            </div>

            <div className="pl-[100px] my-9">
              <iframe
              className = "w-[100%] h-72"
                  title="video"
                  src="/720p.mp4"
                  frameborder="0"
                  allowfullscreen>
              </iframe>
            </div>
            </div>
      </div>
    </>
  );
};

export default About;
