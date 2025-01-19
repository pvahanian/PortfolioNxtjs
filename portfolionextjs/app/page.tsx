import React from "react";
import projects from "./projectData";
import Image from "next/image";

export default function Home() {

  return (
    <div className="app-container">
      <section className="bio">
        <div className="titlediv">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h1>Hello, I'm Pablo.<br></br></h1>
          <h3>Software Engineer II</h3>
          <a
            className="contactme"
            href="mailto:pablo.vahanian@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>Contact me </span>
          </a>

        </div>

        <div className="shortbio">
          <p> I have professional experience working with <strong className="bold">React, Material-UI</strong> and
            <strong className="bold"> Node.js</strong>.
          </p>
          <br></br>
          <p>Coding is a never-ending journey and I enjoy learning new technologies like
            <strong className="bold"> Firebase,Python,TypeScript </strong> and <strong className="bold">Next.js</strong>.  Check out my projects below.
          </p>
        </div>
      </section>
      <div className="divborder"></div>
      <div className="homegrey">
        <section className="projects">
          <h2 className="projects-title">Projects</h2>
          {projects.map((project, index) => {
            return (
              <div key={`${index}-project`}
                className={`zoom ${project.color}`}
              >
                <div className="zoom-inner">
                  <h2>{project.name}</h2>
                  <h3>{project.shortDescription}</h3>
                  <div className="whitetech">
                    {project.technologies.map((tech, index) => {
                      return <Image title={tech.name} src={tech.techUsed} alt="technology icon" key={`${index}-image`} width={45} height={45} />;
                    })}
                  </div>
                </div>
                <Image
                src={project.bannerImage}
                alt={`Banner for ${project.name}`}
                width={640}
                height={430}
              />
              </div>
            );
          })}
        </section>
      </div>
      <div className="divborder"></div>
    </div>
  );
}