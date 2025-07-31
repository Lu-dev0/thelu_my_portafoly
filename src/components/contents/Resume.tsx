import React, { useEffect, useRef, useState } from "react";
const education = [
  {
    title: "Universidad Nacional Experimental Romulo Gallego",
    date: "2020 — 2024",
    description: "I am currently studying at this institution.",
  },
  {
    title: "bootcamp academlo",
    date: "2021",
    description: "Full stack specialization",
  },
  {
    title: 'Escuela Tecnica Industrial "Joaquin Avellan"',
    date: "2014 - 2020",
    description:
      "Specialization of medium-level technician in machines and tools",
  },
];
const experience = [
  {
    title: "Linktic - Full Stack Developer",
    date: "2024 - present",
    description:
      "I'm working as a Full Stack Developer, on projects such as personnel data integration, administrative and insurance applications, and government applications (CNE Colombia)",
  },
  {
    title: "Betabox technology - Full Stack Developer",
    date: "2023 - 2024",
    description:
      "I was a Full Stack Developer, in projects such as integration of administrative applications, creating mobile applications, additionally integrating and working with Microsoft Dynamics 365 ERP, Rest API with entity framework among others.",
  },
  {
    title: "Freelancer",
    date: "2020 - 2022",
    description: "I worked as a Freelancer, in the field of web development.",
  },
];
const skillLevels = [
  { name: "Frontend Developer", percent: 90, delTime: 10 },
  { name: "application developer", percent: 80, delTime: 10 },
  { name: "Backend Developer", percent: 95, delTime: 10 },
  { name: "Desiguer UX/UI", percent: 80, delTime: 10 },
  { name: "Web Desiguer", percent: 75, delTime: 10 },
];
export default function Resume() {
  const [isVisible, setIsVisible] = useState(false); // Para controlar la visibilidad
  const progressRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Activamos la animación cuando está visible
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);
  return (
    <article className="mb-16 sm:mb-[20px] sm:w-[520px] md:w-[700px] lg:w-[950px] m-auto  bg-[#1e1e1f] rounded-[20px] border border-[#383838] p-[15px] shadow-[-4px_8px_24px_#00000040] z-10 ease-in-out duration-1000  xl:w-auto">
      <header className="mb-[30px]">
        <h2 className="text-2xl relative  text-[#fafafa] font-bold ">Resume</h2>
        <div className="w-[30px] h-[2px] bg-custom-radial "></div>
      </header>
      <section className="mb-[30px]  ">
        <div className="flex items-center gap-4 mb-[25px]">
          <div className="relative bg-box-linear w-[30px] h-[30px] rounded-lg flex justify-center items-center text-[16px] z-10 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#c60842"
              // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path>
            </svg>
          </div>
          <h4 className="text-xl  text-[#fafafa] font-bold ">Experience</h4>
        </div>
        <ol className="text-sm ml-[45px] ">
          {experience.map((edu, index) => (
            <li
              key={index}
              className={`relative mb-[20px] after:absolute after:top-[5px] after:left-[-33px] after:h-[6px] after:w-[6px] after:bg-custom-radial after:rounded-[50%] after:shadow-[0px_0px_0px_4px_#383838] 
            ${
              index === experience.length - 1
                ? "last:mb-[20px]"
                : "before:absolute before:top-[-25px] before:left-[-30px]  before:w-[1px] before:h-[calc(100%_+_50px)] before:bg-[#383838] "
            } 
          `}
            >
              <h4 className="text-white font-bold">{edu.title}</h4>

              <span className="font-normal leading-3 text-[#c60842] max-sm:ml-[65px]">
                {edu.date}
              </span>

              <p className="text-[#d6d6d6]">{edu.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mb-[30px]  ">
        <div className="flex items-center gap-4 mb-[25px]">
          <div className="relative bg-box-linear w-[30px] h-[30px] rounded-lg flex justify-center items-center text-[16px] z-10 shadow-[-4px_8px_24px_rgba(0,0,0,0.25)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#c60842"
              // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"></path>
            </svg>
          </div>
          <h4 className="text-xl  text-[#fafafa] font-bold ">Education</h4>
        </div>
        <ol className="text-sm ml-[45px] ">
          {education.map((edu, index) => (
            <li
              key={index}
              className={`relative mb-[20px] after:absolute after:top-[5px] after:left-[-33px] after:h-[6px] after:w-[6px] after:bg-custom-radial after:rounded-[50%] after:shadow-[0px_0px_0px_4px_#383838] 
            ${
              index === education.length - 1
                ? "last:mb-[20px]"
                : "before:absolute before:top-[-25px] before:left-[-30px]  before:w-[1px] before:h-[calc(100%_+_50px)] before:bg-[#383838] "
            } 
          `}
            >
              <h4 className="text-white font-bold">{edu.title}</h4>

              <span className="font-normal leading-3 text-[#c60842] max-sm:ml-[65px]">
                {edu.date}
              </span>

              <p className="text-[#d6d6d6]">{edu.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className=" gap-[5px] mb-2">
        <header className="mb-[30px]">
          <h2 className="text-2xl relative  text-[#fafafa] font-bold ">
            My skills
          </h2>
          <div className="w-[30px] h-[2px] bg-custom-radial "></div>
        </header>
        <ul
          className="p-[20px] sm:p-[30px] sm:pt-[25px] relative pt-[45px] rounded-2xl bg-box-linear shadow-[0px_16px_30px_rgba(0,0,0,0.25)]"
          ref={progressRef}
        >
          {skillLevels.map((skill, index) => (
            
          <li key={index} className="mb-[25px]">
            <div className="flex items-center gap-[5px] mb-[8px]">
              <h5 className="text-white font-bold">{skill.name}</h5>
              {/* <data value="70" className="text-[#d6d6d6]">
                {skill.percent}%
              </data> */}
            </div>
            <div className="bg-[#383838] w-full h-[8px] rounded-[10px]">
              <div
                className={`h-full bg-custom-radial rounded-lg transition-all duration-1000 ease-out`}
                style={{ width: isVisible ? `${skill.percent}%` : "0%" }}
              ></div>
            </div>
          </li>
          ))}

        </ul>
      </section>
    </article>
  );
}
