import { Link } from "react-scroll";

const Navbar=()=>{
    return(
       <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4">
        <ul  className=" m-2 flex justify-center space-x-6">
            <li><Link to="intro" className="cursor-pointer" smooth={true} duration={1000} >Intro</Link></li>
            <li><Link to="projects"  className="cursor-pointer" smooth={true} duration={1000} >Projects</Link></li>
            <li><Link to="skills" className="cursor-pointer"smooth={true} duration={1000} >Skills</Link></li>
            <li><Link to="contact"  className="cursor-pointer" smooth={true} duration={1000} >contact</Link></li>
        </ul>
       </nav>
    )

}
export default Navbar;