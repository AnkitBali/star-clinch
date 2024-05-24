import Image from "next/image";
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import TopBanner from "./ui/TopBanner";
import Gallery from "./ui/Gallery";
import ZigZagPosts from "./ui/ZigzagPosts";
import Navbar from "./ui/components/Navbar";



const Home: React.FC = () => {
  const posts = [
    {
      title: 'Late Night Maggie Party for the boost',
      imageUrl: 'images/maggie.jpeg',
    },
    {
      title: 'Late Night Maggie Party for the boost',
      imageUrl: 'images/maggie.jpeg',
    },
    {
      title: 'Late Night Maggie Party for the boost',
      imageUrl: 'images/maggie.jpeg',
    },
    {
      title: 'Late Night Maggie Party for the boost',
      imageUrl: 'images/maggie.jpeg',
    },
    // Add more post objects as needed
  ];

  return (
    
    <ChakraProvider >
    <Navbar />
      <TopBanner />
      <Gallery />
      <ZigZagPosts posts={posts} />
      
      

    </ChakraProvider>
    
  );
}

export default Home;
