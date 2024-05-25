'use client';

import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import CustomButton from './CustomButton';
import '@fontsource/pacifico'; // Import Pacifico font

const MotionBox = motion(Box);

const EllipseComponent: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black">
      {/* First Purple Circle */}
      <div className="absolute left-[200px] top-[00px] w-[600px] h-[500px]">
        <div className="w-[600px] h-[500px] bg-purple-500 bg-gradient-to-br from-purple-700 via-purple-900 to-black rounded-full transform -translate-x-1/2 translate-y-1/2" />
      </div>
      {/* Second Purple Circle */}
      <div className="absolute right-[100px] top-[20px] w-[400px] h-[550px]">
        <div className="w-[400px] h-[550px] bg-purple-500 bg-gradient-to-br from-purple-600/100 via-black to-transparent rounded-full transform translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Blurred Ellipse with Gradient and Partial Border */}
      <MotionBox
        className="relative flex flex-col space-y-8 items-center justify-center w-[1100px] h-[500px] bg-gradient-to-br from-transparent via-orange-10/30 to-transparent rounded-full overflow-hidden p-4 backdrop-filter border border-white backdrop-blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* New Text with Pacifico Font */}
        <Text
          className="absolute text-purple-500"
          style={{
            fontFamily: 'Pacifico',
            fontSize: '30px',
            transform: 'rotate(-20deg)',
            top: '50px',
            left: '150px',
          }}
        >
          We are a team of
        </Text>
        {/* Curved Arrow SVG */}
        <svg
  className="absolute"
  style={{ top: '-20px', left: '400px', transform: 'rotate(60deg)' }}
  width="100"
  height="100"
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 90 C 40 10, 60 10, 90 90"
    stroke="white"
    strokeWidth="2"
    fill="none"
    markerEnd="url(#arrowhead)"
  />
  <defs>
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="7"
      refX="10"
      refY="3.5"
      orient="auto"
    >
      <polygon points="0 0, 10 3.5, 0 7" fill="white" />
    </marker>
  </defs>
</svg>
        <Text fontSize={"60px"} className="text-white text-center font-bold mb-2">20 + talented folks</Text>
        <Text width={"60%"} textAlign={"center"} fontSize={"20px"} className="text-white text-center mb-4">
          From passion driven dedication to impactful contributions, we do it all here. We are growing and we will be excited to hear from you!
        </Text>
        <CustomButton>Join Our Team →</CustomButton>
        <div className="absolute inset-0 w-full h-full border-full border-white" ></div>
      </MotionBox>
    </div>
  );
};

export default EllipseComponent;
