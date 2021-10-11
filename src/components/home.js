import React from "react";
import Dp from "./../img/PortfolioDp.jpeg";
import frontEnd from "./../img/front-end.png";
import react from "./../img/react.png";
import mernStack from "./../img/programmer.png";

import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
const body = () => {
  return (
    <div>
      <section className="bg-dark text-light d-sm-flex p-5 text-center text-sm-start">
        <div className="container d-sm-flex">
          <div className="mt-5 w-75 ">
            <div className="autoWritter">
              <h1 className="autoWrite-text fw-bold ">Hey! I am Shaharyar</h1>
              <p className=" fw-bold my-3">
                Currently pursuing comprehensive four-year course of study in
                Bachelor of science in software engineering
              </p>
              <Link
                className="scale-up-top btn btn-outline-danger btn-lg fw-bold mt-3"
                to="/contact"
              >
                Hire Now
              </Link>
            </div>
          </div>
          <div className=" d-flex justify-content-end">
            <img
              className="img-fluid  w-50  w-sm-25 d-none d-md-block "
              src={Dp}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>
      <section className="container bg-light border shadow-sm p-3 mb-5  rounded py-5 my-5">
        <h1 className="fw-bold text-center">My Skills</h1>
        <div className="container d-sm-flex  justify-content-center mt-4">
          <div className="row px-4">
            <div className="col-6 w-100 mx-2">
              <p className="fw-bold">HTML</p>
              <ProgressBar variant="info" now={90} label="90%" />
            </div>
            <div className="col-6 w-100 mx-2">
              <p className="fw-bold">CSS</p>
              <ProgressBar variant="primary" now={85} label="85%" />
            </div>
          </div>
          <div className="row px-4 ">
            <div className="col-6 w-100 mx-2">
              <p className="fw-bold">JavaScript</p>
              <ProgressBar variant="danger" now={85} label="85%" />
            </div>
            <div className="col-6 w-100 mx-2">
              <p className="fw-bold">React Js</p>
              <ProgressBar variant="info" now={85} label="85%" />
            </div>
          </div>
          <div className="row px-4">
            <div className="col-6 w-100 mx-2">
              <p className="fw-bold">Mern Stack</p>
              <ProgressBar variant="warning" now={65} label="65%" />
            </div>
            <div className="col-6 w-100 mx-2">
              <p className="fw-bold">Bootstrap</p>
              <ProgressBar variant="primary" now={95} label="95%" />
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              MERN Stack Developer
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Being a web developer is always difficult. It’s a creative job,
              but one where usually you aren’t the primary stakeholder.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <img src={frontEnd} alt="" srcset="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Front End Web Developer
                </h2>
                <p class="leading-relaxed text-base">
                  Front-end web development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website br or Web Application so that a user
                  can see and interact with them directly. It is also called UI
                  development among some developers.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <img src={react} alt="" srcset="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  React Developer
                </h2>
                <p class="leading-relaxed text-base">
                  React makes it simple and easy to build websites and apps,
                  create UI test cases, reuse existing codes on website to its
                  mobile counterpart, and improve UI and performance of web
                  applications. It’s versatile enough to use where JavaScript is
                  required
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <img src={mernStack} alt="" srcset="" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Mern Stack
                </h2>
                <p class="leading-relaxed text-base">
                  MERN stands for MongoDB, Express, React, Node, after the four
                  key technologies that make up the stack. MongoDB - document
                  database. Express(.js) - Node.js web framework. React(.js) - a
                  client-side JavaScript framework. Node(.js) - the premier
                  JavaScript web server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default body;
