"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navbar } from "../mockdata/index";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navRef = useRef(null);
  const scrollPosition = useScrollPosition();

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        className={`navbar-wrapper max-[900px]:hidden ${
          scrollPosition > 50 ? "bg-black" : "bg-transparent border-b-black border-b-1"
        }  px-10 h-auto py-5 fixed top-0 w-[100%] transition-all duration-500 ease-in-out  flex justify-between items-center`}
      >
        <a href="#home">
          <Image
            src="/assets/icons/logo.png"
            className="object-cover w-[100%] h-auto"
            width={100}
            alt="logo img"
            height={100}
          />
        </a>
        <div className=" gap-5 items-center min-[900px]:flex max-[900px]:hidden">
          <ul className="flex gap-5 font-semibold cursor-pointer ">
            {navbar?.map((item, idx) => (
              <div key={idx}>
                <a href={item.href}>
                  <li
                    className={`navbar-list-li ${
                      selectedTab === idx && "navbar-list-li-active"
                    }`}
                    key={idx}
                    ref={idx === 0 ? navRef : null}
                    onClick={() => setSelectedTab(idx)}
                  >
                    {item.name}
                  </li>
                </a>
              </div>
            ))}
          </ul>
          <a href="#contact">
            <button
              className={`p-3 bg-black cursor-pointer rounded-2xl text-white font-semibold transition-all duration-300 ease-in-out border-2 ${
                scrollPosition > 50 ? "border-white" : ""
              } hover:bg-white hover:text-black `}
            >
              Discuss A Project
            </button>
          </a>
        </div>
      </div>

      <div className="sidebar-container bg-black px-2  h-auto flex justify-between items-center fixed w-full top-0 z-10  min-[900px]:hidden">
        <a href="#home">
          <Image
            src="/assets/icons/logo.png"
            className="object-cover w-full h-auto"
            width={100}
            alt="logo img"
            height={100}
          />
        </a>
        <div className="flex gap-2">
          <a href="#contact">
            <button className="p-2 bg-black cursor-pointer rounded-2xl text-white font-semibold transition-all duration-300 ease-in-out border-2 hover:bg-white hover:text-black">
              Discuss A Project
            </button>
          </a>

          <div>
            <Sheet
              open={isOpen === true}
              onOpenChange={(state) => {
                setIsOpen(state);
              }}
            >
              <SheetTrigger asChild className="">
                <Button className="bg-black active:bg-black">
                  <IoMenu className="cursor-pointer   text-3xl " />
                </Button>
              </SheetTrigger>

              <SheetContent className="bg-black text-white">
                <div className="list ">
                  <ul className="mt-7 md:mt-5 flex flex-col gap-2 text-[20px] min-[900px]:text-[30px] cursor-pointer">
                    <div className="list  ">
                      <ul className="md:mt-5 flex flex-col gap-2 text-[20px] min-[900px]:text-[30px] cursor-pointer">
                        <a href="#home">
                          <li
                            className="navbar-list-li "
                            onClick={handleCloseSidebar}
                          >
                            Home
                          </li>
                        </a>
                        <a href="#services">
                          <li
                            className="navbar-list-li  "
                            onClick={handleCloseSidebar}
                          >
                            services
                          </li>
                        </a>
                        <a href="#projects">
                          <li
                            className="navbar-list-li "
                            onClick={handleCloseSidebar}
                          >
                            Our Projects
                          </li>
                        </a>
                      </ul>
                    </div>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
