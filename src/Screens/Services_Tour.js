import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import ServicesSection from '../utils/Services';
  import Hotel1 from '../Images/hotel1.jpg';
  import Hotel2 from '../Images/hotel2.jpg';
  import Hotel3 from '../Images/hotel3.jpg';
  import Hotel4 from '../Images/hotel4.jpg';
  import Hotel5 from '../Images/hotel5.jpg';
  import Hotel6 from '../Images/hotel6.jpg';
  import Hotel7 from '../Images/hotel7.jpg';
  // import Hotel8 from '../Images/hotel8.jpg';
  import { FaWhatsapp } from 'react-icons/fa';
  import React from 'react';
  
  export default function Products() {
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
          SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Stack spacing={{ base: 6, md: 10 }} data-aos="fade-up">
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                color={'pink.500'}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
              >
                Zam Zam Travels
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
                  Everyone needs a break once in a while. It is our job to make
                  your break unforgettable. ZamZam offers personalized travel and
                  tourism services, that ensure you have special trips and
                  fulfilling stays in your destination of choice. Build your
                  memories - contact us today.
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
                    <ListItem>Air Tickets</ListItem>
                    <ListItem>Tain Tickets</ListItem>{' '}
                    <ListItem>Bus Tickets</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Air Tickets</ListItem>
                    <ListItem>Tain Tickets</ListItem>{' '}
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
              bg={useColorModeValue('green.500', 'blue.50')}
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
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 4, lg: 5 }}
            gap={10}
          >
            <Stack data-aos="fade-down">
              <a href="/services/cctv">
                <ServicesSection
                  for={'tour'}
                  icon="BiCctv"
                  imageURL="https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?b=1&s=170667a&w=0&k=20&c=Y5PfCvYSqjPSnc50Abiq4UDiA7_6CN1CMkdmE85vyog="
                  name="Ticket Booking"
                />
              </a>
            </Stack>
            <Stack data-aos="fade-down">
              <a href="/services/laptop-repair">
                <ServicesSection
                  for={'tour'}
                  icon="BiLaptop"
                  imageURL="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  name="Visa"
                />
              </a>
            </Stack>
            <Stack data-aos="fade-up">
              <a href="/services/mobile-repair">
                <ServicesSection
                  for={'tour'}
                  icon="BiMobile"
                  imageURL="https://media.istockphoto.com/id/955977416/photo/disassembled-mobile-phone-and-tools.jpg?b=1&s=170667a&w=0&k=20&c=bbqk_zDm3MbRn45xykjfwy4YJP-HTwn0NfD5acq2ht0="
                  name="Hostel Booking"
                />
              </a>
            </Stack>
            <Stack data-aos="fade-up">
              <a href="/services/printer-repair">
                <ServicesSection
                  for={'tour'}
                  icon="BiPrinter"
                  imageURL="https://media.istockphoto.com/id/955977416/photo/disassembled-mobile-phone-and-tools.jpg?b=1&s=170667a&w=0&k=20&c=bbqk_zDm3MbRn45xykjfwy4YJP-HTwn0NfD5acq2ht0="
                  name="Umrah"
                />
              </a>
            </Stack>
          </SimpleGrid>
        </SimpleGrid>
        <Heading textAlign={'center'}>Gallery</Heading>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 10 }}
        >
          {ImagesList.map((img, index) => {
            return (
              <React.Fragment key={index}>
                <Image
                  data-aos="zoom-in"
                  rounded={'md'}
                  alt={'product image'}
                  src={img}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={{ base: '100%', sm: '400px', lg: '400px' }}
                />
              </React.Fragment>
            );
          })}
        </SimpleGrid>
      </Container>
    );
  }
  