

import { extendTheme } from "@chakra-ui/react";



const brand = {
  "50": "#F5EBFA",
  "100": "#E4C6F0",
  "200": "#D3A2E7",
  "300": "#C27EDD",
  "400": "#B159D4",
  "500": "#A035CA",
  "600": "#802AA2",
  "700": "#602079",
  "800": "#401551",
  "900": "#200B28"
};


export const theme: Record<string, any> = extendTheme(
  {
    components: { Heading: { baseStyle: { py: 2, color: "brand.600" } } },
    colors: { brand }

  },

);
