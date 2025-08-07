import React from "react";
import HomeIcon from "./Assets/Home.svg";
import AboutIcon from "./Assets/About.svg";
import ProjectIcon from "./Assets/Projects.svg";
import ContactIcon from "./Assets/Contact.svg";
import LinkdinIcon from "./Assets/Linkdin.svg";
import GitHubIcon from "./Assets/GitHub.svg";
import "./App.css";
import Skill from "./Components/Skill";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import project from "./Assets/project1.png";
import pfp from "./Assets/profile.jpg";
import ContactForm from "./Components/ContactForm";
import { motion } from "framer-motion";

const paths = [
  { name: "Home", path: "#Home", icon: HomeIcon },
  { name: "About", path: "#About", icon: AboutIcon },
  { name: "Project", path: "#Project", icon: ProjectIcon },
  { name: "Contact", path: "#Contact", icon: ContactIcon },
  {
    name: "Linkdin",
    path: "https://www.linkedin.com/in/akshaj-rawat-436a84314/",
    icon: LinkdinIcon,
  },
  { name: "GitHub", path: "https://github.com/akshajrawat", icon: GitHubIcon },
];

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-light.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
];

const skillspj = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
];

const delay = 0.1;
function App() {
  return (
    <div id="Home" className="bg-[#0a0a0a] text-white relative p-3">
      {/* Home section begins */}
      <nav className="flex items-center justify-center w-full h-[60px] sticky top-0 left-0 z-50 bg-[#0a0a0acb]">
        <motion.ul
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-around items-center border border-[#ffffff51] w-[270px] h-[44px] rounded-full bg-[#0a0a0a]"
        >
          {paths.map((item, index) => {
            return (
              <li
                key={index}
                className="group relative flex flex-col items-center"
              >
                <a
                  href={item.path}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 group-hover:scale-110 group-hover:bg-white/10"
                >
                  <img
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className="h-[18px] invert"
                  />
                </a>
                <span className="absolute top-[42px] bg-white text-black text-[12px] px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-medium">
                  {item.name}
                </span>
              </li>
            );
          })}
        </motion.ul>
      </nav>

      <div className="h-[100vh] max-w-[100vw] flex-col">
        <div className="h-[68%] flex flex-col justify-start items-center w-full p-4 gap-2 xl:gap-5 mt-12 lg:mt-18">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay }}
            className="shinning   text-xs border-[#ffffff51] border flex justify-center items-center rounded-full px-4 py-2 whitespace-nowrap relative overflow-hidden lg:py-3"
          >
            Actively Seeking Job Opportunities
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay * 2 }}
            className="text-4xl lg:text-6xl lg:w-[80%] xl:w-[65%] font-bold text-center flex h-[144px] justify-center items-center"
          >
            Crafting Beautiful & Functional Web Experiences
          </motion.h1>
          <motion.h4
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay * 3 }}
            className="text-center font-medium h-[72px] lg:text-xl lg:w-[80%] xl:w-[55%]"
          >
            Hey, I'm Akshaj Rawat, a Full Stack Developer passionate about
            building performant, user-friendly, and scalable applications.
          </motion.h4>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mt-12  lg:text-xl">
            <motion.a
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: delay * 2 }}
              href="https://www.linkedin.com/in/akshaj-rawat-436a84314/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[311px] h-[37px] border border-[#ffffff51] flex justify-center items-center rounded-full whitespace-nowrap lg:w-[182px] lg:h-[45px]
             transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10"
            >
              👋 Let's Connect
            </motion.a>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5, ease: "easeOut", delay: delay * 2 }}
              className="w-[311px] h-[37px] border border-[#ffffff51] flex justify-center items-center rounded-full whitespace-nowrap lg:w-[182px] lg:h-[45px]
             transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/10"
            >
              My Resume 👇
            </motion.div>
          </div>
        </div>

        <div className="w-full h-25 z-10 relative overflow-hidden  before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#1a237e,transparent_80%)] before:opacity-60  [mask-image:radial-gradient(60%_60%,white,transparent)]">
          <div className=" w-[200%] absolute z-20 h-200 top-1/2 -left-1/2 border-t-4 border-t-[#d0e8ff] bg-[#0a0a0a] rounded-[100%] shadow-[inset_0_2px_20px_#d0e8ff,0_-10px_50px_1px_#d0e8ffb3]"></div>
        </div>
      </div>
      {/* Home section ends */}
      {/* About section begins */}
      <div
        id="About"
        className=" max-w-[100vw] flex flex-col justify-start items-center"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay * 2 }}
          className="mt-15 flex flex-col justify-center items-center"
        >
          <p> GET TO KNOW ME </p>
          <p className="glow text-3xl lg:text-5xl font-bold flex">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span className="ml-3">M</span>
            <span>e</span>
          </p>
        </motion.div>
        <div className="flex flex-col justify-center items-center lg:flex-row w-full lg:mt-10">
          {/* left section */}
          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay * 3 }}
            className="w-[90%] flex flex-col justify-start items-center px-4 mt-12 lg:mt-0 lg:w-[40%] "
          >
            <div className="w-[170px] h-[170px] rounded-full bg-black border-[#ffffff51] border overflow-hidden">
              <img className="w-full h-full object-cover" src={pfp} alt="" />
            </div>
            <p className="text-center mt-3 pb-4 lg:w-[60%]">
              I'm a passionate Full-Stack Developer who loves building dynamic,
              user-friendly applications. I thrive on solving problems, creating
              seamless experiences, and continuously expanding my skills. Always
              eager to learn and grow, I'm currently looking for new
              opportunities to contribute and innovate.
            </p>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay * 3 }}
            className="h-[500px] w-[343px] px-2 border-t border-[#ffffff51] lg:w-[60%] lg:border-l lg:border-t-0 lg:px-10 "
          >
            <div className="w-[327px] lg:w-full xl:w-[90%] py-3  ">
              <h1 className=" font-semibold text-xl flex justify-start items-center h-[28px] mb-1">
                Education
              </h1>
              <p className="w-full flex justify-between items-center  text-sm ">
                <span className="font-medium"> Enter University Name </span>
                <span> Enter Date </span>
              </p>
              <p className="w-full flex justify-between items-center text-sm ">
                <span> Enter Stream </span>
                <span> Enter CGPA </span>
              </p>
            </div>

            <div className="w-[327px] lg:w-full xl:w-[90%] py-3 border-t border-[#ffffff51] ">
              <h1 className=" font-semibold text-xl flex justify-start items-center h-[28px] mb-1">
                Experience
              </h1>
              <p className="w-full flex justify-between items-center  text-sm ">
                <span className="font-medium"> Enter Your job role </span>
                <span> Enter Date </span>
              </p>
              <p className="w-full flex justify-between items-center text-sm ">
                <span> Enter Your job role </span>
                <span> Enter Date </span>
              </p>
              <div className="  border-l-3 border-white h-[40px] text-sm px-4 mt-3">
                Enter what you have done in your designated roles{" "}
              </div>
              <div className=" border-l-3 border-white h-[40px] text-sm px-4 mt-3">
                Enter what you have done in your designated roles
              </div>
              <div className=" border-l-3  border-white h-[40px] text-sm px-4 mt-3">
                Enter what you have done in your designated roles
              </div>
            </div>

            <div className="w-[327px] lg:w-full xl:w-[90%] py-3 border-t border-[#ffffff51] ">
              <h1 className=" font-semibold text-xl flex justify-start items-center h-[28px] mb-1">
                Tech Stacks
              </h1>
              <div className="flex flex-wrap gap-1 mt-1">
                {skills.map((item, index) => {
                  return (
                    <Skill key={index} name={item.name} icon={item.icon} />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* About section ends */}

      {/* Projects section start */}
      <div
        id="Project"
        className=" max-w-[100vw] flex flex-col justify-start items-center"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay * 2 }}
          className="mt-15 flex flex-col justify-center items-center"
        >
          <p> EXPLORE MY CREATIONS </p>
          <p className="glow text-3xl font-bold flex lg:text-5xl">
            <span>P</span>
            <span>r</span>
            <span>o</span>
            <span>j</span>
            <span>e</span>
            <span>c</span>
            <span>t</span>
            <span>s</span>
          </p>
        </motion.div>
        {/* project display */}
        <div className="w-full p-3 mt-4">
          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay * 3 }}
            className="border border-[#ffffff51] rounded-xl w-full lg:w-[80%] lg:mx-auto p-4"
          >
            <h2 className="text-xl font-bold border-b border-[#ffffff51] py-3">
              Full stack app
            </h2>
            <div className=" font-semibold flex flex-col gap-2 py-2">
              <h3>Full Stack Auth System with JWT & Activity Logging</h3>
              <p className="text-sm">
                - Secure authentication with JWT, stored in HTTP-only cookies.
              </p>
              <p className="text-sm">
                - Centralized async error handling with custom middleware.
              </p>
              <p className="text-sm">
                - User dashboard with login activity logs; admin panel lists all
                users.
              </p>
              <p className="text-sm">
                - Built with modular folder structure, reusable token utilities,
                and dynamic React forms.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-1">
              {skillspj.map((item, index) => {
                return <Skill key={index} name={item.name} icon={item.icon} />;
              })}
            </div>

            {/* links */}
            <div className="w-full flex justify-start items-center gap-3 mt-4">
              <div className="h-[37px] w-[107px] flex gap-1 justify-center items-center border border-[#ffffff51] rounded-xl hover:scale-105 hover:bg-white/10">
                <FaGithub />
                <a href="https://github.com/akshajrawat/fullstack-auth-app">
                  GitHub
                </a>
              </div>
              <div className="h-[37px] w-[107px] flex gap-1 justify-center items-center border border-[#ffffff51] rounded-xl hover:scale-105 hover:bg-white/10">
                <a href="https://authapp-uco0.onrender.com/">Live Site</a>
                <FaExternalLinkAlt />
              </div>
            </div>

            {/* image */}
            <div className="w-full rounded-xl overflow-hidden mt-4">
              <img
                className="w-full h-full object-cover"
                src={project}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* project section end  */}
      {/* contact section start  */}
      <div
        id="Contact"
        className="max-w-[100vw] w-full flex flex-col justify-start items-center px-4 py-10"
      >
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5, ease: "easeOut", delay: delay * 2 }}
          className="mt-15 flex flex-col justify-center items-center"
        >
          <p> GET IN TOUCH </p>
          <p className="glow text-3xl lg:text-5xl font-bold flex">
            <span>C</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
            <span className="ml-3">M</span>
            <span>e</span>
          </p>
        </motion.div>

        {/* Contact Form Box */}
        <ContactForm />
      </div>
      {/* contact section end  */}
      {/* footer section start  */}
      <footer className="w-full mt-10 border-t border-[#ffffff51] py-4 px-4 text-center text-sm text-gray-400 flex flex-col gap-10 sm:flex-row sm:justify-center sm:items-center">
        <p>© 2025 Akshaj Rawat. All rights reserved.</p>
        <p className="text-xs sm:text-sm">
          Portfolio inspired by Avinash Singh
        </p>
      </footer>
      {/* footer section end */}
    </div>
  );
}

export default App;
