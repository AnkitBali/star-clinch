import Image from "next/image";
import { ChakraProvider } from '@chakra-ui/react'
import TopBanner from "./ui/TopBanner";

export default function Home() {
  return (
    
    <ChakraProvider >
    
      <TopBanner />
      
      

    </ChakraProvider>
    
  );
}
