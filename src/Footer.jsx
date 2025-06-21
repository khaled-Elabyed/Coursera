"use client";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <div container className="bg-gray-800 text-white">
      <div className="w-full">
        <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <div className="flex flex-col space-y-2">
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Brand Center</a>
              <a href="#">Blog</a>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-2">
              <a href="#">Discord Server</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-2">
              <a href="#">Privacy Policy</a>
              <a href="#">Licensing</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-2">
              <a href="#">iOS</a>
              <a href="#">Android</a>
              <a href="#">Windows</a>
              <a href="#">MacOS</a>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>{" "}
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <BsFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <BsInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <BsTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <BsGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <BsDribbble />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
