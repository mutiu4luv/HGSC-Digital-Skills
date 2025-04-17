// import React from "react";
// import "./Apply.css";

// const Apply = () => {
//   return (
//     <div className="apply-container">
//       <h3>
//         Learn High-demand digital and Tech skills of your choice at Zero Cost in
//         the upcoming Free Training.
//       </h3>
//       <h3>
//         Equip yourself with the right and Lucrative skills for more leverage in
//         the Job market.
//       </h3>
//       <p>
//         Provide your right details below to secure your access to pick and learn
//         any Digital and Tech course you want. You will be notified via email
//       </p>
//       <p className="timer">(Timer)</p>
//       <h3>OPT-IN FORM</h3>
//       <p>
//         HGSC² has trained over 1000 students in High-demand skills which have
//         placed them at the forefront of the online space and Job market
//       </p>
//       <p>
//         We believe that through innovation and dedication, we can transform
//         lives and communities, empowering people to realize their dreams and
//         contribute meaningfully to the digital economy.
//       </p>
//       <h3>REVIEWS OR TESTIMONIALS</h3>
//       <button className="join-button">CLICK HERE TO JOIN THE TRAINING</button>
//     </div>
//   );
// };

// export default Apply;

import React, { useEffect } from "react";
import "./Apply.css";
import MailerLiteForm from "../../components/MailLite";

const Apply = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://assets.mailerlite.com/js/universal.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="apply-container">
      <h3>
        Learn High-demand digital and Tech skills of your choice at Zero Cost in
        the upcoming Free Training.
      </h3>
      <h3>
        Equip yourself with the right and Lucrative skills for more leverage in
        the Job market.
      </h3>
      <p>
        Provide your right details below to secure your access to pick and learn
        any Digital and Tech course you want. You will be notified via email
      </p>
      <p className="timer">(Timer)</p>

      <h3>OPT-IN FORM</h3>
      <MailerLiteForm />

      <p>
        HGSC² has trained over 1000 students in High-demand skills which have
        placed them at the forefront of the online space and Job market
      </p>
      <p>
        We believe that through innovation and dedication, we can transform
        lives and communities, empowering people to realize their dreams and
        contribute meaningfully to the digital economy.
      </p>

      <h3>REVIEWS OR TESTIMONIALS</h3>
      <button className="join-button">CLICK HERE TO JOIN THE TRAINING</button>
    </div>
  );
};

export default Apply;
