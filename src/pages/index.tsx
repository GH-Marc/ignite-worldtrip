import { Divider, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SwiperCarousel } from "../components/SwiperCarousel";
import { Travel } from "../components/Travel";

import { swiperData } from "../../swiperData";

export default function Home() {
  const { continents } = swiperData;

  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Flex direction="column" w="100%" align="center">
        <Header />
        <Banner />
        <Travel />

        <Divider
          variant="solid"
          border="2px"
          borderColor="light.800"
          w="5.625rem"
        />
        <Heading
          fontWeight="500"
          fontSize="2.25rem"
          w="52.4rem"
          textAlign="center"
          m="3.25rem 18.75rem"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Heading>
        <SwiperCarousel continents={continents} />
      </Flex>
    </>
  );
}
