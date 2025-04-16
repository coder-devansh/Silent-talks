import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Carousel, Col, Container, Form, Row } from "react-bootstrap";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section with Wavy Background */}
      <div className="hero-section position-relative">
        <img
          src="https://images.pexels.com/photos/5752254/pexels-photo-5752254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero Background"
          className="w-100 hero-image"
          style={{ height: "70vh", objectFit: "cover", filter: "blur(2px) brightness(0.7)" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <Container>
            <Row className="justify-content-start">
              <Col md={8} lg={6} className="text-white">
                <h4 className="mb-3" data-aos="fade-right">Empowering Every Ability</h4>
                <h1 className="display-4 fw-bold mb-4" data-aos="fade-right" data-aos-delay="200">
                  "Disability is a matter of perception. If you can do just one thing well, you're needed by someone."
                </h1>
                <div className="input-group mb-3" data-aos="fade-up" data-aos-delay="400">
                  <Form.Control
                    type="text"
                    placeholder="Ask anything about accessibility, tutorials, or support..."
                    className="py-3"
                  />
                  <Button variant="primary" className="px-4">
                    Search
                  </Button>
                </div>
                <div className="d-flex gap-2" data-aos="fade-up" data-aos-delay="600">
                  <Button variant="outline-light">Upload Video</Button>
                  <Button variant="outline-light">Voice Input</Button>
                  <Button variant="outline-light">Chat Now</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Tutorials Section */}
      <Container className="my-5 py-4">
        <h2 className="text-center mb-5" data-aos="fade-up">Recommended Tutorials</h2>
        <Row className="g-4">
          <Col md={6} lg={4} data-aos="zoom-in">
            <Card className="h-100 shadow-sm">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>Daily Mobility Exercises</Card.Title>
                <Card.Text>
                  Gentle exercises to improve mobility and strength for wheelchair users.
                </Card.Text>
                <Button variant="primary" size="sm">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
            <Card className="h-100 shadow-sm">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>ASL Basics</Card.Title>
                <Card.Text>
                  Learn American Sign Language basics for better communication.
                </Card.Text>
                <Button variant="primary" size="sm">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} data-aos="zoom-in" data-aos-delay="200">
            <Card className="h-100 shadow-sm">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>Adaptive Cooking</Card.Title>
                <Card.Text>
                  Kitchen techniques and tools for people with limited mobility.
                </Card.Text>
                <Button variant="primary" size="sm">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} data-aos="zoom-in">
            <Card className="h-100 shadow-sm">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>Mindfulness Meditation</Card.Title>
                <Card.Text>
                  Guided meditation for stress relief and mental wellbeing.
                </Card.Text>
                <Button variant="primary" size="sm">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} data-aos="zoom-in" data-aos-delay="100">
            <Card className="h-100 shadow-sm">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>Assistive Tech Guide</Card.Title>
                <Card.Text>
                  Overview of the latest assistive technologies available.
                </Card.Text>
                <Button variant="primary" size="sm">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} data-aos="zoom-in" data-aos-delay="200">
            <Card className="h-100 shadow-sm">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>Accessible Home Design</Card.Title>
                <Card.Text>
                  Tips for making your home more accessible and comfortable.
                </Card.Text>
                <Button variant="primary" size="sm">
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Our Mission Section */}
      <div className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
              <img
                src="https://images.pexels.com/photos/6646984/pexels-photo-6646984.jpeg"
                alt="Our Mission"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6} data-aos="fade-left">
              <h2 className="mb-4">Our Mission</h2>
              <p className="lead">
                To create an inclusive platform that empowers individuals with physical challenges through accessible information, resources, and community support.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Provide curated, accessible content
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Connect users with relevant resources
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Foster an inclusive community
                </li>
                <li className="mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Promote independence and confidence
                </li>
              </ul>
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5 py-4">
        <h2 className="text-center mb-5" data-aos="fade-up">Key Features</h2>
        <Row className="g-4">
          <Col md={4} data-aos="fade-up">
            <div className="text-center p-4 h-100 border rounded shadow-sm">
              <div className="icon-box bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-3 mx-auto">
                <i className="bi bi-chat-square-text-fill fs-2"></i>
              </div>
              <h4>Multimodal Input</h4>
              <p>
                Interact through text, voice, or video inputs based on your preference and ability.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="text-center p-4 h-100 border rounded shadow-sm">
              <div className="icon-box bg-success bg-opacity-10 text-success rounded-circle p-3 mb-3 mx-auto">
                <i className="bi bi-collection-play-fill fs-2"></i>
              </div>
              <h4>Curated Tutorials</h4>
              <p>
                Access specially selected video tutorials for various physical challenges.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="text-center p-4 h-100 border rounded shadow-sm">
              <div className="icon-box bg-info bg-opacity-10 text-info rounded-circle p-3 mb-3 mx-auto">
                <i className="bi bi-people-fill fs-2"></i>
              </div>
              <h4>Community Support</h4>
              <p>
                Connect with others facing similar challenges and share experiences.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up">
            <div className="text-center p-4 h-100 border rounded shadow-sm">
              <div className="icon-box bg-warning bg-opacity-10 text-warning rounded-circle p-3 mb-3 mx-auto">
                <i className="bi bi-bell-fill fs-2"></i>
              </div>
              <h4>Personalized Alerts</h4>
              <p>
                Get notifications about new resources relevant to your needs.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="text-center p-4 h-100 border rounded shadow-sm">
              <div className="icon-box bg-danger bg-opacity-10 text-danger rounded-circle p-3 mb-3 mx-auto">
                <i className="bi bi-gear-fill fs-2"></i>
              </div>
              <h4>Accessibility Tools</h4>
              <p>
                Built-in tools to adjust text size, contrast, and navigation.
              </p>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="text-center p-4 h-100 border rounded shadow-sm">
              <div className="icon-box bg-secondary bg-opacity-10 text-secondary rounded-circle p-3 mb-3 mx-auto">
                <i className="bi bi-heart-fill fs-2"></i>
              </div>
              <h4>Wellness Tracking</h4>
              <p>
                Monitor your progress and set achievable wellness goals.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <div className="py-5 bg-primary bg-opacity-10">
        <Container>
          <h2 className="text-center mb-5" data-aos="fade-up">What Our Users Say</h2>
          <Row className="g-4">
            <Col md={4} data-aos="fade-up">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="User"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0">Sarah Johnson</h5>
                    <small className="text-muted">Wheelchair User</small>
                  </div>
                </div>
                <p className="mb-0">
                  "This platform has been a game-changer for me. The mobility exercises have improved my daily life significantly."
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="User"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0">Michael Chen</h5>
                    <small className="text-muted">Parent</small>
                  </div>
                </div>
                <p className="mb-0">
                  "Finding resources for my son's condition was challenging until I discovered this comprehensive platform."
                </p>
              </div>
            </Col>
            <Col md={4} data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="User"
                    className="rounded-circle me-3"
                    width="60"
                  />
                  <div>
                    <h5 className="mb-0">Emma Rodriguez</h5>
                    <small className="text-muted">Physical Therapist</small>
                  </div>
                </div>
                <p className="mb-0">
                  "I recommend this to all my patients. The quality of content is exceptional and truly helpful."
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Call to Action */}
      <div className="py-5 bg-dark text-white">
        <Container className="text-center">
          <h2 className="mb-4" data-aos="fade-up">Ready to Get Started?</h2>
          <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
            Join our community today and discover resources tailored to your needs.
          </p>
          <div className="d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-delay="200">
            <Button variant="primary" size="lg">
              Sign Up Now
            </Button>
            <Button variant="outline-light" size="lg">
              Learn More
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;