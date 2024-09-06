// AnimateOnScroll.js
import React, { useEffect, useRef } from 'react';
import '../css/homepage.css'; // Make sure your styles are imported here

const AnimateOnScroll = ({ children }) => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section');
        } else {
          entry.target.classList.remove('animate-section'); // Remove animation class when section exits viewport
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observing each section
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Add refs to each child component
  const childrenWithRefs = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      ref: (el) => (sectionRefs.current[index] = el),
    })
  );

  return <>{childrenWithRefs}</>;
};

export default AnimateOnScroll;
