// components/CustomButton.tsx

import { Button, Box } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  id?: string; 
}

const MotionButton = motion(Button);

const CustomButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <MotionButton
    whileTap={{ scale: 0.99 }} // This adds the bouncy effect on click
      position="relative"
      color={'white'}
      overflow="hidden"
      borderRadius="full"
      backgroundColor="#FF4000"
      _hover={{ bg: '#ff3033' }}
      px={"50px"}
      py={"30px"}
    >
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-br, whiteAlpha.600, transparent, blackAlpha.700)"
        
        pointerEvents="none"
        py={"30px"}
      />
      <Box fontSize={"20px"} >
        {children}
      </Box>
    </MotionButton>
  );
};

export default CustomButton;
