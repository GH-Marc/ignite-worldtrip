import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      mx="auto"
      align="center"
      justify="center"
    >
      <Image src="/images/logo.svg" alt="Worldtrip" w="11.5rem" m="1.7rem 0" />
    </Flex>
  );
}
