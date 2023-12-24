import { services } from "@/mockdata";
import Image from "next/image";
import React from "react";

const ServicesScreen = () => {
  return (
    <>
      <div className="service-wrapper bg-black  " id="services">
        <div className="py-10 px-5 ">
          <p className="text-white text-center min-[900px]:text-[50px] text-[30px] uppercase font-medium">
            our services for clients
          </p>

          <div className="services-cards grid py-20 gap-4 min-[900px]:grid-cols-3 grid-cols-1  min-[900px]:px-40 ">
            {services?.map((item: any, idx) => (
              <div
                className="card bg-[#101010]  border-b-4 border-blue-400 text-white px-5 transition-all duration-500 ease-in-out
                hover:bg-blue-400 hover:text-black hover:border-b-4 hover:border-white"
                key={idx}
              >
                <Image
                  width={100}
                  height={100}
                  src={item.icon}
                  className="w-[50px] items-start object-cover py-5 "
                  alt="card image"
                />

                <p className="uppercase text-left text-3xl font-semibold py-5">
                  {item.heading}
                </p>
                <p className="text-left font-semibold pb-4 w-[90%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesScreen;
