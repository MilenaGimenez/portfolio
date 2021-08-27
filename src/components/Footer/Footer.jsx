import {Icon} from '@material-ui/core'
import './Footer.sass';

const Footer = () => {
    return (
      <div className="footer-box">    
        <h3 className="footer-title">Milena Gimenez</h3>
        <h4 className="footer-subtitle">Diseño y desarrollo web</h4>
        <section className="socialmedia-box">
          <a href="https://www.linkedin.com/in/milena-gimenez/" target="blank"><Icon className="fab fa-linkedin" /></a>
          <a href="mailto:milenanicolegimenez@gmail.com"><Icon className="fas fa-envelope" /></a>
          <a href="https://wa.link/og8kpl" target="blank"><Icon className="fab fa-whatsapp" /></a>          
        </section>
      </div>
    );
};

export default Footer;