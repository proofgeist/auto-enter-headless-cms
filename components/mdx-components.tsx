import { Heading, Text, UnorderedList, ListItem, OrderedList, Divider, Box } from "@chakra-ui/react"
import NextImage from "next/future/image"
import NextChakraLink from "./next-chakra-link"

const components = {
  a: (props: any) => <NextChakraLink {...props} />,
  h1: (props: any) => <Heading as="h1" {...props} />,
  h2: (props: any) => <Heading as="h2" {...props} />,
  h3: (props: any) => <Heading as="h3" {...props} />,
  h4: (props: any) => <Heading as="h4" {...props} />,
  h5: (props: any) => <Heading as="h5" {...props} />,
  h6: (props: any) => <Heading as="h6" {...props} />,
  hr: (props: any) => <Divider className="WHOOPS" borderBottomColor={"brand.300"} my={4} as="hr" {...props} />,
  em: (props: any) => <Text color={"brand"} as="em" {...props} />,
  blockquote: (props: any) => <Text fontSize={"2xl"} fontStyle="italic" color="brand" borderLeft={"1px solid brand"} padding={2} paddingLeft={4} margin="10" as="blockquote" {...props} />,
  strong: (props: any) => <Text variant={""} fontWeight="bold" color={"brand"} as="strong" {...props} />,
  img: (props: any) => {
    return <Box py={8}>< NextImage width="1202" height="1000" {...props} /></Box>
  },
  p: (props: any) => <Text {...props} />,
  ul: (props: any) => <UnorderedList  {...props} />,
  ol: (props: any) => <OrderedList  {...props} />,
  li: (props: any) => <ListItem  {...props} />,
  code: (props: any) => <Text as="code" maxWidth={"500px"} {...props} />,
  pre: (props: any) => <Text py={4} as="p" {...props} />,
}


export default components