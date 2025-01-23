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
      <img src="/assets/github.svg" alt="github" className="w-6 h-6" />
    </div>
    <div className="social-icon">
      <img src="/assets/twitter.svg" alt="twitter" className="w-6 h-6" />
    </div>
    <div className="social-icon">
      <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6" />
    </div>
  </div>

  {/* Copyright Text */}
  <p className="text-white-500 text-sm">© 2025 Siddharth Shukla. All rights reserved.</p>
</footer>
);
};

export default Footer;
