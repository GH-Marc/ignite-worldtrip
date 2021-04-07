import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      mx="auto"
      h="20"
      align="center"
      justify="center"
    >
      <Image src="/images/logo.svg" alt="Worldtrip" w="32" />
    </Flex>
  );
}
