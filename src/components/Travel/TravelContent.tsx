import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelContentProps {
  src: string;
  type: string;
}

export function TravelContent({ type, src }: TravelContentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isWideVersion ? (
        <Image src={src} alt={type} w="5.3rem" h="5.3rem" mb="6" />
      ) : (
        <Image src="/images/ellipse.svg" alt="ellipse" mr="2" />
      )}
      <Text fontSize={["md", "xl", "2xl"]} fontWeight="600">
        {type}
      </Text>
    </Flex>
  );
}
