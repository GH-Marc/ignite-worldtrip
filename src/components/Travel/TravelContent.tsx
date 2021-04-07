import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelContentProps {
  src: string;
  type: string;
}

export function TravelContent({ type, src }: TravelContentProps) {
  return (
    <>
      <Flex direction="column" align="center">
        <Image src={src} alt={type} w="5.3rem" h="5.3rem" m="0 auto" />
        <Text
          textAlign="center"
          fontSize="1.25rem"
          fontWeight="600"
          mt="1.5rem"
        >
          {type}
        </Text>
      </Flex>
    </>
  );
}
