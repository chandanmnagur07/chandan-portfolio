import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <h2 className="footer-logo">
          Chandan <span>M Nagur</span>
        </h2>

        {/* Description */}
        <p className="footer-text">
          Building modern and responsive web experiences.
        </p>

        {/* Social Links */}
        <div className="footer-social">

          <a
            href="https://www.linkedin.com/in/chandan-m-nagur-568686383/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/chandanmnagur07"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=chandanmnagur2007@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

        </div>

        {/* Divider */}
        <div className="footer-line"></div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Chandan M Nagur. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;