import { useEffect, useState } from "react";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";

import { useRouter } from "next/router";

import Head from "next/head";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { ContinentDescription } from "../../components/ContinentDescription";
import { ContinentDetails } from "../../components/ContinentDetails";
import { CountriesCard } from "../../components/CountriesCard";

import database from "../../../database.json";

export interface Country {
  id: number;
  name: string;
  capital: string;
  image: string;
  flag: string;
}

interface ContinentProps {
  slug?: string;
  name: string;
  continentDescription?: string;
  numberOfCountries?: number;
  numberOfLanguages?: number;
  numberOfCities?: number;
  continentImage?: string;
  countries?: Country[];
}

export default function Continent() {
  const router = useRouter();

  const [continent, setContinent] = useState<ContinentProps | null>(null);
  const { continents } = database;

  const { slug } = router.query;

  useEffect(() => {
    const selectedContinent = continents.find(
      (continent) => continent.slug === slug
    );
    setContinent(selectedContinent);
  }, [slug]);

  return (
    <>
      {continent && (
        <>
          <Head>
            <title>Worldtrip | {continent.name}</title>
          </Head>

          <Flex direction="column" align="center">
            <Header />

            <Banner
              heightHeaderContinent="500"
              src={continent.continentImage}
              headerContinent={continent.name}
            />
          </Flex>

          <Box m="80px 140px">
            <Flex align="center">
              <ContinentDescription
                continentDescription={continent.continentDescription}
              />
              <ContinentDetails
                legend="países"
                amountDetail={continent.numberOfCountries}
              />
              <ContinentDetails
                legend="línguas"
                amountDetail={continent.numberOfLanguages}
              />
              <ContinentDetails
                legend="cidades +100"
                amountDetail={continent.numberOfCities}
                hasTooltip={true}
              />
            </Flex>

            {continent.slug !== "antardida" && (
              <Box mt="5rem">
                <Heading
                  as="h1"
                  fontWeight="500"
                  fontSize={["2xl", "4xl"]}
                  color="gray.600"
                >
                  Cidades +100
                </Heading>

                <SimpleGrid
                  columns={[1, 4]}
                  spacing={[5, 10]}
                  my={["5", "45px"]}
                >
                  {continent.countries.map((country) => (
                    <CountriesCard
                      key={country.id}
                      name={country.name}
                      image={country.image}
                      capital={country.capital}
                      flag={country.flag}
                    />
                  ))}
                </SimpleGrid>
              </Box>
            )}
          </Box>
        </>
      )}
    </>
  );
}
