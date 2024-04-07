import "../styles/contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <h2 className="title">
          <p>( 03 )</p>
          <span>REACH OUT</span>
        </h2>

        <p className="flavor-text">( Check out my resume! )</p>
        <div className="contact-info">
          <button className="contact-link">RESUME</button>
          <button className="contact-link">LINKEDIN</button>
          <button className="contact-link">GITHUB</button>
        </div>
        <p className="break">
          <span>OR</span>
        </p>
        <p>Contact me by email at:</p>
        <h4 className="contact-email">JDorman555@yahoo.com</h4>
      </div>
    </>
  );
}

export default Contact;
