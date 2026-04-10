import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';

const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="btn btn-primary"
      >
        <FaArrowUp /> Get a Quote
      </Link>
    </div>
  );
};

export default FloatingCTA;