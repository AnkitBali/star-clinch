'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

interface GalleryItem {
  src: string;
  type: "photo" | "video";
}

const Gallery: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"photo" | "video">("photo");
  const [currentIndex, setCurrentIndex] = useState(0);

  const items: GalleryItem[] = [
    { src: '/images/zakhir.jpeg', type: "photo" },
    { src: "/images/zakhir.jpeg", type: "photo" },
    { src: "/images/zakhir.jpeg", type: "photo" },
    { src: "/images/zakhir.jpeg", type: "photo" },
    { src: "/images/zakhir.jpeg", type: "photo" },
    { src: "/images/zakhir.jpeg", type: "photo" },
    { src: "/images/zakhirVideo.mp4", type: "video" },
    { src: "/images/zakhirVideo.mp4", type: "video" },
    { src: "/images/zakhirVideo.mp4", type: "video" },
    { src: "/images/zakhirVideo.mp4", type: "video" },
    { src: "/images/zakhirVideo.mp4", type: "video" },
    { src: "/images/zakhirVideo.mp4", type: "video" },
  ];

  const filteredItems = items.filter((item) => item.type === selectedTab);

  const handleTabChange = (value: "photo" | "video") => {
    setSelectedTab(value);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(filteredItems.length - 2, 0) : prevIndex - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= filteredItems.length ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="my-40 flex flex-col space-y-20 items-center">
      <div className="flex justify-center w-full mb-4 space-x-4">
        <Button
        borderRadius={"full"}
          colorScheme="orange"
          size="lg"
          variant={selectedTab === "photo" ? "solid" : "outline"}
          onClick={() => handleTabChange("photo")}
        >
          Photos
        </Button>
        <Button
        borderRadius={"full"}
          colorScheme="orange"
          size="lg"
          variant={selectedTab === "video" ? "solid" : "outline"}
          onClick={() => handleTabChange("video")}
        >
          Videos
        </Button>
      </div>
      <div className="relative flex justify-center h-96 space-x-4">
        {filteredItems.slice(currentIndex, currentIndex + 2).map((item, index) => (
          item.type === "photo" ? (
            <motion.div
              key={index}
              className={`item-center relative transition-opacity ${
                index < 2 ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index < 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-[400px] h-[400px] relative">
                <Image
                  src={item.src}
                  alt={`Gallery item ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          ) : (
            <motion.video
              key={index}
              src={item.src}
              controls
              className={`w-[400px] h-[400px] object-cover transition-opacity ${
                index < 2 ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index < 2 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          )
        ))}
        <ChevronLeftIcon
          className="absolute top-1/2 left-4 w-10 h-10 text-white cursor-pointer bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
          onClick={handlePrev}
        />
        <ChevronRightIcon
          className="absolute top-1/2 right-4 w-10 h-10 text-white cursor-pointer bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
          onClick={handleNext}
        />
      </div>
      <div className="flex mt-4">
        {filteredItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mr-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      {/* <p className="mt-2 text-gray-500">Total Items: {filteredItems.length}</p> */}
    </div>
  );
};

export default Gallery;
