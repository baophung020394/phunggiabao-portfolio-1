import React from "react";
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { projects } from "../contants";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Projects = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  return (
    <section className="max-container">
      {alert.show && (
        <div className=" fixed top-0 w-[100%] left-0">
          <Alert {...alert} />
        </div>
      )}
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I have been involved in numerous projects, primarily focused on
        ecommerce and real estate. I've also worked on projects related to
        gaming on e-wallets, chat rooms, and stock information. Currently, I can
        work as a MERN stack developer with proficient skills in Node.js,
        React.js, PostgreSQL, MongoDB, Docker, and Kubernetes. If you need me, I
        am committed to delivering the highest value for the product!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              {project?.description.map((text, index) => (
                <p className="mt-2 text-slate-500" key={index}>
                  {text}
                </p>
              ))}

              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link === "none" ? "/projects" : project.link}
                  target={`${project.link === "none" ? "_self" : "_blank"}`}
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                  onClick={() => {
                    if (project.link === "none") {
                      showAlert({
                        //  @ts-ignore
                        show: true,
                        text: "The project is internal, so there is no live link available.😃",
                        type: "success",
                      });

                      setTimeout(() => {
                        //  @ts-ignore
                        hideAlert(false);
                        //  @ts-ignore
                      }, [3000]);
                    }
                  }}
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
