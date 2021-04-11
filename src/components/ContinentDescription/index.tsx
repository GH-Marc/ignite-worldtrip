import { Flex, Text } from "@chakra-ui/react";

import { useRouter } from "next/router";

interface ContinentInfosProps {
  continentDescription: string;
}

export function ContinentDescription({
  continentDescription,
}: ContinentInfosProps) {
  const { asPath } = useRouter();

  return (
    <Flex>
      {asPath === "/continent/antardida" ? (
        <Text fontSize="1.5rem" align="justify">
          {continentDescription}
        </Text>
      ) : (
        <Text fontSize="1.5rem" align="justify" maxW="600px">
          {continentDescription}
        </Text>
      )}
    </Flex>
  );
}
