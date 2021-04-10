import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";

import database from "../../../database.json";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { ContinentDescription } from "../../components/ContinentDescription";
import { ContinentDetails } from "../../components/ContinentDetails";

export interface Country {
  id: number;
  name: string;
  capital: string;
  image: string;
  flag: string;
}

interface ContinentProps {
  id: number;
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

  const { id } = router.query;

  useEffect(() => {
    const selectedContinent = continents.find(
      (continent) => continent.id === Number(id)
    );
    setContinent(selectedContinent);
  }, [id]);

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
                countries={continent.numberOfCountries}
                languages={continent.numberOfLanguages}
                cities={continent.numberOfCities}
              />
            </Flex>
          </Box>
        </>
      )}
    </>
  );
}
