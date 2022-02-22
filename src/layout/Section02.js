import { Flex, Box, Heading, Text, Image } from '@chakra-ui/react';

import title from '../assets/images/title/title02.svg';
import ship02 from '../assets/images/hero/ship02.png';
import ship04 from '../assets/images/hero/ship04.png';

const Section02 = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      position="relative"
      bg="#FFFEF6"
      py="60px"
      px="16px"
      minH="400px"
      bgGradient="linear(to-b, sun, #B0DEEA)"
      // bgImage={`url('${coming}')`}
      bgSize="cover"
      direction="column"
      align="center"
      overflow="hidden"
    >
      <Image
        src={ship02}
        w="200px"
        h="auto"
        display={['none', 'none', 'none', 'block']}
        position="absolute"
        bottom="30%"
        left="-30px"
      />
      <Image
        src={ship04}
        w={{ base: '80px', lg: '180px' }}
        h="auto"
        position="absolute"
        bottom="3%"
        right="80px"
        display={['none', 'none', 'none', 'block']}
      />
      <Image src={title} h={{ base: '140px', lg: '280px' }} pb="30px" />
      <Text
        maxW="400px"
        textAlign="center"
        color="white"
        fontWeight="700"
        fontSize="20px"
      >
        循著歷史中的印記，踏訪淡水河港人文景致，
        <br />
        尋覓馬偕博士百年足跡。
      </Text>
      <Text
        maxW="400px"
        textAlign="center"
        pt="30px"
        color="#649FBD"
        fontSize={{ base: '20px', lg: '40px' }}
        fontWeight="bold"
        lineHeight="40px"
      >
        敬啟期待
      </Text>
      <Text textAlign="center" color="#649FBD" fontSize="30px">
        COMING SOON
      </Text>
    </Flex>
  );
};

export default Section02;
