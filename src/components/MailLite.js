// // src/MailerLiteForm.js
// import React, { useEffect } from "react";

// const MailerLiteForm = () => {
//   useEffect(() => {
//     // Check if the script is already added
//     if (
//       !document.querySelector(
//         'script[src="https://assets.mailerlite.com/js/universal.js"]'
//       )
//     ) {
//       const script = document.createElement("script");
//       script.src = "https://assets.mailerlite.com/js/universal.js";
//       script.async = true;
//       script.onload = () => {
//         if (window.ml) {
//           window.ml("account", "1456775"); // Replace with your MailerLite account ID
//         }
//       };
//       document.body.appendChild(script);
//     } else {
//       if (window.ml) {
//         window.ml("account", "1456775");
//       }
//     }
//   }, []);

//   return (
//     <div>
//       <div className="ml-embedded" data-form="Ds4RaE"></div>{" "}
//       {/* Replace with your actual form ID */}
//     </div>
//   );
// };

// export default MailerLiteForm;
// src/components/MailerLiteForm.js
import React, { useEffect } from "react";

const MailLite = () => {
  useEffect(() => {
    // Prevent script from loading multiple times
    if (
      !document.querySelector(
        'script[src="https://assets.mailerlite.com/js/universal.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.mailerlite.com/js/universal.js";
      script.async = true;
      script.onload = () => {
        if (window.ml) {
          window.ml("account", "1456775"); // Your MailerLite account ID
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.ml) {
        window.ml("account", "1456775");
      }
    }
  }, []);

  return <div className="ml-embedded" data-form="Ds4RaE"></div>; // Your MailerLite form ID
};

export default MailLite;
