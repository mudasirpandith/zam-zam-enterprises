import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

import Hotel1 from '../Images/hotel1.jpg';
import Hotel2 from '../Images/hotel2.jpg';
import Hotel3 from '../Images/hotel3.jpg';
import Hotel4 from '../Images/hotel4.jpg';
import Hotel5 from '../Images/hotel5.jpg';
import Hotel6 from '../Images/hotel6.jpg';
import Hotel7 from '../Images/hotel7.jpg';
// import Hotel8 from '../Images/hotel8.jpg';
export default function ServiceCCTV() {
  const ImagesList = [
    Hotel1,
    Hotel2,
    Hotel3,
    Hotel4,
    Hotel4,
    Hotel5,
    Hotel6,
    Hotel7,
  ];

  return (
    <Container
      maxW={'10xl'}
      backgroundImage=""
      bg={
        'linear-gradient(180deg, rgba(233,249,243,1) 7%, rgba(115,219,180,1) 76%, rgba(151,242,212,1) 91%)'
      }
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={'https://www.pngmart.com/files/6/CCTV-Transparent-PNG.png'}
            fit={'cover'}
            align={'center'}
            w={'90%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={'pink.500'}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              CCTV Installation
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={'xl'} py={1} fontWeight={'sm'} color={'grey'}>
                Don't compromise safety and security. ZamZam offers professional
                CCTV installation for your building layout. Get a CCTV system
                for your home or workplace today, and prioritize your safety and
                peace of mind.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Home CCTV Installation</ListItem>
                  <ListItem>School CCTV Instagram</ListItem>{' '}
                  <ListItem>Bus Tickets</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Home CCTV Installation</ListItem>
                  <ListItem>School CCTV Instagram</ListItem>{' '}
                  <ListItem>Bus Tickets</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={200}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={'pink.300'}
            onClick={() => {
              window.open('https://wa.me/+916005531442');
            }}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            rightIcon={<FaWhatsapp />}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
          >
            Book Now
          </Button>
        </Stack>
      </SimpleGrid>
      <Heading textAlign={'center'}>Gallery</Heading>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 10 }}
      >
        {ImagesList.map((img, index) => {
          return (
            <>
              <Image
                key={index}
                data-aos="zoom-in"
                rounded={'md'}
                alt={'product image'}
                src={img}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '400px' }}
              />
            </>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
