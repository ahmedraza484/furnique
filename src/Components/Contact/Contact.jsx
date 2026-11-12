import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <form>
        <h1>Contact Us.</h1>
        <input type="text" placeholder="Your First Name" required />
        <input type="text" id="lastName" placeholder="Your Last Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" id="phone" placeholder="Your Phone Number" required />
        <textarea placeholder="Type Your Message Here....." required></textarea>
        <input type="submit" value={"SEND"} id="contact-btn"/>
      </form>
    </div>
  );
};

export default Contact;
