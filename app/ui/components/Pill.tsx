// components/Pill.tsx

import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface PillProps extends BoxProps {
  text: string;
}

const Pill: React.FC<PillProps> = ({ text, style, ...rest }) => {
  return (
    <Box
      borderRadius="full"
      border="1px solid #fff"
      px={6}
      py={1}
      display="inline-block"
      color="white"
      fontSize={"25px"}
      style={{
        backdropFilter: 'blur(1000px)', // Adjust the blur intensity as needed
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent background
        ...style,
      }}
      {...rest}
    >
      {text}
    </Box>
  );
};

export default Pill;
