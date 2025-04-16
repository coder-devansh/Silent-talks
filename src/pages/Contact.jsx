import { motion } from 'framer-motion';
import { FaHandsHelping, FaSignLanguage, FaVideo, FaAccessibleIcon, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2 
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactMethods = [
    {
      icon: <FaVideo className="text-primary fs-3" />,
      title: "Sign Language Video Call",
      description: "Connect with our sign language interpreter via video call",
      link: "Start Video Call",
      accessibility: "Video call with ISL interpreter"
    },
    {
      icon: <FaEnvelope className="text-primary fs-3" />,
      title: "Email Support",
      description: "support@signhelp.com",
      link: "Send Email",
      accessibility: "Email support"
    },
    {
      icon: <FaPhoneAlt className="text-primary fs-3" />,
      title: "Text Helpline",
      description: "Available for SMS and WhatsApp messages",
      link: "+91 98765 43210",
      accessibility: "Text helpline number"
    }
  ];

  return (
    <motion.div
      className="container py-5"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Hero Section */}
      <motion.section className="text-center mb-5" variants={itemVariants}>
        <h1 className="display-5 fw-bold mb-3">
          <FaHandsHelping className="text-primary me-3" />
          Contact Us
        </h1>
        <p className="lead">
          Multiple accessible ways to get in touch with our team
        </p>
      </motion.section>

      {/* Contact Methods */}
      <motion.section className="my-5" variants={itemVariants}>
        <h2 className="text-center mb-5">Choose Your Preferred Contact Method</h2>
        <div className="row g-4">
          {contactMethods.map((method, index) => (
            <motion.div 
              className="col-md-4"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">{method.icon}</div>
                  <h5 className="fw-bold">{method.title}</h5>
                  <p className="text-muted mb-3">{method.description}</p>
                  <a 
                    href={index === 0 ? "#video-call" : index === 1 ? "mailto:support@signhelp.com" : "tel:+919876543210"} 
                    className="btn btn-outline-primary"
                    aria-label={method.accessibility}
                  >
                    {method.link}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Accessibility Features */}
      <motion.section className="my-5 py-5 bg-light rounded-3" variants={itemVariants}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Accessibility First</h2>
              <ul className="list-unstyled">
                <li className="mb-3 d-flex align-items-start">
                  <FaSignLanguage className="me-3 mt-1 text-primary" />
                  <div>
                    <h5 className="fw-bold">Sign Language Support</h5>
                    <p className="mb-0">All video calls include Indian Sign Language (ISL) interpreters</p>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaAccessibleIcon className="me-3 mt-1 text-primary" />
                  <div>
                    <h5 className="fw-bold">Screen Reader Compatible</h5>
                    <p className="mb-0">Full compatibility with popular screen readers</p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <FaVideo className="me-3 mt-1 text-primary" />
                  <div>
                    <h5 className="fw-bold">Video Guides</h5>
                    <p className="mb-0">Step-by-step video tutorials with captions and audio descriptions</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Deaf woman communicating via video call" 
                  className="img-fluid object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Location Section */}
      <motion.section className="my-5" variants={itemVariants}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-4">Our Center</h2>
            <div className="d-flex mb-3">
              <FaMapMarkerAlt className="me-3 mt-1 text-primary" />
              <div>
                <h5 className="fw-bold">Accessibility Hub</h5>
                <p className="mb-0">
                  123 Inclusive Plaza<br />
                  New Delhi 110001<br />
                  India
                </p>
              </div>
            </div>
            <p>
              Visit our accessibility-friendly center equipped with tactile guides, 
              braille signage, and trained staff fluent in sign language.
            </p>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="ratio ratio-16x9 bg-light rounded-3 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566208579673!2d77.2065623150823!3d28.62873998242576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5a8a1e0001%3A0x7b1a5a3c4e3d3b1a!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                aria-label="Map to our location"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Emergency Contact */}
      <motion.section className="my-5 py-4 bg-primary text-white rounded-3 text-center" variants={itemVariants}>
        <h2 className="fw-bold mb-3">Emergency Accessibility Support</h2>
        <p className="fs-5 mb-4">
          Available 24/7 for urgent communication needs
        </p>
        <a href="tel:+919876543210" className="btn btn-light btn-lg">
          <FaPhoneAlt className="me-2" />
          Call Emergency Support
        </a>
      </motion.section>
    </motion.div>
  );
}

export default Contact;