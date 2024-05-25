import Image from "next/image";
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import TopBanner from "./ui/components/TopBanner";
import Gallery from "./ui/components/Gallery";
import ZigZagPosts from "./ui/components/ZigZagPosts";
import Navbar from "./ui/components/Navbar";
import RecentShows from "./ui/components/RecentShows";
// import EllipseComponent from "./ui/components/EllipseComponent";



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
      <RecentShows />
      {/* <EllipseComponent /> */}

    </ChakraProvider>
    
  );
}

export default Home;
