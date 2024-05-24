'use client';

import React from 'react';
import { VStack, Box, Image, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Post {
  title: string;
  imageUrl: string;
}

interface ZigZagPostsProps {
  posts: Post[];
}

const ZigZagPosts: React.FC<ZigZagPostsProps> = ({ posts }) => {
  return (
    <VStack spacing="20px">
      {posts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '50%',
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <motion.div
            initial={{ rotate: 0, opacity: 0.7 }}
            whileHover={{ rotate: 0, opacity: 1 }}
            className='space-x-4 px-8'
          >
            <Heading size="lg" color="white">
              {post.title}
            </Heading>
          </motion.div>
          <motion.div
            initial={{ rotate: 20, opacity: 0.7, zIndex: 1 }}
            whileHover={{ rotate: -10, opacity: 1, zIndex: 3, zoom: 1.1 }}
            transition={{ duration: 0.5 }}
            
          >
            <Image
              borderRadius="10px"
              src={post.imageUrl}
              alt={post.title}
              boxSize="400px"
              style={{ opacity: 0.7 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </VStack>
  );
};

export default ZigZagPosts;
