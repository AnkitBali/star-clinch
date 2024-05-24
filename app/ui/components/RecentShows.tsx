'use client';

import { FC, useState } from 'react';
import { Box, Heading, IconButton, Image, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const shows = [
  { id: 1, title: "Nora Fatehi for an event performed by XYZ at Pune", image: "/images/zakhir.jpeg" },
  { id: 2, title: "Nora Fatehi for an event performed by XYZ at Pune", image: "/images/zakhir.jpeg" },
  { id: 3, title: "Nora Fatehi for an event performed by XYZ at Pune", image: "/images/zakhir.jpeg" },
  // Add more shows as needed
];
const MotionBox = motion(Box);

const RecentShows: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? shows.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === shows.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Box className="mt-40 container mx-auto p-4">
      <Heading className='text-white' textAlign="center" as="h1" size="xl" mb={4}>
        Recent shows made star studded via Star-clinch
      </Heading>
      <Box position="relative" className='flex justify-center' overflow="hidden">
        <Flex alignItems="center" justifyContent="center" position="relative">
          <IconButton
            aria-label="Scroll left"
            icon={<FaArrowLeft />}
            position="absolute"
            left={0}
            zIndex={10}
            bg="white"
            rounded="full"
            boxShadow="md"
            onClick={handlePrev}
          />
          <MotionBox
            className="flex justify-center space-x-4 overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            key={shows[currentIndex].id}
            transition={{
              duration: 0.5,
            }}
          >
            <Flex className='mt-20 mx-40' alignItems="center" space-x={4}>
              <Image
                src={shows[currentIndex].image}
                alt={shows[currentIndex].title}
                boxSize="400px"
                borderRadius="full"
                mr={4}
              />
              <Text className='w-1/2 text-white' fontSize="40px">{shows[currentIndex].title}</Text>
            </Flex>
          </MotionBox>
          <IconButton
            aria-label="Scroll right"
            icon={<FaArrowRight />}
            position="absolute"
            right={0}
            zIndex={10}
            bg="white"
            rounded="full"
            boxShadow="md"
            onClick={handleNext}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default RecentShows;
