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
      <footer className="px-10 my-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8 text-neutral-600">
            <div>
              <img className="-mb-4" src={logo} />
              <p className="text-xl text-balance text-neutral-600">
                Bawika. Together we learn Javanese Language and Culture!
                Let&apos;s explore colorful stories, songs and traditions.
              </p>
              <ul className="flex flex-row gap-4 mt-4 text-neutral-600">
                <li>
                  <Link to={"#"}>
                    <FaSquareFacebook className="size-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaSquareTwitter className="size-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaSquareInstagram className="size-8" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaLinkedin className="size-8" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 mt-10">
              <h3 className="text-3xl font-semibold">Deaprtments</h3>
              <ul className="flex flex-col gap-4 text-lg">
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
            <div className="flex flex-col gap-6 mt-10">
              <h3 className="text-3xl font-semibold">Quick Links</h3>
              <ul className="flex flex-col gap-4 text-lg">
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
            <div className="flex flex-col gap-6 mt-10">
              <h3 className="text-3xl font-semibold">Blog Post</h3>
              <ul className="flex flex-col gap-4 text-lg">
                <li>
                  <Link to={"#"}>
                    <p className="text-neutral-900">22.05.2019</p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident,sunt in
                      culpa.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <p className="text-neutral-900">22.05.2019</p>
                    <p>
                      Excepteur sint occaecat cupidatat non proident,sunt in
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
