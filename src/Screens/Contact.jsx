import { Button, Container, Stack, Text, chakra } from '@chakra-ui/react';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
export const Contact = () => {
  return (
    <Stack fontFamily="'Poppins', sans-serif;">
      <Container
        maxW="100%"
        sx={{
          backgroundImage:
            'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          height: '250px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Text p={10} fontSize="5xl" fontWeight={600} color="white">
          Contact Us
        </Text>
      </Container>
      <Grid
        sx={{
          display: 'flex',
          flex: '1',
          flexWrap: 'wrap',
          padding: '20px',
          gap: '20px',
        }}
      >
        <GridItem sx={{ display: 'flex', flex: '1', flexDirection: 'column' }}>
          <chakra.p
            pl={5}
            pr={5}
            fontSize={'xl'}
            py={1}
            fontWeight={'sm'}
            color={'grey'}
          >
            {' '}
            If you have any query, just feel free to contact us, and we will
            answer you shortly. If you are living nearby, come visit us at one
            of our comfortable offices.
          </chakra.p>
          <chakra.h2
            pl={5}
            pr={5}
            fontSize="2xl"
            sx={{ fontWeight: '600', margin: '10px 0' }}
          >
            Headquarters
          </chakra.h2>
          <chakra.p
            pl={5}
            pr={5}
            fontSize={'xl'}
            py={1}
            fontWeight={'sm'}
            color={'grey'}
          >
            190002, MILL ROAD, SRINAGAR, J&K. <br /> Telephone +91 800 603 6035{' '}
            <br /> E-mail mail@mail.org
          </chakra.p>
        </GridItem>
        <GridItem
          sx={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Text fontSize="3xl" sx={{ fontWeight: '600', margin: '0 0 15px 0' }}>
            Get In Touch
          </Text>
          <Stack>
            <Button
              w={200}
              bg="green.400"
              color="white"
              onClick={() => {
                window.open('https://wa.me/+916005531442');
              }}
              rightIcon={<FaWhatsapp />}
              _hover={false}
            >
              WhatsApp
            </Button>
            <Button
              w={200}
              bg="#CA274E"
              color="white"
              rightIcon={<FaInstagram />}
              _hover={false}
            >
              Instagram
            </Button>
            <Button
              w={200}
              bg="blue.400"
              color="white"
              rightIcon={<FaFacebook />}
              _hover={false}
            >
              FaceBook
            </Button>
          </Stack>
        </GridItem>
      </Grid>
      <div className="mapouter" style={{ padding: '10px', margin: 'auto' }}>
        <div className="gmap_canvas">
          <iframe
            title="map"
            width={window.innerWidth - 30}
            height="300px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=nit srinagar&t=&z=12&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </Stack>
  );
};
