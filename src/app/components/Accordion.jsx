import React from 'react';
import styles from '../style/accordion.module.css';

const Accordion = ({ title, content, isExpanded, onAccordionClick, url,img }) => {
    const toggleAccordion = () => {
        onAccordionClick(title,img);
      };
    
      return (
        <div className={styles.accordion}>
          <div className={styles.accordionHeader} onClick={toggleAccordion}>
            <h3>{title}</h3>
            <span className={!isExpanded ? styles.icon : styles.hidden}>&#9660;</span>
          </div>
          {isExpanded && <div className={styles.accordionContent}>{content}</div>}
        </div>
      );
};

export default Accordion;
