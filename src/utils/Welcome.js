import {
    Button,
    Heading,
    Image,
    Stack,
    Container,
    Text,
    Center,
  } from '@chakra-ui/react';
  import Typewriter from 'typewriter-effect';
  import { FaWhatsapp } from 'react-icons/fa';
  export default function WelcomeScreen() {
    return (
      <Center
        bg={'linear-gradient(130deg, #03C988 50%, rgba(246,242,241,1) 50%)'}
        data-aos="fade-down"
      >
        <Container maxW={'5xl'}>
          <Stack
            textAlign={'center'}
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
          >
            <Heading
              fontWeight={600}
              color="#13005A"
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              data-aos="fade-up"
            >
              Zam Zam EnterPrises <br />
              <Text as={'span'} color={'pink.500'}>
                Are You Looking for{' '}
                <Typewriter
                  options={{
                    strings: [
                      'Laptop',
                      'Mobile',
                      'CCTV',
                      'Travel Services',
                      'Printer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
              <Text as={'span'} color={'pink.500'}></Text>
            </Heading>
  
            <Stack spacing={8} direction={'row'}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'orange'}
                color={'green'}
                bg={'rgba(246,242,241,1)'}
                _hover={{ bg: 'green.700' }}
                rightIcon={<FaWhatsapp />}
                onClick={() => {
                  window.open('https://wa.me/+916005531442');
                }}
              >
                Message Us
              </Button>
              <a href="/about-us">
                <Button rounded={'full'} bg={'#0CDB95'} px={6}>
                  Learn more
                </Button>
              </a>
            </Stack>
            <Center w={'full'}>
              <Image
                w={300}
                src="https://static.vecteezy.com/system/resources/previews/008/491/379/non_2x/airplane-front-view-design-illustration-free-png.png"
              />
            </Center>
          </Stack>
        </Container>
      </Center>
    );
  }
  