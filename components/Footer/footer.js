import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const pages = [
  {
    id: 1,
    name: "Services",
    link: "/services",
  },
  {
    id: 2,
    name: "Work",
    link: "/work",
  },
  {
    id: 3,
    name: "Reviews",
    link: "/reviews",
  },
  {
    id: 4,
    name: "Cities",
    link: "/cities",
  },
  {
    id: 5,
    name: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <h3>Infused Agency</h3>
              <p>
                Infused is a boutique web design &amp; SEO company. We help
                local and non-local businesses build their credibility online,
                as well as help bring in more sales.
              </p>
              <p>
                Follow us on{" "}
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/infusedweb/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
            </Col>
            <Col lg="2">
              <h3>Pages</h3>
              <ul>
                {pages.map((page) => (
                  <li key={page.id}>
                    <Link href={page.link}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/web-design">Lead-Generating Web Design</Link>
                </li>
                <li>
                  <Link href="/website-conversion-optimization">
                    Website Conversion Optimization
                  </Link>
                </li>
                <li>
                  <Link href="/niagara-seo-company">
                    Search Engine Optimization
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <h3>Contact</h3>
              <a
                href="https://calendly.com/infused-agency/project-discovery/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Get Free Quote</strong>
              </a>
              <br />
              <br />
              <h3>Hours</h3>
              <ul>
                <li>Monday - 9a.m.-6p.m.</li>
                <li>Tuesday - 9a.m.-6p.m.</li>
                <li>Wednesday - 9a.m.-6p.m.</li>
                <li>Thursday - 9a.m.-6p.m.</li>
                <li>Friday - 9a.m.-6p.m.</li>
                <li>Saturday - Closed</li>
                <li>Sunday - Closed</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
