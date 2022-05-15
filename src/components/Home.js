import React from "react";
import "./Home.css";
import background from "./background.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="para">
        <p>
          <span>Naresh BUILDERS </span>
          is a high-end residential construction firm that specializes in
          building and remodeling highly crafted single family homes. We are a
          unique value in the Seattle-Eastside marketplace. We offer the best of
          all worlds: the experience, expertise, and track record of a large
          firm and the low overhead, personal attention, and focus of a small
          firm. We can build any project of any size or level of complexity.
          There is virtually nothing in the realm of high-end residential work
          we have not either seen or produced multiple times
        </p>
        <p>
          When it comes to providing quality, transparency, and professionalism
          by real estate developers in Hyderabad, the name that garners
          unflinching trust is Naresh Associate Builders. Committed to creating
          well-landscaped luxurious abodes for the elite of the city, the
          company follows customer-friendly policies and best-in-industry
          practices.
        </p>
      </div>
      <div className="one">
        <img className="img1" src={background} alt="logo"></img>
        <img className="img1" src={img2} alt="logo"></img>
      </div>
      <div className="two">
        <img className="img1" src={img3} alt="logo"></img>
        <img className="img1" src={img4} alt="logo"></img>
      </div>
    </div>
  );
};

export default Home;
