import { Text, Flex, Heading, Image, Tooltip } from "@chakra-ui/react";

interface ContinentDetailsProps {
  countries: number;
  languages: number;
  cities: number;
}

export function ContinentDetails({
  countries,
  languages,
  cities,
}: ContinentDetailsProps) {
  return (
    <Flex w="100%" maxW="490px" justify="space-between" ml="70px">
      <Flex direction="column" align="center">
        <Heading
          fontWeight="600"
          fontSize="3rem"
          color="yellow.900"
          lineHeight="9"
        >
          {countries}
        </Heading>
        <Text fontWeight="600" fontSize="1.5rem">
          países
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Heading
          fontWeight="600"
          fontSize="3rem"
          color="yellow.900"
          lineHeight="9"
        >
          {languages}
        </Heading>
        <Text fontWeight="600" fontSize="1.5rem">
          línguas
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Heading
          fontWeight="600"
          fontSize="3rem"
          color="yellow.900"
          lineHeight="9"
        >
          {cities}
        </Heading>
        <Flex align="center">
          <Text fontWeight="600" fontSize="1.5rem">
            cidades +100
          </Text>
          <Tooltip
            label="Em amarelo são as mais visitadas"
            aria-label="A tooltip"
            bg="light.800"
            borderRadius="4px"
          >
            <Image
              src="/images/info.svg"
              w="16px"
              h="16px"
              ml="5px"
              color="light.800"
            />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}
