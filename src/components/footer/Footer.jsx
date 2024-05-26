import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  };

  const linkStyle = {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#555',
  };

  const hoverLinkStyle = {
    color: '#000',
  };

  return (
    <footer style={footerStyle}>
      <p>Connect with us:</p>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={e => e.target.style.color = hoverLinkStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Facebook</a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={e => e.target.style.color = hoverLinkStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Twitter</a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={e => e.target.style.color = hoverLinkStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>Instagram</a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle} onMouseOver={e => e.target.style.color = hoverLinkStyle.color} onMouseOut={e => e.target.style.color = linkStyle.color}>LinkedIn</a>
    </footer>
  );
};

export default Footer;
