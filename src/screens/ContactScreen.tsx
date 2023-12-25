import MarginWrapper from "@/common/MarginWrapper";
import React from "react";
import { oswald } from "@/utils/Fonts";
import { playFair } from "@/utils/Fonts";

const ContactScreen = () => {
  return (
    <>
      <MarginWrapper>
        <div
          className={`h-auto  bg-red-600 ${oswald} `}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundImage: "url('/assets/images/contact.jpg')",
          }}
          id="contact"
        >
          <div className="contact-container min-[900px]:flex gap-5">
            <div className={`first-div w-[60%]  ${playFair}`}>
              <p className=" text-white text-[50px] ">How Can We</p>
              <p className=" text-white text-[50px] ">help you?</p>

              <form action="" className="flex flex-col gap-5">
                <input type="text" name="name" placeholder="First Name" />
                <input type="text" name="name" placeholder="Last Name" />

                <input type="email" name="email" placeholder="Email" />

                <button className=" w-[15%] p-2 flex justify-center text-white text-left border-2 border-white hover:bg-white hover:text-black uppercase transition-all duration-500 ease-in-out">
                  Submit
                </button>
                <br />
              </form>
            </div>
            <div className="second-div w-[40%] bg-white rounded-lg h-[80vh] flex flex-col items-center justify-center  ">
              <p className="text-[20px] font-semibold my-2 no-underline">
                Talk to Us
              </p>

              <p className="text-[16px] my-2">info@example.com</p>

              <p className="text-[16px] my-2">9023335911</p>

              <p className="text-[16px] my-2 underline cursor-pointer">
                Facebook
              </p>
              <p className="text-[16px] my-2 underline cursor-pointer">
                Github
              </p>
              <p className="text-[16px] my-2 underline cursor-pointer">
                Linkedin
              </p>

              <p className="text-[20px] font-semibold mt-4 mb-2">Visit Us</p>

              <p className="text-[16px] my-2 ">Mohali,Punjab</p>

              <p className="text-[16px] my-2 underline cursor-pointer">
                see on map{" "}
              </p>
            </div>
          </div>
        </div>
      </MarginWrapper>
    </>
  );
};

export default ContactScreen;
