import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import { Helmet } from "react-helmet";
import Nav from "../../components/Nav/nav";
import InnerHero from "../../components/innerHero/innerHero";
import InnerContent from "../../components/innerContent/innerContent";
import CTA from "../../components/CTA/cta";
import Footer from "../../components/Footer/footer";
import website from "../img/niagara-seo-company.webp";
import treeImg from "../img/tree-reports.png";
import kdImg from "../img/niagara-web-design.png";
import cassImg from "../img/featured-seo.png";
import bgImage from "../img/inner-seo.jpg";
import about from "../img/about.jpg";
import About from "../../components/Home/About/about";

const SEO = () => {
  return (
    <>
      <Helmet>
        <title>Niagara SEO | Best Niagara SEO Company - Infused Agency</title>
        <meta
          name="description"
          content="Niagara's Best SEO Company. We deliver measurable impact for our clients through our search engine optimization services, bringing you more leads."
        />
        <link rel="canonical" href="https://infused.agency/niagara-seo-company" />
      </Helmet>
      <Nav />
      <InnerHero
        title="Niagara SEO Company"
        description="Infused Agency is an award-winning SEO company in Niagara. We help businesses bring in more revenue through their websites."
        bgImage={bgImage}
      />
      <InnerContent>
        <section className="seo-page">
          <Container>
            <Row className="web pd-btm-80">
              <Col md="4">
                <Image
                  className="img-fluid"
                  src={website}
                  alt="niagara seo company, niagara seo agency, niagara seo services"
                />
              </Col>
              <Col lg={{ size: 7, offset: 1 }}>
                <p>
                  The <strong>Niagara SEO services</strong> that our <strong>Niagara SEO company</strong> provides are
                  pretty impeccable. We consistently provide great SEO services to our clients with pretty awesome
                  results. There are a lot of benefits as to why SEO services are so important for any local company:
                </p>
                <ul>
                  <li>Bring in more customers through organic search.</li>
                  <li>Creates a trustworthy experience for potential customers.</li>
                  <li>Improves your Niagara brand's awareness.</li>
                  <li>It's trackable.</li>
                </ul>
                <p>
                  When you utilize SEO services from our company and end up ranking on the first of Google, it's a great
                  way to increase your company's revenue.
                </p>
              </Col>
            </Row>
          </Container>
          <section className="results">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Our Niagara SEO Clients <span>Get Results</span>
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <div className="card">
                    <Image className="img-fluid" src={treeImg} alt="treereports" />
                    <h4>TreeReports</h4>
                    <p>
                      "Fantastic experience from start to end. Infused Agency is organized, thorough and professional. I
                      highly recommend their company if you are thinking of needing their Niagara SEO services."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>385% increase</span> in being found online
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>4,000% increase</span> in new website visits
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>1,500% increase</span> in Google rankings for multiple keywords
                        </strong>
                      </li>
                    </ul>
                    <Link href="/tree-reports">
                      Learn More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Link>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <Image className="img-fluid" src={kdImg} alt="KD Flowers" />
                    <h4>KD Flowers</h4>
                    <p>
                      "Infused Agency drastically improved my online presence. By using their SEO services, my Niagara
                      company went from not ranking at all to the first page of Google for tons of keywords."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>10,700 website views</span> per month
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>20,000% increase</span> in new leads in the first 6 months
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>5,800 new people</span> discovering website per month
                        </strong>
                      </li>
                    </ul>
                    <Link href="/kd-florist">
                      Learn More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Link>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="card">
                    <Image className="img-fluid" src={cassImg} alt="Cass-A-Bella Construction" />
                    <h4>Cass-A-Bella Construction</h4>
                    <p>
                      "Great Job, WELL DONE. I'm very pleased with the SEO work on my new web site. If you ever need a
                      SEO for your Niagara business I do recommend Infused Agency for their services. JD keep up the
                      great work. Thank you."
                    </p>
                    <ul>
                      <li>
                        <strong>
                          <span>12,000 photo views</span> per month
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>13,000% increase</span> in new leads in first 6 months
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <span>2,500 new people</span> discovering website per month
                        </strong>
                      </li>
                    </ul>
                    <Link href="/cass-a-bella-construction">
                      Learn More
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                        height="20px"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                      </svg>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Ready to grow your business with top Niagara SEO services?</h3>
                  <p>Click the button below to get your free quote.</p>
                  <a target="_blank" rel="noreferrer" href="https://calendly.com/infused-agency/project-discovery/">
                    <button>Get Free Quote</button>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="seo-services">
            <Container>
              <Row className="pd-top-80 pd-btm-40">
                <Col lg="12 text-center">
                  <h2>
                    Niagara <span>SEO</span> Services
                  </h2>
                  <p>Solutions That Bring In Qualified Leads And Boost Your Sales</p>
                </Col>
              </Row>
              <Row>
                <Col lg="4">
                  <h5>Keyword Research &amp; Strategy</h5>
                  <p>
                    Infused Agency's SEO company in Niagara conducts specific keyword research that covers specifically
                    what your users are searching for. We look at keywords as the main foundation to your SEO project.
                    Beyond this, we dive into the technicalities to further deliver value to your customers.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Link Building</h5>
                  <p>
                    Off of your website, our Niagara SEO exports utilize efforts to build links to your website, to help
                    your site rise in search rankings. When other websites link back to your own, you can be seen as
                    authoratative and rank for relevant keyword searche. We can also help filter out certain backlinks
                    that Google may refer to as spammy.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Content Writing</h5>
                  <p>
                    Our Niagara SEO services are conducted by a highly trained group of marketers, which includes
                    content writers. At Infused, you can take advantage of our content writing skills to create content
                    that attracts highly qualified leads. We help mix keywords and your brand voice together, to help
                    bring in more leads to your website.
                  </p>
                </Col>
              </Row>
              <Row className="pd-btm-80">
                <Col lg="4">
                  <h5>On-Page SEO</h5>
                  <p>
                    It's very important that your on-page work is done well, as it can signal to Google that you may
                    give your users a poor user experience. This is why our Niagara SEO agency looks for and fixes these
                    issues for you. We conduct on-page SEO to help bolster your online presence, amplify your lead
                    generation and help boost sales.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Local SEO</h5>
                  <p>
                    For a more local approach, our Niagara SEO specialists can leverage the power of local SEO. We help
                    local customers find your website in local search engine rankings. We do this by employing on and
                    off page search engine optimization best practices, to help raise your local website in Google's
                    rankings.
                  </p>
                </Col>
                <Col lg="4">
                  <h5>Technical SEO</h5>
                  <p>
                    If you find out about some technical mishaps on your website, our Niagara SEO experts are here to
                    help. We'll dive into your website by conducting a site-wide audit to check for problems related to
                    website speed, content and optimization. Our team will fix these issues, helping your website get
                    back on the right track.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="call-out">
            <Container>
              <Row>
                <Col lg="12 text-center">
                  <h3>Have Our Niagara SEO Experts Help Today</h3>
                  <p>Click the button below to get your free quote.</p>
                  <a target="_blank" rel="noreferrer" href="https://calendly.com/infused-agency/project-discovery/">
                    <button>Get Free Quote</button>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="seo-why pd-top-80">
            <Container>
              <Row>
                <Col lg="12 text-center pd-btm-40">
                  <h2>
                    Why Choose Infused Agency As Your <span>Niagara</span> SEO Agency
                  </h2>
                  <p>Increase Your Website's Rankings With Our SEO Experts</p>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                  <p>
                    Since 2013 we've been able to help countless local Niagara businesses (and beyond!) with their{" "}
                    <Link href="/web-design">website design</Link>,{" "}
                    <Link href="/digital-marketing-niagara">digital marketing</Link>, search engine optimization (SEO) ,{" "}
                    <Link href="/wordpress-developer-niagara">WordPress development</Link> and{" "}
                    <Link href="/ecommerce-web-design-niagara">e-commerce website development</Link>.
                  </p>
                  <p>
                    We've been able to help small, local businesses all the way to large enterprise companies with
                    increasing traffic to their websites, build modern websites for them and ultimately bringing them
                    more revenue through digital channels.
                  </p>
                </Col>
                <Col lg="6">
                  <Image className="img-fluid" src={about} alt="business needs" />
                </Col>
              </Row>
            </Container>
          </section>
          <Container>
            <Row className="pd-top-80 pd-btm-60">
              <Col lg="12">
                <h3>What is SEO?</h3>
                <p>
                  Search Engine Optimization (SEO) is the process of increasing your{" "}
                  <Link href="/websites">websites</Link> visibility within Google's search results. If your website is
                  on the first page of Google with our SEO services versus your website being on the 10th page, you will
                  get a lot more customers.
                </p>
                <h3>Do I need SEO?</h3>
                <p>
                  Does your business depend on attracting new customers? Then absolutely you need a Niagara SEO company
                  to help you with SEO services. It's important that our Niagara SEO experts help your website rank
                  where your customers are looking - on the first page of Google.
                </p>
                <h3>What's important when it comes to SEO?</h3>
                <p>
                  There's about 200 ranking signals that Google evaluates a website on when it comes to SEO. The top
                  factors here are domain authority (how old your website's domain is), the quality SEO content of your
                  website, SEO backlinks going to your website, technical SEO coding on your site and more. We will
                  clearly identify the strengths and weaknesses in terms of SEO that your current website has, and come
                  up with a game plan to improve.
                </p>
                <h3>How long does SEO take?</h3>
                <p>
                  There are many variables and depends on the website. For example - a brand new website can take
                  upwards to a year to start seeing any meaningful results. A website that has been around for a longer
                  amount of time could start seeing movement within 2-3 months. It all depends on your website's
                  standing when it comes to SEO.
                </p>
                <h3>How do I get on the Google Map Pack?</h3>
                <p>
                  The Google Map Pack is great for local SEO. This is the area where when someone searches, local
                  companies pop up with 5 star reviews. If you do local SEO and get in the top 3 of this map pack,
                  you're golden. The best way to get there is to optimize your Google My Business profile. We specialize
                  in doing so and can help you rise up in the local SEO map pack rankings.
                </p>
                <ul>
                  <li>E-commerce company logo</li>
                  <li>
                    All e-commerce product details - things like product titles, images, descriptions, pricing, etc.
                  </li>
                  <li>Any shipping charges you'd like customers to pay.</li>
                </ul>
                <h3>Our Niagara SEO company is ready to help.</h3>
                <p>
                  If you need our Niagara SEO company to help your company rise in Google with our expert SEO services,
                  click below to get your free SEO quote.
                </p>
                <a target="_blank" rel="noreferrer" href="https://calendly.com/infused-agency/project-discovery/">
                  <button>Get Free Quote</button>
                </a>
              </Col>
            </Row>
          </Container>
          <About
            city="Niagara"
            intro={[
              "The Regional Municipality of ",
              <a href="https://www.niagararegion.ca/">Niagara</a>,
              " in Southern Ontario, Canada, lies on the west side of the Niagara River, between lakes Ontario and Erie. The Canadian section of Niagara Falls, including the dramatic Horseshoe Falls, is its most famous feature.",
            ]}
            area="1,854"
            population="447,888"
            topSights={[
              <a href="https://www.niagaraparks.com/visit-niagara-parks/plan-your-visit/niagara-falls-geology-facts-figures/">
                The Falls
              </a>,
              ", ",
              <a href="https://www.niagaraparks.com/visit/attractions/journey-behind-the-falls/">
                Journey Behind The Falls
              </a>,
              ", ",
              <a href="https://www.skylon.com/">Skylon Tower</a>,
            ]}
            qOne="What is Niagara in Canada?"
            qOneAns="Niagara Falls is a city in Ontario. It's near the west bank of the Niagara River in the Golden Horseshoe region of Southern Ontario."
            qTwo="What is Niagara known for?"
            qTwoAns="Niagara is known for having one of the most famous waterfalls in the entire world. It's been a popular tourist attraction for over 200 years, and it's also a major source of electric power for the surrounding region."
            qThree="Is Niagara dangerous?"
            qThreeAns="Even though Niagara has the falls and it's beautiful, Niagara itself actually is not a very safe place. 91% of cities are safer than Niagara, but 9% of cities are more dangerous than the region."
            qFour="What is the best time of year to go to Niagara?"
            qFourAns="The best time to visit Niagara FAlls is between the months of June and August. Summer is the best time to go because the mist coming off of Niagara falls can make the area feel much cooler."
            mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d746182.1554938729!2d-79.90704906963097!3d43.06721961311654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34c9ec993deb7%3A0xef7f46930d192396!2sRegional%20Municipality%20of%20Niagara%2C%20ON!5e0!3m2!1sen!2sca!4v1628642324816!5m2!1sen!2sca"
          />
        </section>
      </InnerContent>
      <CTA />
      <Footer />
    </>
  );
};

export default SEO;
