import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import useSpace from '../hooks/useSpace.js';
// import title02 from '../assets/images/title02.svg';
import ship02 from '../assets/images/hero/ship02.png';

const Section02 = () => {
  const { space } = useSpace();
  return (
    <Flex
      w="100%"
      justify="center"
      position="relative"
      bg="#FFFEF6"
      py="72px"
      px="16px"
    >
      <Image
        src={ship02}
        position="absolute"
        w="50vw"
        maxW="300px"
        bottom="20px"
        right="30%"
        opacity="0.1"
      />

      <Flex w={space} position="relative" direction="column" align="center">
        <Heading color="sun">港動‧踏訪</Heading>
        <Text
          color="grey.800"
          pt="20px"
          maxW="400px"
          fontWeight="600"
          textAlign="center"
        >
          循著歷史中的印記，踏訪淡水河港人文景致，尋覓馬偕博士百年足跡。
        </Text>
        <Text
          pt="20px"
          fontSize="32px"
          color="grey.500"
          textAlign="center"
          opacity=".8"
          letterSpacing="2px"
          fontWeight="800"
        >
          即將公布，敬啟期待
        </Text>
      </Flex>
    </Flex>
  );
};

export default Section02;
