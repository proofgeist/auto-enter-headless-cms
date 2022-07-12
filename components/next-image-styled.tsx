
import { Box, Icon, IconProps, Flex, useColorModeValue } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/future/image";


export function AvatarNextImage({ width = 40, height = 40, src = "", priority = false }: ImageProps) {
  if (src === "") {
    return null
  }
  return <Box
    width={'40px'}
    height={'40px'}
    position={'relative'}
    rounded={'full'}
    overflow={'hidden'}>
    <NextImage priority={priority} width={40} height={40} src={src}></NextImage>
  </Box>
}



export function RoundedNextImage({ width = 1200, height = 630, src = "", priority = false }: ImageProps) {
  if (src === "") {
    return null
  }
  return <Box
    position={'relative'}
    rounded={'2xl'}
    boxShadow={'xl'}
    width={'full'}
    overflow={'hidden'}>
    <NextImage priority={priority} width={width} height={height} src={src}></NextImage>
  </Box>
}


function getRandomNumberBetween(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function BlobbedImage({ width = 1200, height = 630, src = "", priority = false }) {


  return <Flex
    flex={1}
    justify={'center'}
    align={'center'}
    position={'relative'}
    w={'full'}>
    <Blob
      w={'150%'}
      h={'150%'}
      position={'absolute'}
      top={'-20%'}
      left={0}
      zIndex={-1}
      color={useColorModeValue('brand.50', 'brand.400')}
    />
    <RoundedNextImage priority={priority} width={width} height={height} src={src}></RoundedNextImage>
  </Flex>
}


const Blob1PathData = "M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
const Blob2PathData = "M61.8731295,420.100465 C16.0533349,378.152489 -6.69283201,275.650809 1.72625387,214.147643 C10.162346,152.512495 94.7172774,139.037411 142.709868,99.3791069 C177.059459,70.9951836 162.255798,19.0688134 204.077127,3.63902958 C246.61972,-12.0597157 330.899907,27.8561451 376.052457,32.1285315 C430.091264,37.2427969 507.20653,-21.9064537 545.327502,16.6840037 C585.258138,57.1051981 571.817212,144.079706 575.782665,200.720571 C579.91418,259.727096 587.041792,342.788092 545.327502,384.782061 C503.929329,426.459075 413.825765,469.144397 376.052457,401.794692 C357.386366,368.513101 288.089216,406.453022 240.688842,401.794692 C185.538627,396.37747 102.721102,457.497093 61.8731295,420.100465 Z"
const Blob3PathData = "M61.8731295,420.657739 C16.0533349,378.709764 -6.69283201,276.208083 1.72625387,214.704917 C10.162346,153.069769 0.230959302,59.6823285 44.671875,18.4947741 C82.0234375,-16.1224134 181.791293,10.5178562 253.726563,41.4088366 C274.107947,50.1611629 297.472013,11.7747127 346.097656,1.07142737 C375.506073,-5.40183758 411.096835,19.6185565 442.210938,18.4947741 C478.527298,17.183096 514.016063,8.37411278 528.851563,18.4947741 C577.41344,51.6233056 571.817212,144.63698 575.782665,201.277845 C579.91418,260.28437 424.53125,324.592691 389.007812,368.828758 C369.09293,393.62805 377.398186,438.305676 320.164063,439.93015 C275.306055,441.203353 232.848689,422.524985 214.421875,400.033837 C189.213653,369.26553 102.721102,458.054368 61.8731295,420.657739 Z"

const Blob = (props: IconProps) => {
  const n = getRandomNumberBetween(1, 3);
  const pathData = n === 1 ? Blob1PathData : n === 2 ? Blob2PathData : Blob3PathData;
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={pathData}
        fill="currentColor"
      />
    </Icon>
  );
};

