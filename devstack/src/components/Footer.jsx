import logo from '../assets/logo-text.png';
const Footer = () => {
  return (
    <footer className="bg-white text-base-content border-t border-base-900 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 font-bold text-2xl">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            Curted tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com"  className="text-slate-600">GitHub</a>
            <a href="https://twitter.com" className="text-slate-600">Twitter</a>
            <a href="https://linkedin.com" className="text-slate-600">LinkedIn</a>
          </div>
        </div>
        <div>
          <span className="footer-title font-bold text-black block mb-3">Product</span>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#tech" className="hover:underline">Technologies</a></li>
            <li><a>Projects</a></li>
          </ul>
        </div>
        <div>
          <span className="footer-title font-bold text-black block mb-3">Company</span>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Careers</a></li>
          </ul>
        </div>
        <div>
          <span className="footer-title font-bold text-black block mb-3">Legal</span>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><a>Privacy Policy</a></li>
            <li><a>Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto px-4 pt-6 border-t border-base-900 text-gray-500 flex justify-between text-sm">
        <span >© 2026 Dev Stack. All rights reserved.</span>
        <span className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
        </span>
      </div>
    </footer>
  );
};
export default Footer;