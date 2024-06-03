import React from 'react';
import styles from './ContactUs.module.css';

const ContactInfo = () => (
  <div className={styles.contactInfo}>
    <h2>Contact Information</h2>
    <p><strong>Address:</strong> Mian G Garmrnts, Fawara Chowk, District Attock </p>
    <p><strong>Phone:</strong> (123) 456-7890</p>
    <p><strong>Email:</strong> contact@mianggarmentshop.com</p>
    <div className={styles.map}>
      <h2>Our Location</h2>
      <iframe
        title="shop-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094077!2d144.95373531531882!3d-37.81627977975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775934b1a3b455!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sau!4v1613610562981!5m2!1sen!2sau"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div className={styles.socialMedia}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </div>
);

export default ContactInfo;