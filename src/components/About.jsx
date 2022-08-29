import React from "react";
import AboutCard from "./AboutCard";

/* Dummy data for price and title */
const data = [
  {
    id: 1,
    title: "100%",
    subtitle: "Completion",
  },
  {
    id: 2,
    title: "24/7",
    subtitle: "Delivery",
  },
  {
    id: 3,
    title: "100K",
    subtitle: "Transactions",
  },
];

const About = () => {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Lorem ipsum color amet consecteruq, adipisicing elit. Conmque
            adipisicing elit. Conmque adipisicing elit. Conmque adipisicing
          </p>
          <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
            {data.map((item) => (
              <AboutCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
