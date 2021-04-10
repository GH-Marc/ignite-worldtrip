import { Flex, Text } from "@chakra-ui/react";

interface ContinentInfosProps {
  continentDescription: string;
}

export function ContinentDescription({
  continentDescription,
}: ContinentInfosProps) {
  return (
    <Flex>
      <Text fontSize="1.5rem" align="justify" maxW="600px" maxH="211px">
        {continentDescription}
      </Text>
    </Flex>
  );
}
