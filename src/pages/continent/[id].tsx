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
  console.log(id);

  useEffect(() => {
    const selectedContinent = continents.find(
      (continent) => continent.id === Number(id)
    );
    setContinent(selectedContinent);
  }, [id]);

  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Flex direction="column" align="center">
        <Header />
        {continent && (
          <Banner
            heightHeaderContinent="500"
            src={continent.continentImage}
            headerContinent={continent.name}
          />
        )}
      </Flex>

      <Box m="80px 140px">
        <Flex align="center">
          <ContinentDescription
            continentDescription={continent.continentDescription}
          />
          <ContinentDetails />
        </Flex>
        {/* <Flex direction="column" w="100%" mt="80px" mb="40px">
          <Text fontWeight="500" fontSize="2.25rem">
            Cidades +100
          </Text>
        </Flex> */}
      </Box>
    </>
  );
}
