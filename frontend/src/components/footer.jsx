import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-10 my-16">
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-neutral-600">
            {/* Logo and Description */}
            <div>
              <img className="-mb-4" src={logo} alt="Bawika Logo" />
              <p className="text-sm md:text-base text-neutral-600 mt-4">
                Bawika. Together we learn Javanese Language and Culture! Let&apos;s
                explore colorful stories, songs, and traditions.
              </p>
              <ul className="flex flex-row gap-4 mt-4 text-neutral-600">
                <li>
                  <Link to={"#"}>
                    <FaSquareFacebook className="w-6 h-6 md:w-8 md:h-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaSquareTwitter className="w-6 h-6 md:w-8 md:h-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaSquareInstagram className="w-6 h-6 md:w-8 md:h-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Departments Section */}
            <div className="flex flex-col justify-center items-center text-center lg:text-left lg:justify-start lg:items-start gap-4 sm:gap-6">
              <h3 className="text-lg md:text-xl lg:text-3xl font-semibold">
                Departments
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-4 text-sm md:text-lg">
                <li>
                  <Link to={"#"}>Family Medicine</Link>
                </li>
                <li>
                  <Link to={"#"}>Women’s Health</Link>
                </li>
                <li>
                  <Link to={"#"}>Optician</Link>
                </li>
                <li>
                  <Link to={"#"}>Pediatrics</Link>
                </li>
                <li>
                  <Link to={"#"}>Dermatology</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-lg md:text-xl lg:text-3xl font-semibold">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-4 text-sm md:text-lg">
                <li>
                  <Link to={"#"}>Our Doctors</Link>
                </li>
                <li>
                  <Link to={"#"}>Appointment</Link>
                </li>
                <li>
                  <Link to={"#"}>Blog Post</Link>
                </li>
                <li>
                  <Link to={"#"}>Shop Product</Link>
                </li>
                <li>
                  <Link to={"#"}>Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Blog Post Section */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-lg md:text-xl lg:text-3xl font-semibold">
                Blog Post
              </h3>
              <ul className="flex flex-col gap-2 sm:gap-4 text-sm md:text-lg">
                <li>
                  <Link to={"#"}>
                    <p className="text-neutral-900">22.05.2019</p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <p className="text-neutral-900">22.05.2019</p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa.
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
