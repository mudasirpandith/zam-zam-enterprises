import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Avatar, useBreakpointValue
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterSection() {
  return (
    <Box
      bg={'blackAlpha.800'}
      color={'white'}
    >
      <Container as={Stack} maxW={'100%'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack >
            <a href='/'>
              <Stack direction={'row'} align={'center'} gap={2}>
                <Flex
                  w={8}
                  h={8}
                  align={'center'}
                  justify={'center'}
                  rounded={'full'}
                >
                  <Avatar src='https://thumbs.dreamstime.com/b/gradient-fire-phoenix-bird-simple-logo-design-black-bird-simple-logo-design-simple-gradient-fire-phoenix-bird-logo-158339374.jpg' />

                </Flex>
                <Text
                  fontFamily={'heading'}
                  fontSize={useBreakpointValue({ base: '1xl', md: '3xl' })}
                  fontWeight={500}
                  color={'pink.500'}
                  _hover={{
                    textDecoration: 'none',

                  }}>
                  Zam Zam EnterPrises

                </Text>
              </Stack>
            </a>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product And Services</ListHeader>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'/products'}>Zam Zam Travels</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'/services/mobile-repair'}>Mobile</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'/services/laptop-repair'}>Laptop</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'/services/cctv'}>CCTV</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'/about-us'}>About Us</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'/contact-us'}>Contact Us</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>Help Center</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>Terms of Service</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>Privacy Policy</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>Facebook</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>Twitter</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>Instagram</Link>
            <Link fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'} href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
        <Text py={5}

          color={'grey'} fontSize={'sm'} align={'center'}>© 2023 Zam Zam. All rights reserved. Developed By <a href='/'>Upgrid Creative</a> </Text>
      </Container>
    </Box>
  );
}
