import React, { useState } from "react";
function ProCards() {
  const [project] = useState([
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
    {
      name: "Eager",
      description: "Real-time website using real-time API to fetch data from",
      link: "https://eager-morse-9c95b7.netlify.app",
    },
  
  ]);

  return (
    <section id="proj" className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center my-10">
          Single Page Applications
        </p>

        <div className="flex flex-wrap -m-4 text-center">
          {project.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <a href={item.link} target="blank">
                    <div className="bg-white border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      <img
                        src="https://miro.medium.com/max/1200/1*7fXfXk2_d5t3_NHUMP-ZmQ.jpeg"
                        alt="pro"
                      />

                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        {item.name}
                      </h2>
                      <p className="leading-relaxed">{item.description}</p>
                    </div>
                  </a>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProCards;
