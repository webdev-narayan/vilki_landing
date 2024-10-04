import { useState } from "react";
import logo from "../assets/logo-vilki.png"
import Button from "./ui/Button";
import { FaGooglePlay } from "react-icons/fa";


export default function HeaderNav() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <img
                    src={logo}
                    alt="logo"
                    className="h-12"
                />

                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary hover:text-gray-800 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${showMenu ? "" : "hidden"} w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:items-center rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <a
                                href="#about-us"
                                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 "
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 "
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 "
                            >
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a
                                href="tel:+917509095550"
                                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  "
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                href="https://admin.vilkimedicart.in/auth"
                                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0  "
                            >
                                Login
                            </a>
                        </li>

                        <Button
                            href={"https://admin.vilkimedicart.in/registration"}
                            text={"Get the App"} Icon={<FaGooglePlay />} className={"bg-primary text-white w-fit"} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
