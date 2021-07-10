import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <a class="footer-link" href="https://www.linkedin.com/">
        LinkedIn
      </a>
      <a class="footer-link" href="https://twitter.com/">
        Twitter
      </a>
      <a
        class="footer-link"
        href="https://yashviradia.github.io/personal_website_1/"
      >
        Website
      </a>
      <p>&copy; {currentYear} Yash Viradia</p>
    </footer>
  );
}

export default Footer;
