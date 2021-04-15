import "../stylesheets/layout/_socialNav.scss";

function SocialNav() {
  return (
    <ul className="social__ul">
      <li className="social__ul--li">
        <a
          className="social__ul--li item"
          href="https://github.com/Carmen-ramos"
        >
          <i class="fab fa-github"></i>
        </a>
      </li>
      <li className="social__ul--li">
        <a className="social__ul--li item" href="https://twitter.com/CM_Ramart">
          <i class="fab fa-twitter-square"></i>
        </a>
      </li>
      <li className="social__ul--li">
        <a
          className="social__ul--li item"
          href="https://www.linkedin.com/in/carmen-ramart/"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li className="social__ul--li">
        <a
          className="social__ul--li item"
          href="mailto:carmen.rama91@gmail.com"
        >
          <i class="fas fa-envelope-square"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialNav;
