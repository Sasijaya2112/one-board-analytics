import { Button } from 'react-bootstrap';
import { FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import './FloatingSocialButtons.css'; // CSS file for styling

function FloatingSocialButtons() {
  return (
    <div className="floating-social-buttons">
      <Button
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="button facebook"
      >
        <FaLinkedin />
      </Button>

      <Button
        href="https://youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
      >
        <FaYoutube />
      </Button>

      <Button
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="button instagram"
      >
        <FaFacebook />
      </Button>
    </div>
  );
}

export default FloatingSocialButtons;
