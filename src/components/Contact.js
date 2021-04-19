import "../stylesheets/layout/_contact.scss";
import SocialNavSection from "./SocialNavSection";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">Contacto</h2>
      <p className="contact__text">
        Si te ha gustado mi perfil o te gustaria colaborar puedes encontrarme en
        mis redes sociales:
      </p>
      <SocialNavSection />
    </section>
  );
}
export default Contact;
