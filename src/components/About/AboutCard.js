import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <p /> I am a full-stack developer with 5+ years of experience having worked on a dozen high-impact market-supporting projects developed 
            around agile Scrum methodology and deployed on cloud infrastructures with 50,000+ users. 
            <br/>
            I am versatile with intervention both in the back end with technologies like Java, NodeJs, and Python and front end with technologies like Angular, React.
             I have a solid knowledge of Docker, Kubernetes, Helm, and Terraform too.
            <p />
            <p>
            One of my favorite exercises is modeling and implementing BPM solutions. I use <span className="purple"> Camunda BPM</span> for this task
            </p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing football
            </li>
            <li className="about-activity">
              <ImPointRight /> Coaching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovate and improve the living conditions of users"{" "}
          </p>
          <footer className="blockquote-footer">Rodrigue</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
