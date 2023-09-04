import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/profile-pic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            Hello, I am
            <h1 style={{ fontSize: "2.6em" }}>
              Rodrigue <b className="purple"> KOUETE </b>
            </h1>
            <h5> Software consultant from Douala, Cameroon</h5>
            <p className="home-about-body">
              I'm very passionate and dedicated to my work.
              With 6 years of experience as software developer,
              I have designed and developed services for customers of all sizes.

              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web/Desktop Technologies and Products </b> and
                also in areas related to &nbsp;
                <b className="purple">
                  Business Process Management (BPM).
                </b>
              </i>
            </p>

            <Link to="/about">
            <Button
                          variant="primary"
                          style={{ maxWidth: "250px", marginTop: "25px"}}
                        >
                        Learn more
                  </Button>
            </Link>

            <a href="/about" target="_blank" rel="noreferrer">
                  
          </a>
        

           

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8}></Col>
          <Col md={4} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rkouete"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rodrigue-kouete-790501129/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                 <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home;
