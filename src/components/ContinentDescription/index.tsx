import { Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { ContinentDetails } from "./ContinentDetails";
import { ContinentProps } from "../../pages/continent/[id]";

export function ContinentDescription({ continent }: ContinentProps) {
  const { asPath } = useRouter();

  return (
    <Grid
      templateColumns={
        asPath !== "/continent/6" && ["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]
      }
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text fontSize={["lg", "xl", "xl", "2xl"]} textAlign="justify">
        {continent.continentDescription}
      </Text>
      <ContinentDetails continent={continent} />
    </Grid>
  );
}
