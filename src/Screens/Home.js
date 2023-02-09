import React from 'react';
import {
  SimpleGrid,
  Stack,
  Box,
  chakra,
  useBreakpointValue,
  Flex,
  Image,
  Center,
} from '@chakra-ui/react';
import TestimonialSection from '../utils/Testimonials';
import WelcomeScreen from '../utils/Welcome';
import BasicStatistics from '../utils/Statistics';
import ServicesSection from '../utils/Services';
import { ProductsSection } from '../utils/Products';

export const Home = () => {
  return (
    <Stack>
      <WelcomeScreen />
      <Box
        bg={
          'linear-gradient(180deg, rgba(246,242,241,0.9951433454241071) 22%, rgba(112,226,189,1) 72%, rgba(246,242,241,1) 100%, rgba(151,242,212,1) 100%, rgba(3,201,136,1) 100%)'
        }
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, lg: 8 }}
          py={10}
        >
          <Stack flex={3} data-aos="fade-down">
            <chakra.h1
              textAlign={'center'}
              fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
              py={6}
              m={0}
              color={'pink.500'}
              fontWeight={'bold'}
            >
              Our Products and Services
            </chakra.h1>
            <Center>
              <Image
                w={350}
                src="https://www.pngmart.com/files/22/Cloud-Services-PNG-Image.png"
              />
            </Center>
            <chakra.p
              pl={5}
              pr={5}
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'gray.800'}
            >
              Our Services section offers professional installation of CCTV
              systems and expert repair services for laptops and mobile devices.
              Our team of qualified technicians is dedicated to providing
              high-quality solutions for all your technology needs
            </chakra.p>
          </Stack>
          <Stack>
            <Flex as={Stack} py={5} flexWrap={'wrap'}>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 4, lg: 5 }}
                gap={10}
              >
                <Stack data-aos="fade-down">
                  <a href="/services/cctv">
                    <ServicesSection
                      icon="BiCctv"
                      imageURL="https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?b=1&s=170667a&w=0&k=20&c=Y5PfCvYSqjPSnc50Abiq4UDiA7_6CN1CMkdmE85vyog="
                      name="CCTV"
                    />
                  </a>
                </Stack>
                <Stack data-aos="fade-down">
                  <a href="/services/laptop-repair">
                    <ServicesSection
                      icon="BiLaptop"
                      imageURL="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      name="Laptops"
                    />
                  </a>
                </Stack>
                <Stack data-aos="fade-up">
                  <a href="/services/mobile-repair">
                    <ServicesSection
                      icon="BiMobile"
                      imageURL="https://media.istockphoto.com/id/955977416/photo/disassembled-mobile-phone-and-tools.jpg?b=1&s=170667a&w=0&k=20&c=bbqk_zDm3MbRn45xykjfwy4YJP-HTwn0NfD5acq2ht0="
                      name="Mobiles"
                    />
                  </a>
                </Stack>
                <Stack data-aos="fade-up">
                  <a href="/services/printer-repair">
                    <ServicesSection
                      icon="BiPrinter"
                      imageURL="https://media.istockphoto.com/id/955977416/photo/disassembled-mobile-phone-and-tools.jpg?b=1&s=170667a&w=0&k=20&c=bbqk_zDm3MbRn45xykjfwy4YJP-HTwn0NfD5acq2ht0="
                      name="Printers"
                    />
                  </a>
                </Stack>
              </SimpleGrid>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Box>
      <Center p={10} data-aos="zoom-in">
        <Image
          w={300}
          src="https://www.pngmart.com/files/1/Computer-Repair-Clip-Art-PNG.png"
        />
      </Center>
      <ProductsSection />

      <BasicStatistics />
      <TestimonialSection />
    </Stack>
  );
};
