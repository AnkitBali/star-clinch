'use client';

import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import CustomButton from './CustomButton';

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
