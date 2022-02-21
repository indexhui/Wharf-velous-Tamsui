import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useSpace from '../hooks/useSpace.js';
import Section01Item from '../components/Section01Item.js';
// import title01 from '../assets/images/title01.svg';
import bank from '../assets/images/bank.png';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Section01 = () => {
  const { space } = useSpace();
  const variants = {
    visible: custom => ({
      opacity: 1,
      color: '#F9BF2D',
      y: 0,
      transition: {
        delay: (custom.order || 0) * 0.2,
        duration: custom.duration || 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({
      color: '#549EBE',
      opacity: 0.5,
      y: custom.y || 25,
    }),
  };
  const textVariants = {
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (custom.order || 0) * 0.2,
        duration: custom.duration || 0.5,
        type: 'tween',
      },
    }),
    hidden: custom => ({
      opacity: 0.5,
      y: custom.y || 25,
    }),
  };

  const transition = { duration: 0.5, type: 'tween' };
  return (
    <Flex w="100%" justify="center" position="relative" px="16px">
      <Image
        src={bank}
        position="absolute"
        w="900px"
        left="-300px"
        top="100px"
      />
      {/* <Box
        position="absolute"
        w="100%"
        h="200px"
        bgGradient="linear(to-b, sun, rgba(250,192,45,0))"
      ></Box> */}
      <Flex
        w={space}
        py={{ base: '30px', lg: '80px' }}
        direction="column"
        zIndex="2"
        position="relative"
      >
        <Flex direction="column" w="100%" align="center" position="relative">
          {/* <Box
            position="absolute"
            top="50px"
            w="100px"
            h="100px"
            bg="sun"
            l="-50px"
            rounded="full"
            opacity=".3"
          ></Box> */}
          {/* <Image src={title01} w="40px" /> */}
          <MotionHeading
            letterSpacing="2px"
            custom={{
              order: 0,
              duration: 0.75,
              y: 25,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={variants}
            transition={transition}
          >
            港動‧映現
          </MotionHeading>
          <MotionText
            pt="16px"
            color="gray.600"
            fontWeight="600"
            letterSpacing="1.5px"
            maxW="400px"
            fontSize="20px"
            textAlign="center"
            custom={{
              order: 0,
              duration: 0.75,
              y: 25,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={textVariants}
            transition={transition}
          >
            乘著淡水河岸翻湧浪潮，以藝文與展演，映現出叱吒國際的貿易商港年代
          </MotionText>
        </Flex>
        <Flex w="100%">
          <Section01Item />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Section01;
