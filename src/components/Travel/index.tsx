import { Box, Flex } from "@chakra-ui/react";
import { TravelContent } from "./TravelContent";

const travelContent = [
  { src: "/images/cocktail.svg", type: "vida noturna" },
  { src: "/images/surf.svg", type: "praia" },
  { src: "/images/building.svg", type: "moderno" },
  { src: "/images/museum.svg", type: "clássico" },
  { src: "/images/earth.svg", type: "e mais..." },
];

export function Travel() {
  return (
    <>
      <Flex maxW="1160px" w="100%" my="5rem" align="center">
        {travelContent.map((content, i) => (
          <Box justify="space-between" w="100%" m="0 1rem" key={i}>
            <TravelContent src={content.src} type={content.type} />
          </Box>
        ))}
      </Flex>
    </>
  );
}
