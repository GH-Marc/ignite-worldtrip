import { Grid, Heading } from "@chakra-ui/react";

import { Country } from "./Country";

import { ContinentProps } from "../../pages/continent/[slug]";

export function CountriesCard({ continent }: ContinentProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        px={["30px", "0"]}
      >
        {continent.countries.map((country) => (
          <Country
            key={country.name}
            name={country.name}
            capital={country.capital}
            image={country.image}
            flag={country.flag}
          />
        ))}
      </Grid>
    </>
  );
}
