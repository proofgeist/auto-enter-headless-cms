import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextImage from "next/future/image"
import NextChakraLink from "./next-chakra-link"
import NextClearPreviewButton from './next-preview-button';
const Links = [{ label: "Blog", href: "/blog" }, { label: "Join", href: "/join" }];

const NavLink = ({ children, href }: { children: ReactNode, href: string }) => {
  return (
    <NextChakraLink
      py={1}
      px={2}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={href}>
      {children}
    </NextChakraLink>
  )
};

export default function Simple({ logo, preview }: { logo: string, preview: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={0} pb={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {logo && <Box w={"124px"}>
              <NextChakraLink href="/">
                <NextImage width="124" height="20" src={logo} />
              </NextChakraLink>
            </Box>}

            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink href={link.href} key={link.href}>{link.label}</NavLink>
              ))}
            </HStack>

          </HStack>
          <NextClearPreviewButton preview={preview} />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink href={link.href} key={link.href}>{link.label}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}