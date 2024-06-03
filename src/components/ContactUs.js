import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Us</h1>
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default ContactUs;