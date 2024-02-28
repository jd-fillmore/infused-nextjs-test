import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Industries from "../Footer/industries-modal";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blog",
    link: "/posts",
  },
];

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <h3>About</h3>
              <p>
                Infused is a Niagara web design &amp; St. Catharines SEO
                company. We help local and non-local businesses build their
                credibility online, as well as help bring in more sales.
              </p>
              Follow us on{" "}
              <a
                rel="noreferrer"
                href="https://www.instagram.com/infusedweb/"
                target="_blank"
              >
                Instagram
              </a>
            </Col>
            <Col lg="2">
              <h3>Pages</h3>
              <ul>
                {pages.map((page) => (
                  <li>
                    <Link href={`${page.link}`}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link href="/web-design">Web Design & Development</Link>
                </li>
                <li>
                  <Link href="/wordpress-developer-niagara">
                    WordPress Development
                  </Link>
                </li>
                <li>
                  <Link href="/niagara-seo-company">SEO</Link>
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
              <a href="mailto:hello@infused.agency">hello@infused.agency</a>
              <br />
              <a class="phone" href="tel:(905) 933-3115">
                (905) 933-3115
              </a>
              <br />
              <br />
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <h3>Areas Served</h3>
              <p className="subtitle">SEO</p>
              <Link href="/beamsville-seo-company">Beamsville SEO</Link>,{" "}
              <Link href="/crystal-beach-seo-company">Crystal Beach SEO</Link>,{" "}
              <Link href="/fonthill-seo-company">Fonthill SEO</Link>,{" "}
              <Link href="/fort-erie-seo-company">Fort Erie SEO</Link>,{" "}
              <Link href="/grimsby-seo-company">Grimsby SEO</Link>,{" "}
              <Link href="/niagara-seo-company">Niagara SEO</Link>,{" "}
              <Link href="/port-colborne-seo">Port Colborne SEO</Link>,{" "}
              <Link href="/stoney-creek-seo">Stoney Creek SEO</Link>,{" "}
              <Link href="/seo-st-catharines">St. Catharines SEO</Link>,{" "}
              <Link href="/thorold-seo-company">Thorold SEO</Link>,{" "}
              <Link href="/wainfleet-seo">Wainfleet SEO</Link>,{" "}
              <Link href="/waterdown-seo">Waterdown SEO</Link>,{" "}
              <Link href="/welland-seo-company">Welland SEO</Link>.
              <p className="subtitle">Web Design</p>
              <Link href="/beamsville-web-design">
                Beamsville Web Design
              </Link>,{" "}
              <Link href="/crystal-beach-web-design">
                Crystal Beach Web Design
              </Link>
              , <Link href="/fonthill-web-design">Fonthill Web Design</Link>,{" "}
              <Link href="/fort-erie-web-design">Fort Erie Web Design</Link>,{" "}
              <Link href="/grimsby-web-design">Grimsby Web Design</Link>,{" "}
              <Link href="/port-colborne-web-design">
                Port Colborne Web Design
              </Link>
              ,{" "}
              <Link href="/stoney-creek-web-design">
                Stoney Creek Web Design
              </Link>
              , <Link href="/thorold-web-design">Thorold Web Design</Link>,{" "}
              <Link href="/wainfleet-web-design">Wainfleet Web Design</Link>,{" "}
              <Link href="/waterdown-web-design">Waterdown Web Design</Link>,{" "}
              <Link href="/web-design-welland">Welland Web Design</Link>.
              <br />
              <br />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.712155786024!2d-79.21034682336128!3d43.152573384665175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3507111975161%3A0x18a1198be6280a70!2sInfused%20Agency%20%7C%20SEO%2C%20Web%20Design%20%26%20Development%2C%20Digital%20Marketing%20in%20Niagara%2C%20St.%20Catharines!5e0!3m2!1sen!2sca!4v1708489639093!5m2!1sen!2sca"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col lg="4">
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
