import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from 'react-router-dom';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Ramprasath M K </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I'm currently pursuing my Bachelor's in Information Technology at <Link className='purple' to="https://aamec.edu.in">AAMEC</Link>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A Myth is a Myth until you experiencing it!"{" "}
          </p>
          <footer className="blockquote-footer">Ramprasath M K</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
