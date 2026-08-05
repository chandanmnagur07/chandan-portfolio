import "./Hero.css";

function Hero() {

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
  }


  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* Greeting */}

        <div className="hero-greeting">

          {/* Desktop & Laptop */}

          <div className="desktop-greeting">
            <span>{greeting}, I'm</span>

            <span className="name">
              Chandan M Nagur
            </span>

            <span className="wave">
              👋
            </span>
          </div>

          {/* Mobile */}

          <div className="mobile-line1">
            {greeting}, I'm
          </div>

          <div className="mobile-line2">
            <span>Chandan M Nagur</span>

            <span className="wave">
              👋
            </span>
          </div>

        </div>

        {/* Profile Image */}

        <div className="hero-image">
          <img
            src="cmn2.jpeg"
            alt="Chandan M Nagur"
          />
        </div>

        {/* Title */}

        <h2>
          Full Stack Web Developer
        </h2>

        {/* Description */}

        <p>
          I'm a passionate Full Stack Web Developer from Bengaluru who enjoys
          building responsive, user-friendly and modern web applications using
          HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB. I
          love creating beautiful UI designs with clean, efficient and scalable
          code.
        </p>

        {/* Buttons */}

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn primary-btn"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="btn secondary-btn"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;