import { Grid, GridItem } from "@chakra-ui/react";
import { TravelContent } from "./TravelContent";

const travelContent = [
  { src: "/images/cocktail.svg", type: "vida noturna" },
  { src: "/images/surf.svg", type: "praia" },
  { src: "/images/building.svg", type: "moderno" },
  { src: "/images/museum.svg", type: "clássico" },
];

export function Travel() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      gap={[1, 5]}
      w="100%"
      maxW="1160px"
      mt={["10", "32"]}
      mx="auto"
      flexWrap="wrap"
      align="center"
      justify="space-between"
    >
      {travelContent.map((content, i) => (
        <GridItem key={i}>
          <TravelContent src={content.src} type={content.type} />
        </GridItem>
      ))}
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelContent src="/images/earth.svg" type="e mais..." />
      </GridItem>
    </Grid>
  );
}
