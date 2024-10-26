import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>© {new Date().getFullYear()} Momin's Kitchen. All rights reserved.</p>
        <div style={socialMediaStyle}>
          <a href="https://www.facebook.com/mominshykh.xx" style={linkStyle}>Facebook</a>
          <a href="https://www.instagram.com/mominshykh/?hl=en" style={linkStyle}>Instagram</a>
          <a href="https://www.linkedin.com/in/muhammad-momin-62069b2b9/" style={linkStyle}>Linkedin</a>
          <a href="https://github.com/MuhammadMomin095" style={linkStyle}>Github</a>
        </div>
      </div>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const textStyle: React.CSSProperties = {
  margin: 0,
};

const socialMediaStyle: React.CSSProperties = {
  display: 'flex',
  gap: '15px',
};

const linkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
};

export default Footer;
