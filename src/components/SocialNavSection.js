import "../stylesheets/layout/_socialNavSection.scss";

function SocialNavSection() {
  return (
    <ul className="social__ul">
      <li className="social__ul--li">
        Github
        <a
          className="social__ul--li item1"
          href="https://github.com/Carmen-ramos"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li className="social__ul--li">
        Twitter
        <a
          className="social__ul--li item1"
          href="https://twitter.com/CM_Ramart"
        >
          <i class="fab fa-twitter-square"></i>
        </a>
      </li>
      <li className="social__ul--li">
        Linkedin
        <a
          className="social__ul--li item1"
          href="https://www.linkedin.com/in/carmen-ramart/"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li className="social__ul--li">
        Gmail
        <a
          className="social__ul--li item1"
          href="mailto:carmen.rama91@gmail.com"
        >
          <i class="fas fa-envelope-square"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialNavSection;
