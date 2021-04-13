import { GetStaticPaths, GetStaticProps } from "next";
import { Flex } from "@chakra-ui/layout";
import Head from "next/head";

import { useRouter } from "next/router";

import { Header } from "../../components/Header";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentDescription } from "../../components/ContinentDescription";
import { CountriesCard } from "../../components/CountriesCard";

import { api } from "../../services/api";

export interface ContinentProps {
  continent: {
    slug: string;
    name: string;
    continentDescription: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    numberOfCities: number;
    continentImage: string;
    countries: {
      name: string;
      capital: string;
      image: string;
      flag: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Flex direction="column">
      <Head>
        <title>Worldtrip | {continent.name}</title>
      </Head>

      <Header />
      <ContinentBanner
        continentImage={continent.continentImage}
        name={continent.name}
      />

      <Flex direction="column" maxW={1160} mx="auto" mb="10" px="1rem">
        <ContinentDescription continent={continent} />
        <CountriesCard continent={continent} />
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`continents?${slug}`);

  const continent = response.data;

  return {
    props: {
      continent,
    },
  };
};
