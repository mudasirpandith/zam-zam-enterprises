import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Center,
} from '@chakra-ui/react';

export default function About() {
  return (
    <>
      <Center
        maxW={'10xl'}
        h={'2xl'}
        p={12}
        bg={'linear-gradient(130deg, #03C988 50%, rgba(246,242,241,1) 50%)'}
        data-aos="fade-down"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Center spacing={4} flexDirection={'column'} color={'pink.500'}>
            <Heading fontSize={'5xl'}>Zam Zam EnterPrises</Heading>
            <Text color={'blue.900'} fontSize={'lg'}>
              We offer a wide range of services to meet all your technology and
              travel needs. From CCTV installations to laptop and mobile
              repairs, and personalized tour and travel experiences, our team is
              dedicated to providing high-quality solutions and creating
              unforgettable memories.
            </Text>
          </Center>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={'https://www.pngmart.com/files/7/Rate-Us-PNG-File.png'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Center>
    </>
  );
}
