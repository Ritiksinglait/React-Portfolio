import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import socialmedia from "../../Assets/Projects/Social-media.png";
import player from "../../Assets/Projects/player2.png";
import clear from "../../Assets/Projects/clear.png";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import beverages from "../../Assets/Projects/chaaorkaffi.png"

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
              imgPath={beverages}
              isBlog={false}
              title="Chaa Or Kaffi"
              description="A Front-End user-friendly project for beverage lovers.
               This project comprises of amazing new trending features like FAQs, review section and much more.
               This project is made without any utility classes"
              ghLink="https://github.com/Ritiksinglait/chaaii-frontend"
              demoLink="https://ritiksinglait.github.io/chaa-or-kafii/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmedia}
              isBlog={false}
              title="Codeial"
              description="Global Chat Room or Workspace to share resources and hangout with friends build with NodeJS, MongoDB,ExpressJS. Have features which allows user for realtime messaging,  posting any texts as well as supports reactions on messages via commenting on them and even liking them too."
              
              demoLink="https://codeial.ga/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={player}
              isBlog={false}
              title="Music Player"
              description="
              An Interactive, user-friendly front end project build completely with HTML AND CSS without using any utility classes.
               A perfect spot for all the  music lovers 😍 
               This project comprises of many features, like animations, queues, top-rated, recently played and much more.
              "
              ghLink="https://github.com/Ritiksinglait/Music-Player"
              demoLink="https://ritiksinglait.github.io/Music-Player/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clear}
              isBlog={false}
              title="MY-TODO"
              description="A task scheduler web app. User can store his/her tasks in app for remainder of that tasks till whenever he/she wants . This web app is build using NodeJS and MongoDB "
              ghLink="https://github.com/Ritiksinglait/ToDo-WebApp"
              demoLink="https://task-scheduler-webapp.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-KART"
              description="This is a module of a complete E-commerce Website build with ReactJS ,Firebase.In E-Kart user can add or delete the products that he/she wants to buy in future."
              ghLink="https://github.com/Ritiksinglait/e-commerce-website"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
