import React, { useEffect, useRef, useState } from "react";
import "./Apply.css";
import MailerLiteForm from "../../components/MailLite";

const Apply = () => {
  const formRef = useRef(null); // Ref to scroll to form
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 7);

    const updateCountdown = () => {
      const now = new Date();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
      {/* <p className="timer">(Timer)</p> */}
      <p className="timer">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{timeLeft.seconds}
        s left
      </p>
      {/* <h3>OPT-IN FORM</h3> */}
      {/* <MailerLiteForm /> */}
      <div ref={formRef}>
        <MailerLiteForm />
      </div>

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
      <button className="join-button" onClick={scrollToForm}>
        CLICK HERE TO JOIN THE TRAINING
      </button>
      {/* <button className="join-button">CLICK HERE TO JOIN THE TRAINING</button> */}
    </div>
  );
};

export default Apply;

// import React, { useEffect, useRef, useState } from "react";
// import "./Apply.css";
// import MailerLiteForm from "../../components/MailLite";

// const Apply = () => {
//   const formRef = useRef(null); // Ref to scroll to form
//   const [timeLeft, setTimeLeft] = useState({
//     days: 7,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // Countdown logic
//   useEffect(() => {
//     const endTime = new Date();
//     endTime.setDate(endTime.getDate() + 7);

//     const updateCountdown = () => {
//       const now = new Date();
//       const difference = endTime - now;

//       if (difference <= 0) {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((difference / 1000 / 60) % 60);
//       const seconds = Math.floor((difference / 1000) % 60);

//       setTimeLeft({ days, hours, minutes, seconds });
//     };

//     const interval = setInterval(updateCountdown, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToForm = () => {
//     if (formRef.current) {
//       formRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

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

//       <p className="timer">
//         {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
//         {timeLeft.seconds}s left
//       </p>

//       <h3>OPT-IN FORM</h3>
//       <div ref={formRef}>
//         <MailerLiteForm />
//       </div>

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
//       <button className="join-button" onClick={scrollToForm}>
//         CLICK HERE TO JOIN THE TRAINING
//       </button>
//     </div>
//   );
// };

// export default Apply;
