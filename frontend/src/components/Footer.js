import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} TodoApp - Organize your tasks with ease.</p>
      <p>Need help? <a href="#">Support</a> | <a href="#">Privacy Policy</a></p>
    </footer>
  );
};

export default Footer;
