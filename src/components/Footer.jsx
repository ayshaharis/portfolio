import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white text-center py-6 flex flex-col items-center space-y-3 ">
        <p>© 2025 Aysha Haris | Connect with me on GitHub, LinkedIn</p>
        <div className="flex space-x-4 text-xl">
        <a href=""><FaGithub/></a>
        <a><FaLinkedin/></a>

        </div>

      </footer>
    );
  };
  export default Footer;