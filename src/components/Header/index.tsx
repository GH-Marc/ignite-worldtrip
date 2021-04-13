import { Center, Image, Icon, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import { RiArrowLeftSLine } from "react-icons/ri";

import { useRouter } from "next/router";

export function Header() {
  const { asPath } = useRouter();

  return (
    <Center
      as="header"
      h={["50px", "100px"]}
      w="100%"
      maxWidth={1160}
      mx="auto"
      px="1rem"
      position="relative"
    >
      {asPath !== "/" && (
        <Link href="/">
          <ChakraLink position="absolute" left={["16px", "40px"]}>
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              justifySelf="start"
            />
          </ChakraLink>
        </Link>
      )}
      <Image src="/images/logo.svg" alt="Worldtrip" w={["81px", "184px"]} />
    </Center>
  );
}
