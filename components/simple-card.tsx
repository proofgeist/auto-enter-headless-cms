import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,

} from '@chakra-ui/react';
import NextImage from 'next/future/image';
import { RoundedNextImage } from './next-image-styled';

const IMAGE = '/api/fm-file/C76E0567-F9D3-406B-A2E4-C94E2CD56085/jj-strawberry.png'
export default function SimpleCard({ winner }: any) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>

        <RoundedNextImage

          height={230}
          width={280}

          src={winner.src}
        />

        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {winner.brand}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {winner.name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {winner.month}
            </Text>

          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}