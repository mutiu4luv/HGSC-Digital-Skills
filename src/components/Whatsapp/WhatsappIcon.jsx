import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, IconButton } from "@mui/material";
import "./Whatsapp.css";

const FixedWhatsAppIcon = () => {
  const handleClick = () => {
    window.open("https://wa.me/2349071651329", "_blank");
  };

  return (
    <div className="fixed-whatsapp-icon">
      {/* <IconButton onClick={handleClick}>
        <WhatsAppIcon
          style={{
            fontSize: 60,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            height: "50px",
            width: "50px",
            color: "whitesmoke",
          }}
        />{" "}
      
      </IconButton> */}
      <Button
        variant="contained"
        className="hero-button"
        component="a"
        href="https://wa.me/message/UBJLJZJGN4ESE1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: "25px", backgroundColor: "green" }}
      >
        GET STARTED{" "}
      </Button>
    </div>
  );
};

export default FixedWhatsAppIcon;
