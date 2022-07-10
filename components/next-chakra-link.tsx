import NextLink from 'next/link';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { LinkBoxProps } from "@chakra-ui/react"


type Props = {
  href: string;
  children: React.ReactNode;
  key?: string;
  [x: string]: any;
}
export default function NextChakraLink({ href, children, key, ...props }: Props) {

  if (!href) return null
  if (!children) return null
  const isExternal = href.startsWith('http')
  const icon = isExternal ? <ExternalLinkIcon /> : null;


  return (
    <NextLink key={key} href={href} passHref={true}>
      <Link isExternal={isExternal} {...props} >{children}{icon}</Link>
    </NextLink>
  );
}