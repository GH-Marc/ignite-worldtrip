import { Text, Flex, Heading, Tooltip, Icon } from "@chakra-ui/react";

import { useRouter } from "next/router";

import { RiInformationLine } from "react-icons/ri";

import { ContinentProps } from "../../pages/continent/[slug]";

export function ContinentDetails({ continent }: ContinentProps) {
  const { asPath } = useRouter();

  return (
    <>
      {asPath === "/continent/antardida" ? (
        ""
      ) : (
        <Flex align="center" justify="space-between">
          <Flex
            direction="column"
            align={["flex-start", "flex-start", "center"]}
            justify="center"
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.900"
              fontWeight="600"
            >
              {continent.numberOfCountries}
            </Heading>
            <Text fontWeight="600" fontSize={["md", "xl"]}>
              países
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.900"
              fontWeight="600"
            >
              {continent.numberOfLanguages}
            </Heading>
            <Text fontWeight="600" fontSize={["md", "xl"]}>
              línguas
            </Text>
          </Flex>

          <Flex
            direction="column"
            justify="center"
            align={["flex-start", "flex-start", "center"]}
          >
            <Heading
              fontSize={["2xl", "5xl"]}
              color="yellow.900"
              fontWeight="600"
            >
              {continent.numberOfCities}
            </Heading>
            <Text fontWeight="600" fontSize={["md", "xl"]}>
              cidades +100
              <Tooltip
                hasArrow
                label="Em amarelo são as mais visitadas"
                aria-label="Tooltip"
              >
                <span>
                  <Icon
                    as={RiInformationLine}
                    ml="1"
                    w={["10px", "16px"]}
                    h={["10px", "16px"]}
                    color="gray.400"
                  />
                </span>
              </Tooltip>
            </Text>
          </Flex>
        </Flex>
      )}
    </>
  );
}
