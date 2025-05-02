import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaCheckCircle, FaStar, FaSearch, 
  FaBolt, FaWrench, FaPaintRoller, FaSnowflake,
  FaHammer, FaCar, FaLaptopCode, FaPenNib,
  FaTshirt, FaCut, FaChalkboardTeacher, FaCamera
} from 'react-icons/fa';

const Home = () => {
  // Popular services matching Sidebar.jsx
  const popularServices = [
    { id: 1, icon: <FaBolt />, title: 'Electrician', description: 'Wiring, installations, repairs' },
    { id: 2, icon: <FaWrench />, title: 'Plumbing', description: 'Leaks, pipe installations' },
    { id: 3, icon: <FaPaintRoller />, title: 'Painting', description: 'Walls, ceilings, exteriors' },
    { id: 4, icon: <FaSnowflake />, title: 'AC Repair', description: 'Installation & maintenance' },
    { id: 5, icon: <FaHammer />, title: 'Carpentry', description: 'Furniture & home repairs' },
    { id: 6, icon: <FaCar />, title: 'Auto Repair', description: 'Vehicle maintenance' },
    { id: 7, icon: <FaLaptopCode />, title: 'Web Development', description: 'Build websites/apps' },
    { id: 8, icon: <FaPenNib />, title: 'Graphic Design', description: 'Logos & branding' },
    { id: 9, icon: <FaTshirt />, title: 'Tailoring', description: 'Custom clothing' },
    { id: 10, icon: <FaCut />, title: 'Hair Styling', description: 'Cuts & coloring' },
    { id: 11, icon: <FaChalkboardTeacher />, title: 'Tutoring', description: 'Academic support' },
    { id: 12, icon: <FaCamera />, title: 'Photography', description: 'Portraits & events' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find the perfect <span>service professional</span> for any task</h1>
          <p>Book trusted professionals for all your home services, creative projects, and personal needs.</p>
          <Link to="/login" className="cta-button">
            Get Started <FaArrowRight />
          </Link>
        </div>

        <div className="hero-image">
          <div className="floating-card card-1">
            <FaCheckCircle />
            <span>Verified Pros</span>
          </div>
          <div className="floating-card card-2">
            <FaStar />
            <span>5-Star Reviews</span>
          </div>
          <div className="floating-card card-3">
            <FaSearch />
            <span>Easy Booking</span>
          </div>
        </div>
      </section>

      {/* Enhanced "Why Choose" Section */}
      <section className="features-section">
        <h2>Why SkillLink Stands Out</h2>
        <div className="features-grid">
          <div className="feature-card glow-card">
            <div className="icon-circle verified">
              <FaCheckCircle className="pulse" />
            </div>
            <h3>Rigorous Vetting</h3>
            <p>Every professional undergoes 5-step verification including background checks and skill assessments.</p>
          </div>
          
          <div className="feature-card glow-card">
            <div className="icon-circle pricing">
              <FaStar className="pulse" />
            </div>
            <h3>Quality Guarantee</h3>
            <p>We offer a 100% satisfaction guarantee or we'll redo the service at no cost.</p>
          </div>
          
          <div className="feature-card glow-card">
            <div className="icon-circle support">
              <FaSearch className="pulse" />
            </div>
            <h3>Instant Matching</h3>
            <p>Our AI matches you with the perfect pro in under 30 seconds.</p>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="services-section">
        <div className="section-header">
          <h2>Top Services on SkillLink</h2>
          <Link to="/login" className="see-all">
            Explore all 25+ services <FaArrowRight />
          </Link>
        </div>
        <div className="services-grid">
          {popularServices.map(service => (
            <Link to="/login" key={service.id} className="service-card hover-grow">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="learn-more">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>Join thousands of satisfied customers who trust us for their service needs.</p>
          <div className="cta-buttons">
            <Link to="/login" className="primary-cta">Sign Up Now</Link>
            <Link to="/login" className="secondary-cta">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;