"use client";
import MarginWrapper from "@/common/MarginWrapper";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { projects } from "@/mockdata";
const ProjectsScreen = () => {
  return (
    <>
      <MarginWrapper>
        <div className="project-wrapper  py-10  h-[100vh]" id="projects">
          <p className="text-white text-center min-[900px]:text-[50px] text-[30px] uppercase font-medium">
            Our Projects
          </p>
          <Carousel className="w-full my-5">
            <CarouselContent className="cursor-pointer">
              {projects.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                  
                    <Card className="bg-transparent border-0">
                      <CardContent
                        className="flex aspect-square items-center justify-center  p-6"
                        onClick={() => {
                          window.open(item.link, "_blank");
                        }}
                      >
                        <Image
                          alt="no image"
                          width={100}
                          height={100}
                          className="object-cover rounded-lg w-[100%] h-[100%]"
                          unoptimized
                          src={item.image}
                        />
                      </CardContent>
                    </Card>
                    <p className="uppercase text-blue-400 text-[26px]  text-center font-semibold py-2">
                      {item.name}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="projects-container"></div>
        </div>
      </MarginWrapper>
    </>
  );
};

export default ProjectsScreen;
