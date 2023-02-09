import {
    Container,
    SimpleGrid,
    Stack,
    Box,
    chakra,
    Image,
    Button,
  } from '@chakra-ui/react';
  import React from 'react';
  import { BiRightArrowAlt } from 'react-icons/bi';
  
  export const ProductsSection = () => {
    return (
      <Box py={10} bg={'pink.500'} borderBottomRadius={50}>
        <Box bg={'white'} margin={'-85px 0 20px 0 '} h={100} rounded={'full'}>
          {' '}
        </Box>
        <Container as={Stack} maxW={'100%'} py={6} m={'auto'}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, lg: 8 }}>
            <Stack flex={4} data-aos="fade-left">
              <Image
                w={350}
                margin={'auto'}
                src="https://www.pngmart.com/files/4/Travel-PNG-Transparent-Image.png"
                alt={`Picture of Products`}
                roundedTop="lg"
              />
            </Stack>
            <Stack flex={4} data-aos="fade-up">
              <chakra.h3
                fontSize={'3xl'}
                py={1}
                color={'white'}
                fontWeight={'bold'}
              >
                Zam Zam Travels
              </chakra.h3>
              <chakra.p
                fontSize={'xl'}
                py={1}
                fontWeight={'sm'}
                color={'gray.800'}
              >
                Our Tour and Travel service provides a comprehensive and
                personalized experience for travelers. From planning to execution,
                we handle all aspects of your trip, ensuring a hassle-free and
                memorable journey. Whether it's a romantic getaway, a family
                vacation, or a corporate trip, we've got you covered. Trust us to
                make your travel dreams a reality.
              </chakra.p>
              <a href="/products">
                <Button
                  w={200}
                  bg={'green.400'}
                  rounded={'full'}
                  color={'white'}
                  rightIcon={<BiRightArrowAlt />}
                >
                  Book Now
                </Button>
              </a>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  };
  