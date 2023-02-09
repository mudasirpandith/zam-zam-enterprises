import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { FaWhatsapp } from 'react-icons/fa';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
    <Box sx={{ position: "sticky", top: "0", zIndex: "2" }}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>


        <Flex flex={{ base: 1 }} justify={{ base: 'right', md: 'start' }}>
          <a href='/'>
            <Stack direction={'row'} align={'center'} gap={1}>
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
                fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
              fontWeight={500}
                color={'pink.500'}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
                }}>
                Zam Zam EnterPrises

              </Text>
            </Stack>
          </a>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>


        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          align={'center'}
        >


          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            onClick={() => { window.open('https://wa.me/+916005531442') }}
            fontWeight={600}
            color={'white'}
            bg={'green.500'}
            rightIcon={<FaWhatsapp />}
            href={'#'}
            _hover={{
              bg: 'green.800',
            }}>
            Chat With Us
          </Button>

        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.700', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} align={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}

                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}

          </Popover>
        </Box>
      ))}


    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (<>
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link py={1}
                fontWeight={'sm'}
                color={'grey'} key={child.label} href={child.href}>
                {child.label}
              </Link>
            ))}

        </Stack>

      </Collapse>

    </Stack>


  </>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;

}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/"

  },
  {
    label: 'Products And Services',
    children: [
      {
        label: 'Zam Zam Travels',

        href: '/products',
      },
      {
        label: 'CCTV',
        href: "/services/cctv"
      },
      {
        label: 'Laptop',

        href: '/services/laptop-repair',
      },
      {
        label: 'Mobile',

        href: '/services/mobile-repair',
      },
      {
        label: 'Printer',

        href: '/services/printer-repair',
      },
      {
        label: 'Accessories And Offline CVC Services',

        href: '/services/accessories',
      },

    ],
  },
  // {
  //   label: 'Services',
  //   children: [
  //     {
  //       label: 'CCTV Installation',
  //       href: "/services/cctv"
  //     },
  //     {
  //       label: 'Laptop Repairing',

  //       href: '/services/laptop-repair',
  //     },
  //     {
  //       label: 'Mobile Repairing',

  //       href: '/services/mobile-repair',
  //     },
  //   ],
  // },
  {
    label: 'About Us',
    href: '/about-us',
  },
  {
    label: 'Contact Us',
    href: '/contact-us',
  },
];