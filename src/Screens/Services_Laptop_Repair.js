import React from 'react';
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
import Laptop1 from '../Images/laptop1.jpg';
import Laptop2 from '../Images/laptop2.jpg';
import Laptop3 from '../Images/laptop3.jpg';
// import Laptop4 from '../Images/laptop4.jpg'
// import Laptop5 from '../Images/laptop5.jpg'
// import Laptop6 from '../Images/laptop6.jpg'
export default function ServiceLaptopRepair() {
  const Laptop4 =
    'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80';

  const ImagesList = [Laptop2, Laptop3, Laptop4];

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
            src={Laptop1}
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
              color={'pink.500'}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              Laptop Repair
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
                We understand how frustrating it is to have your laptop damaged
                or misbehave. ZamZam's Laptop Repair has got you covered - our
                expert technicians provide repair services for various laptops,
                and will have you up-and-running in no time. Contact us today.
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
                  <ListItem>Repair Laptop</ListItem>
                  <ListItem>Display Change</ListItem>{' '}
                  <ListItem>Item 3</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Repair Laptop</ListItem>
                  <ListItem>Display Change</ListItem>{' '}
                  <ListItem>Item 3</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            width={200}
            onClick={() => {
              window.open('https://wa.me/+916005531442');
            }}
            bg={'pink.300'}
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
