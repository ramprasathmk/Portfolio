import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keylogger from "../../Assets/Projects/keylogger.png";
import faceDetection from "../../Assets/Projects/face-detection.png";
import poetApp from "../../Assets/Projects/poet-app.png";
import musicPlayer from "../../Assets/Projects/music-player.png";
import softwareManagementSystem from "../../Assets/Projects/spms-app.png";
import microblogApp from "../../Assets/Projects/microblogging-app.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicPlayer}
              isBlog={false}
              title="Simple Python Music player"
              description="In this article, you will see how to build a simple yet functional music player using two powerful Python libraries: Tkinter and Pygame. Tkinter will help us create the graphical user interface (GUI), while Pygame will handle the music playback."
              ghLink="https://github.com/ramprasathmk/Simple-Python-Music-Player"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceDetection}
              isBlog={false}
              title="Automatic Attendance System using Face Recognition"
              description="An Automatic Attendance System using Face Recognition is a new way for companies to keep track of when their employees come to work and when they leave."
              ghLink="https://github.com/ramprasathmk/Automatic-Attendance-System-using-Face-Recognition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={softwareManagementSystem}
              isBlog={false}
              title="Software Personnel Management System"
              description="The Software Personnel Management System is a software, that helps your employees to give their best efforts every day to achieve the goals of your organization. It guides and manages employees efforts in the right direction. It also securely stores and manages personal and other work-related details for your employees."
              ghLink="https://github.com/ramprasathmk/Software-Personnel-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keylogger}
              isBlog={false}
              title="Keylogger"
              description="Keylogger is a Python-based project designed to capture and log keystrokes. It demonstrates how key-logging can be used for various purposes, such as monitoring typing activity for research, troubleshooting keyboard issues, or learning how keyloggers work for cybersecurity education."
              ghLink="https://github.com/ramprasathmk/keylogger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microblogApp}
              isBlog={false}
              title="Microblog App"
              description="A microblog app is a mobile application that allows users to share short, concise messages or updates with others, typically limited to a specific character count, enabling quick and frequent communication on a variety of topics, similar to platforms like Twitter where users post 'tweets'S to share news, thoughts, and opinions with their followers"
              ghLink="https://github.com/ramprasathmk/microblog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poetApp}
              isBlog={false}
              title="Poet App"
              description="A 'Poet app' is designed to assist users in writing poetry, typically offering features like rhyme suggestion, thesaurus access, different poetic form structures, and a user-friendly interface to compose and edit poems on the go.  It is a simple web application that allows users to post, edit, and delete quotes. The application is built using Node.js and MongoDB"
              ghLink="https://github.com/ramprasathmk/poet-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
