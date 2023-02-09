import { Flex, Box, Image, Badge, Button } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

function ServicesSection(props) {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box bg={'pink.500'} rounded="lg" w={300} m={'auto'}>
        <Image
          src={props.imageURL}
          w={200}
          m={' -20px auto'}
          borderTopLeftRadius={'10px'}
          borderTopRightRadius={'10px'}
        />

        <Box p="6">
          {!props.for && (
            <Box d="flex" alignItems="baseline">
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                Quick Service Available
              </Badge>
            </Box>
          )}

          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
            align={'center'}
          >
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              color={'white'}
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {props.name}
            </Box>
          </Flex>
          {props.for && (
            <Button bg={'whatsapp.300'} rightIcon={<FaWhatsapp />} p={4}>
              Book Now
            </Button>
          )}
        </Box>
      </Box>
    </Flex>
  );
}

export default ServicesSection;
