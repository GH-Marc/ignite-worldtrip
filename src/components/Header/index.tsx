import { Flex, Box, Image } from "@chakra-ui/react";
import Link from "next/link";

import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Link href="/">
      <Flex
        as="header"
        w="100%"
        maxWidth={1440}
        mx="auto"
        align="center"
        justify="center"
        position="relative"
      >
        {asPath !== "/" && (
          <Box position="absolute" left="8.75rem">
            <Image src="/images/arrowLeft.svg" cursor="pointer" />
          </Box>
        )}
        <Image
          src="/images/logo.svg"
          alt="Worldtrip"
          w="11.5rem"
          m="1.7rem 0"
        />
      </Flex>
    </Link>
  );
}
