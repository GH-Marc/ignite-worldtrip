import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";

import { BannerContent } from "./BannerContent";

export function Banner() {
  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   lg: true
  // })

  return (
    <Flex w="100%" h="335" pos="relative" justify="center">
      <Image src="/images/background.png" alt="Background" w="100%" />
      <Flex pos="absolute" w="100%" maxW="1440px" h="100%" direction="column">
        <Flex align="center" pos="relative" m="auto 0">
          <BannerContent />
        </Flex>
      </Flex>
    </Flex>
  );
}
