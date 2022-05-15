import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact_main">
      <h2 className="header">Contact Us</h2>
      <hr></hr>
      <div className="contact">
        <div className="left">
          <h3 className="subhead">Send us a message</h3>
          <hr></hr>
          <form className="form" action="POST">
            <label className="formlabel">Name*</label>
            <br></br>
            <input className="input" type="text" placeholder="FirstName" />
            <input className="input" type="text" placeholder="LasttName" />
            <br></br>
            <label className="formlabel">Email*</label>
            <br></br>
            <input
              className="input"
              type="email"
              placeholder="sample@gmail.com"
            />
            <br></br>
            <label className="formlabel">Phone</label>
            <br></br>
            <input className="input" type="phone" placeholder="9XXX8XXXXX6" />
            <br></br>
            <label className="formlabel">Subject*</label>
            <br></br>
            <input className="input" type="text" placeholder="" />
            <br></br>
            <label className="formlabel">Message*</label>
            <br></br>
            <textarea
              className="input"
              name="message"
              id="message"
              cols="30"
              rows="3"
            ></textarea>
            <br></br>
            <label className="formlabel">I prefer to be contacted via:*</label>
            <br></br>
            <select className="input" value="select">
              <option value="Email" selected>
                Email
              </option>
              <option value="Phoneno">Phoneno</option>
            </select>
            <br></br>
            <label className="formlabel">How did you hear about us?</label>
            <br></br>
            <select className="input" value="select">
              <option value="Architect" selected>
                Architect / Other Professional
              </option>
              <option value="Word of Mouth">
                Word of Mouth (Friend, Colleague, etc.)
              </option>
              <option value="Internet Search">Internet Search</option>
              <option value="Houzz">Houzz</option>
              <option value="Other">Other</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Social Media">Social Media</option>
              <optgroup label=""></optgroup>
            </select>
            <br></br>
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="right">
          <div className="phone">
            <p className="p">Phone: </p> <h3 className="pv">+91 9440104126</h3>
          </div>
          <div className="email">
            <p className="e">Mail us at :</p>
            <h3 className="ev"> naresh_ab126@yahoo.com</h3>
          </div>
          <div className="iframe">
            <iframe
              className="map"
              title="iframe"
              src="https://maps.google.com/maps?width=100%25&amp;height=1600&amp;hl=en&amp;q=Naresh%20Builders,%20NH%2044,%20NGOS%20Colony,%20Kamareddy,%20Telangana%20503111+(NareshBuilders)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/sport-gps/">hiking gps</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
