import { Flex, Image, Text } from "@chakra-ui/react";

import { BannerContent } from "./BannerContent";

interface BannerProps {
  src?: string;
  headerContinent?: string;
  heightHeaderContinent?: string;
}

export function Banner({
  src,
  headerContinent,
  heightHeaderContinent,
}: BannerProps) {
  return (
    <Flex
      w="100%"
      h={heightHeaderContinent ? heightHeaderContinent : "335"}
      pos="relative"
      justify="center"
    >
      <Image
        src={src ? src : "/images/background.png"}
        alt="Background"
        w="100%"
      />
      <Flex pos="absolute" w="100%" maxW="1440px" h="100%" direction="column">
        <Flex
          align="center"
          pos={heightHeaderContinent ? "absolute" : "relative"}
          m="auto 0"
          top={heightHeaderContinent ? "369" : "0"}
        >
          {headerContinent ? (
            <Text
              fontWeight="600"
              color="white.600"
              fontSize="3rem"
              ml="8.75rem"
            >
              {headerContinent}
            </Text>
          ) : (
            <BannerContent />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
