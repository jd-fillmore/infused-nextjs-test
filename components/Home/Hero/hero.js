import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import heroImg from "./../../../src/img/niagara-web-design-website.webp";
import best from "../../../src/img/best-rated.png";

const Hero = () => {
  return (
    <>
      <section className="main-hero">
        <Container>
          <div>
            <Row className="align-items-center">
              <Col lg="12">
                <Image src={best} alt="niagara web design company" />
                <h1 className="intro">
                  Niagara Web Design | Website Developer St. Catharines
                </h1>
                <h2>
                Creating Great Website Designs for Niagara's Businesses
                </h2>
                <p>
                  Infused Agency is an award-winning company that makes web designs to help Niagara businesses get more customers and sales.
                </p>
                <Link href="/work">
                  <button>Check Out Our Work</button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
