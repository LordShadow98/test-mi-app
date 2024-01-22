import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./MyProfile.css";

const MyProfile = () => {
  return (
    <div className="card-wrapper">
      <div className="profile-card">
        <div className="profile-info">
        <img className="profile-image" src="Images/JulianR.jpg" alt="Avatar" />

          <h1>Julian Renteria Asprilla</h1>
        </div>

        <div className="profile-buttons">
          <button onClick={() => window.open("https://mail.google.com/")}>Gmail</button>
          <button onClick={() => window.open("https://www.linkedin.com/in/ti-julianrent-lordshadow/")}>LinkedIn</button>
        </div>

        <div className="profile-section">
          <h2>About</h2>
          <p> Técnico en desarrollo de software con experiencia en diseño,
           instalación y mantenimiento preventivo de software y hardware. 
           Apasionado por la tecnología. Estudiante de la Escuela de Desarrollo
            Código C13, donde mi objetivo de mejorar y ampliar mis conocimientos de TI.</p>
        </div>

        <div className="profile-section">
          <h2>Interest</h2>
       <p>Interesado en el desarrollo de software,
        instalación y mantenimiento de software y hardware.
        Apasionado por la tecnología y el Voleyball</p>
        </div>

        <div className="profile-footer">
          

          <div>
            <FontAwesomeIcon icon={faGithub} onClick={() => window.open("https://github.com/LordShadow98")} />
            <FontAwesomeIcon icon={faInstagram} onClick={() => window.open("https://www.instagram.com/julianrenteria57.jr//")} />
            <FontAwesomeIcon icon={faGoogle} onClick={() => window.open("https://mail.google.com/")} />
            <FontAwesomeIcon icon={faLinkedin} onClick={() => window.open("https://www.linkedin.com/in/ti-julianrent-lordshadow//")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
