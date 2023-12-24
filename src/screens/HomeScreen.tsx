import React from "react";

const HomeScreen = () => {
  return (
    <>
      <div
        className="h-[100vh]  flex justify-center items-center object-center  bg-cover"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('/assets/images/car.png')",
        }}
        id="home"
      >
        <p>home page</p>
      </div>
    </>
  );
};

export default HomeScreen;
