import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNev = () => {
    return (
        <div>
           <div className="p-4 space-y-3 mb-6">
            <h2 className="text-2xl">Loging With</h2>
            <button className="btn btn-outline w-full">
                <FcGoogle></FcGoogle>Google
            </button>
            <button className="btn btn-outline w-full">
                <BsGithub></BsGithub>GitHub
            </button>
           </div>
           <div className="p-4 space-y-3 mb-6">
            <h2 className="text-2xl">Find Us</h2>
            <button className="btn btn-outline w-full">
                <FaFacebookF></FaFacebookF> Facebook
            </button>
            <button className="btn btn-outline w-full">
                <FaTwitter></FaTwitter> Twitter
            </button>
            <button className="btn btn-outline w-full">
              <FaInstagram></FaInstagram> Intragram
            </button>
           </div>

           {/* Q Zone */}
           <div className="p-4 space-y-3 mb-6">
            <h2 className="text-2xl">Q Zone</h2>
           <img src={qZone} alt="" />
           <img src={qZone2} alt="" />
           <img src={qZone3} alt="" />
           </div>

        </div>
    );
};

export default RightSideNev;