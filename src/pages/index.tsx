import { Divider, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SwiperCarousel } from "../components/SwiperCarousel";
import { Travel } from "../components/Travel";

import database from "../../database.json";

export default function Home() {
  const { continents } = database;

  return (
    <Flex direction="column">
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Header />
      <Banner />
      <Travel />

      <Divider
        variant="solid"
        border="1px"
        borderColor="light.800"
        w={["60px", "90px"]}
        mx="auto"
        my={["9", "20"]}
      />
      <Heading
        fontSize={["lg", "3xl", "4xl"]}
        fontWeight="500"
        mb={["5", "14"]}
        textAlign="center"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <SwiperCarousel continents={continents} />
    </Flex>
  );
}
