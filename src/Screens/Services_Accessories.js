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
  import React from 'react';
  
  import { FaWhatsapp } from 'react-icons/fa';
  import Pic1 from '../Images/photostate.jpg';
  
  export default function Accessories() {
    const ImagesList = [Pic1];
  
    return (
      <Container
        maxW={'10xl'}
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
              src={Pic1}
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
                fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
              >
                Accessories And Offline CVC Services
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
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
              w={'200px'}
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
              <React.Fragment key={index}>
                <Image
                  data-aos="zoom-out"
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
  