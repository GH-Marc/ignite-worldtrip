import { Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { ContinentDetails } from "./ContinentDetails";
import { ContinentProps } from "../../pages/continent/[slug]";

export function ContinentDescription({ continent }: ContinentProps) {
  const { asPath } = useRouter();

  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      {asPath === "/continent/antardida" ? (
        <Text
          fontSize={["lg", "xl", "xl", "2xl"]}
          textAlign="justify"
          maxW="600px"
        >
          {continent.continentDescription}
        </Text>
      ) : (
        <Text fontSize={["lg", "xl", "xl", "2xl"]} textAlign="justify">
          {continent.continentDescription}
        </Text>
      )}
      <ContinentDetails continent={continent} />
    </Grid>
  );
}
