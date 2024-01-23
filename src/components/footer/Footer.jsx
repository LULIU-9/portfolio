import { useState, useEffect } from "react";
import "./footer.scss";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <footer>
      <p>&copy; {currentYear} Lu Liu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
