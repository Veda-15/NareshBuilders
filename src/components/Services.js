import React from "react";
import "./service.css";

const Services = () => {
  return (
    <div className="serv">
      <div class="services">
        <div class="service-top">
          <h1 class="section-title">
            Serv<span>ices</span>
          </h1>
          <p>
            So far we have completed 400+ projects in Telangana and 300+
            projects in other states of India. We have experts at your service .
            Be it professional or commercial design we never dissapoint you. As
            we have renowned expert designers, we have fulfilled our customers'
            desires until the date!
          </p>
        </div>
        <div class="service-bottom">
          <div class="service-item">
            <h2>Residential Design</h2>
            <p>
              We have done approximately 200+ Residential Designs all over
              india. We have provided special discount for the customers who
              gave contract to us for the third time.
            </p>
          </div>
          <div class="service-item">
            <h2>Commercial Design</h2>
            <p>
              With our upcoming 20 projects we will be reaching the 200 mark in
              Commercial Designs.We have done Commercial Designs only the in the
              field.Thus ours is critically acclaimed company{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
