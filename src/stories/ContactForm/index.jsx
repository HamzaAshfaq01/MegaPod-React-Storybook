import React from "react";
import address from "../../assets/img/icons/ci-1.png";
import phone from "../../assets/img/icons/ci-2.png";
import hours from "../../assets/img/icons/ci-3.png";
const ContactForm = () => {
  return (
    <>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6797.676078709917!2d74.36975577305054!3d31.583488965077915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ac38818005f%3A0xe1612460de0fb770!2sBaghbanpura%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1600759909595!5m2!1sen!2s"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact__widget__item">
                <img src={address} alt="" />
                <h4>Address</h4>
                <p>Baghbanpura Lahore,PK</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact__widget__item">
                <img src={phone} alt="" />
                <h4>Phone</h4>
                <p>
                  +92 3114340230 <span>+92 3114340230</span>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact__widget__item">
                <img src={hours} alt="" />
                <h4>Working Hours</h4>
                <p>
                  Open: 10am to 6pm <span>( Sunday Close)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__form">
                <h2>Leave Message</h2>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="col-lg-12 text-center">
                      <textarea placeholder="Your message"></textarea>
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
