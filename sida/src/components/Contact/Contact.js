import React, { Component } from 'react';

import phone from '../../resources/phone-icon.png';
import email from '../../resources/email-icon.png';

import './contact.css';

export class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="mail">
          <img src={email} alt="email" />
          <div className="mail-content">o.heimdahl@gmail.com</div>
        </div>
        <div className="phone">
          <img src={phone} alt="phone" />
          <div className="phone-content">073-08 56 190</div>
        </div>
      </div>
    );
  }
}

export default Contact;
