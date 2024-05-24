"use client";

import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  IconButton,
  CloseButton,
  HStack,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      as="header"
      bg="black"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.05)"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        py={3}
      >
        <Box>
          <Link href="/">
            <Image src="/images/logo.png" width="150px" alt="Logo" />
          </Link>
        </Box>

        {/* Hamburger menu button for mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            onClick={toggleMenu}
          />
        </Box>

        {/* Navigation links */}
        <Box
          display={{ base: "none", md: "flex" }}
          flexBasis={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
        >
          <Link
            // fontWeight="bold"
            color="white"
            // _hover={{ color: "gray.600" }}
            
            href="/"
            className=" font-bold text-white mx-8"
            // fontSize={'18px'}
          >
            <Flex className="">
            Book Celebrities <Text className="  ml-2" fontSize={'18px'}>↓</Text>
            </Flex>
          </Link>
          <Link
            // fontWeight="bold"
            color="white"
            // _hover={{ color: "gray.600" }}
            // mx={3}
            href="/#techstack"
            className=" font-bold text-white mx-8"
            // fontSize={'18px'}
          >
            Join Community
          </Link>
          <Link
            // fontWeight="bold"
            color="white"
            // _hover={{ color: "gray.600" }}
            // mx={4}
            href="/#projects"
            className=" font-bold text-orange-800 mx-8"
            // fontSize={'18px'}
          >
            Post Your Requirements
          </Link>
        </Box>
      </Box>

      {/* Mobile Menu */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        position="absolute"
        right={0}
        bg="black"
        py={4}
        px={4}
        // boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="md" // Add rounded borders
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" // Add box shadow
      >
        {/* <CloseButton onClick={toggleMenu} /> */}
        <Box>
          <NavItem href="/" onClick={toggleMenu}>
          Book Celebrities
          </NavItem>
          <NavItem href="/#techstack" onClick={toggleMenu}>
          Join Community
          </NavItem>
          <NavItem href="/#projects" onClick={toggleMenu}>
          Post Your Requirements
          </NavItem>
          
        </Box>
      </Box>
    </Box>
  );
};

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => {
  return (
    <Box as="li" my={2} mx={{ base: 0, md: 2 }}>
      <Link
        href={href}
        onClick={onClick}
        // fontWeight="bold"
        // fontSize={"16px"}
        color="white"
        // _hover={{ color: "gray.600" }}
      >
        {children}
      </Link>
    </Box>
  );
};

export default Navbar;
