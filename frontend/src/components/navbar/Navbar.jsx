import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import data from "@/data/data";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("hidden");
  const onClickHandler = () => {
    dropdown === "hidden" ? setDropdown("") : setDropdown("hidden");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://assets-global.website-files.com/6492bbb37e861bae839b64d8/65790c0c4d08d80773edcbc7_IVBlu---Green-Logo-Transparent.png"
            className="h-16"
            alt="logo"
          />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Get started
                    </button> */}
          {/* <Button className="rounded-xl">BOOK</Button> */}
          <button
            onClick={onClickHandler}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
                strokeLinecap={'round'}
                strokeLinejoin={"round"}
                strokeWidth={"2"}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${dropdown}`}
        >
          <div>
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start justify-start sm:flex-row ">
                <div className="">
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                    <Link to="/all-products">
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Products
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                    <Link to="/all-treatments">
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Treatments
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                    <Link to="/all-services">
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                    <Link to="/all-services">
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Beauty
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                    <Link to="/all-services">
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Weight Loss
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Membership
                      </NavigationMenuLink>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        eGift Cards
                      </NavigationMenuLink>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        FAQ
                      </NavigationMenuLink>
                  </NavigationMenuItem>
                </div>
                <div className="">
                  <NavigationMenuItem>
                    <Link to="/login">
                      <NavigationMenuLink
                        onClick={onClickHandler}
                        className={navigationMenuTriggerStyle()}
                      >
                        Login
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
