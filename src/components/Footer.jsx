import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>📞 Phone: +46 734 567 890</li>
            <li>📧 Email: info@winery.com</li>
            <li>📍 Address: 123 Vingatan, Vin Staden</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <ul className="contact-info">
            <li>Monday - Friday: 10:00 - 20:00</li>
            <li>Saturday: 11:00 - 18:00</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="contact-info">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {currentYear} Winery. All rights reserved.</p>
      </div>
    </footer>
  );
}
