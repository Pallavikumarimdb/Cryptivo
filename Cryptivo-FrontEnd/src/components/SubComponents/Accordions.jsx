import React, { useState, useRef } from 'react';
import '../../../src/css-files/SubComponents-css/Accordion.css';
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
<>

<div className="accordion">
      <button className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className="accordion-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <p>{content}</p>
      </div>
    </div>
</>
  );
};

export default Accordion;
