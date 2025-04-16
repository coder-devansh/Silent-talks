import { motion } from 'framer-motion';
import { FaHandsHelping, FaAccessibleIcon, FaVideo, FaUniversalAccess, FaSignLanguage } from 'react-icons/fa';

function About() {
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

  const features = [
    {
      icon: <FaSignLanguage className="text-primary fs-1" />,
      title: "Sign Language Avatars",
      description: "Our AI-powered avatars communicate fluently in multiple sign languages"
    },
    {
      icon: <FaVideo className="text-primary fs-1" />,
      title: "Instructional Videos",
      description: "Visual guides with sign language interpretation and audio descriptions"
    },
    {
      icon: <FaAccessibleIcon className="text-primary fs-1" />,
      title: "Multi-Modal Access",
      description: "Combines text, audio, and visual elements for complete accessibility"
    }
  ];

  const teamMembers = [
    { 
      name: 'Priya Sharma', 
      role: 'Sign Language Expert', 
      bio: '15 years experience in ISL (Indian Sign Language) education',
      icon: <FaHandsHelping className="text-primary fs-3" />
    },
    { 
      name: 'Rahul Kapoor', 
      role: 'Accessibility Developer', 
      bio: 'Specializes in assistive technologies for the hearing and visually impaired',
      icon: <FaUniversalAccess className="text-primary fs-3" />
    },
    { 
      name: 'Ananya Patel', 
      role: 'UI/UX Designer', 
      bio: 'Focuses on creating inclusive interfaces for diverse abilities',
      icon: <FaAccessibleIcon className="text-primary fs-3" />
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
        <h1 className="display-4 fw-bold mb-3">
          <FaHandsHelping className="text-primary me-3" />
          About Our Platform
        </h1>
        <p className="lead">
          Bridging communication gaps for the deaf, mute, and blind communities
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section className="row align-items-center my-5 py-4" variants={itemVariants}>
        <div className="col-lg-6 order-lg-2">
          <h2 className="fw-bold mb-4">Our Purpose</h2>
          <p className="fs-5">
            We created this platform to empower individuals with hearing and speech disabilities 
            by providing accessible communication tools. Our avatar-based system delivers 
            information in sign language while also accommodating visual impairments.
          </p>
          <div className="mt-4">
            <h5 className="fw-bold">Key Focus Areas:</h5>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <FaSignLanguage className="me-3 text-primary" />
                <span>Accurate sign language interpretation</span>
              </li>
              <li className="mb-2 d-flex align-items-center">
                <FaVideo className="me-3 text-primary" />
                <span>Tactile and audio-visual learning materials</span>
              </li>
              <li className="d-flex align-items-center">
                <FaUniversalAccess className="me-3 text-primary" />
                <span>Barrier-free digital experiences</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 order-lg-1 mt-4 mt-lg-0">
          <div className="ratio ratio-16x9 bg-light rounded-3 overflow-hidden">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/003/240/746/original/deaf-people-communicating-through-sign-language-free-vector.jpg" 
              alt="People communicating in sign language" 
              className="img-fluid object-fit-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="my-5 py-5 bg-light rounded-3" variants={itemVariants}>
        <div className="container">
          <h2 className="text-center mb-5">How We Help</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div 
                className="col-md-4"
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="mb-3">{feature.icon}</div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section className="my-5 py-4" variants={itemVariants}>
        <h2 className="text-center mb-5">Our Accessibility Champions</h2>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <motion.div 
              className="col-md-4" 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">{member.icon}</div>
                  <h5 className="fw-bold">{member.name}</h5>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-muted">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section className="my-5 py-5 bg-primary text-white rounded-3" variants={itemVariants}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Our Vision</h2>
          <p className="fs-5 mx-auto" style={{ maxWidth: '800px' }}>
            We believe in a world where communication barriers don't exist. Our goal is to create 
            technology that adapts to people's needs - whether through sign language avatars, 
            tactile interfaces, or audio descriptions - making information equally accessible to all.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default About;