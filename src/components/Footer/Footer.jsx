import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">CMN</h3>

        <p className="footer-text">
          Building modern and responsive web experiences.
        </p>

        <div className="social-links">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:chandanmnagur2007@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © {year}Chandan M Nagur. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;