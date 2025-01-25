const Footer = () => {
  return (
    <footer className="c-space pt-10 pb-5 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
  {/* Terms and Privacy Policy */}
  <div className="text-white-500 flex gap-2">
    <p>Terms & Conditions</p>
    <p>|</p>
    <p>Privacy Policy</p>
  </div>

  {/* Social Media Icons */}
  <div className="flex gap-3">
    <div className="social-icon">
      <a href="https://github.com/siddshukla" target="_blank" rel="noopener noreferrer">
        <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
      </a>
    </div>
    <div className="social-icon">
      <a href="https://www.linkedin.com/in/siddharth-shukla-811302272/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
      </a>

    </div>
    <div className="social-icon">
      <a href="https://x.com/SanskSidd" target="_blank" rel="noopener noreferrer">
        <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
      </a>
    </div>
  </div>

  {/* Copyright Text */}
  <p className="text-white-500 text-sm">© 2025 Siddharth Shukla. All rights reserved.</p>
</footer>
);
};

export default Footer;
