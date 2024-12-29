import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () =>{
    return(
          <div>
               <footer className="bg-black text-white w-full h-[200px] mt-28">
                <p className="text-center pt-28">© 2024 Attiya Makeup Store. All rights reserved.</p>
                 <div className="flex justify-center items-center gap-3 mt-3">
                 <FaFacebook className="hover:text-pink-400" />
                 <FaInstagram className="hover:text-pink-400"  />
                 <FaTwitter className="hover:text-pink-400"  />
                 <FaLinkedin className="hover:text-pink-400"  />
                 </div>
               </footer>
          </div>
    )
}

export default Footer;