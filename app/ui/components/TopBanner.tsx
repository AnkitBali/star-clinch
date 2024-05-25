'use client';

// components/TopBanner.tsx

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { Spacer, Box, Text } from '@chakra-ui/react';
import CustomButton from './CustomButton';

interface CardProps {
  position: 'left' | 'center' | 'right';
  index: number;
  isSelected: boolean;
  onClick: (e: React.MouseEvent, position: 'left' | 'center' | 'right') => void;
}

const cardVariants: Variants = {
  initial: (index: number) => ({
    x: index === 0 ? -220 : index === 2 ? 220 : 0,
    zIndex: index === 1 ? 2 : 1,
    scale: index === 1 ? 1 : 0.9,
    rotate: index === 0 ? -15 : index === 2 ? 15 : 0,
    top: index === 1 ? '20%' : '30%',
    // transition: {
    //   duration: 0.5,
    //   ease: 'easeInOut',
    //   zIndex: {
    //     delay: .1,
    //   },
    // },
  }),
  selected: {
    x: 0,
    zIndex: 3,
    scale: 1.1,
    rotate: 0,
    // transition: {
    //   duration: 0.5,
    //   ease: 'easeInOut',
    //   zIndex: {
    //     delay: .1,
    //   },
    // },
    // transitionEnd: {
    //   zIndex: 3,
    // },
  },
};

const Card: React.FC<CardProps> = ({ position, index, isSelected, onClick }) => {
  const titles = {
    left: 'Singer',
    center: 'Actor',
    right: 'Rock Band',
  };

  return (
    <motion.div
      custom={index}
      initial="initial"
      animate={isSelected ? 'selected' : 'initial'}
      variants={cardVariants}
      className={`absolute transform -translate-y-1/2 w-[300px] h-[400px] bg-cover bg-center rounded-t-2xl
       ${index === 0 ? '-rotate-12' : index === 2 ? 'rotate-12' : ''}
       ${index === 1 && !isSelected ? 'opacity-90' : index === 1 && isSelected ? 'opacity-100' : index === 0 && isSelected ? 'opacity-100' : index === 2 && isSelected ? 'opacity-100' : 'opacity-60'}`}
      style={{
        backgroundImage: `url('/images/${position}-card.jpeg')`,
      }}
      onClick={(e) => onClick(e, position)}
    >
      
      <div className="relative p-4 text-white bg-gradient-to-b from-transparent to-black bg-opacity-50  h-full flex flex-col justify-end">
        
        <h1 className={`text-3xl ${isSelected && index === 1 ? 'text-center' : isSelected && index === 0 ? 'text-center mb-4' : isSelected && index === 2 ? 'text-center mb-4' : index === 0 ? 'text-left mb-4' : index === 2 ? 'text-right mb-4' : 'text-center'} font-bold`}>{titles[position]}</h1>
        
      </div>
    </motion.div>
  );
};


const TopBanner: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<'left' | 'center' | 'right' | null>(null);

  const handleCardClick = (e: React.MouseEvent, position: 'left' | 'center' | 'right') => {
    e.stopPropagation();
    setSelectedCard((prev) => (prev === position ? null : position));
  };
  
  

  return (
    <div
      className="relative flex flex-col items-center h-[800px] bg-black"
      onClick={() => setSelectedCard(null)}
    >
       {/* Upper Right Quarter Circle */}
<div className=" absolute left-[-20px] top-[0px] w-[800px] h-[800px] overflow-hidden">
  <div className=" opacity-40 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/100 via-orange-500/30 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2" />
</div>
 {/* Top Left Quarter Ellipse */}
 <div className="absolute right-[-0px] top-[-40px] w-[400px] h-[600px] overflow-hidden">
        <div className=" opacity-40 w-[400px] h-[600px] bg-gradient-to-br from-purple-600/100 via-purple-900/30  to-transparent rounded-full transform translate-x-1/3 translate-y-1/4" />
      </div>

    
          <div className="relative flex justify-center items-center h-[600px]">
      {['left', 'center', 'right'].map((position, index) => (
        <Card
          key={position}
          position={position as 'left' | 'center' | 'right'}
          index={index}
          isSelected={selectedCard === position}
          onClick={handleCardClick}
        />
      ))}
      </div>
      <Text lineHeight={"120%"} width={"50%"} textAlign={"center"} fontSize={"60px"} className="text-white mb-[20px] mt-[0px]">
  Explore our <span className="text-[#FF4500]">top performing</span> categories
</Text>

  );
  <Spacer mt={"0px"} />
  <CustomButton>
      View our top performing categories
    </CustomButton>
    </div>
  );
};

export default TopBanner;
