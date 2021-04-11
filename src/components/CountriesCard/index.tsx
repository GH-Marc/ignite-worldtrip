import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CountriesCardProps {
  name: string;
  capital: string;
  image: string;
  flag: string;
}

export function CountriesCard({
  name,
  capital,
  image,
  flag,
}: CountriesCardProps) {
  return (
    <Box w="256px" mx={["auto", "0"]}>
      <Image
        borderTopRadius="4"
        src={image}
        alt={name}
        w="100%"
        h="173"
        objectFit="cover"
      />
      <Flex
        justify="space-between"
        align="center"
        p={6}
        border="1px"
        borderColor="yellow.200"
        borderTop="0"
        borderBottomRadius="4"
      >
        <Flex direction="column">
          <Heading as="h3" fontSize="xl" fontWeight="600" mb={3}>
            {capital}
          </Heading>
          <Text color="gray.500" fontSize="md" fontWeight="500">
            {name}
          </Text>
        </Flex>

        <Flex align="center" justify="center">
          <Image src={flag} w="30px" h="30px" />
        </Flex>
      </Flex>
    </Box>
  );
}
