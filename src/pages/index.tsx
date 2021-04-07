import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Travel } from "../components/Travel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh" w="100%" align="center">
        <Header />
        <Banner />
        <Travel />
      </Flex>
    </>
  );
}
