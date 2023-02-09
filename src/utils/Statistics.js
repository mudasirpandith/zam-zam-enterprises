import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BiCctv, BiLaptop, BiMobile } from 'react-icons/bi';
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        data-aos="flip-left"
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'md'}
        border={'0px solid'}
        rounded={'lg'}
      >
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'bold'} fontSize={'xl'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}
          >
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box
        maxW="100%"
        mx={'auto'}
        pt={25}
        pb={20}
        px={{ base: 2, sm: 12, md: 17 }}
      >
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          color={'#03C988'}
          fontWeight={'bold'}
        >
          Our company is expanding, you could be too.
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'CCTV Installed'}
            stat={'2000+'}
            icon={<BiCctv size={'5em'} color={'blue'} />}
          />
          <StatsCard
            title={'Laptops Repaired'}
            stat={'1000+'}
            icon={<BiLaptop size={'5em'} color={'green'} />}
          />
          <StatsCard
            title={'Mobile Repaired'}
            stat={'3000+'}
            icon={<BiMobile size={'5em'} color={'orange'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }
  