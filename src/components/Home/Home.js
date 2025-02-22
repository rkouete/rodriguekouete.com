import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-pic.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} className="text-center">
            <div className="image-wrapper">
              <div className="image-container">
                <img
                  src={myImg}
                  alt="Rodrigue KOUETE"
                  className="profile-image"
                />
              </div>
            </div>

            <div className="content-wrapper">
              <span className="header-badge">DevOps Engineer</span>

              <h1 className="main-heading">
                <span className="greeting">Hi, I am</span>
                <span className="name">Rodrigue KOUETE</span>
                <span className="tagline">
                  Crafting scalable solutions with DevOps & BPM expertise
                </span>
              </h1>

              <p className="description">
                I'm a DevOps Engineer with 8+ years of experience in cloud
                architecture and software development. Expert in Python and Java
                development, with a passion for Business Process Management
                (Camunda, Airflow). Specializing in microservices, AWS cloud
                infrastructure, and DevOps practices including containerization
                (Docker, K8s) and infrastructure as code.
              </p>

              <div className="social-links">
              <button
                  type="button"
                  className="social-link"
                  onClick={() => window.open("https://github.com/rkouete", "_blank")}
                >
                  <AiFillGithub />
                </button>

                <button
                  type="button"
                  className="social-link"
                  onClick={() => window.open("https://www.linkedin.com/in/rodrigue-kouete-790501129/", "_blank")}
                >
                  <FaLinkedinIn />
                </button>
                <Link to="/contact" className="primary-btn">
                  Let's Talk
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
