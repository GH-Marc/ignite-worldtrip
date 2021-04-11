import { Text, Flex, Heading, Image, Tooltip } from "@chakra-ui/react";

import { useRouter } from "next/router";

interface ContinentDetailsProps {
  amountDetail: number;
  legend: string;
  hasTooltip?: boolean;
}

export function ContinentDetails({
  amountDetail,
  legend,
  hasTooltip = false,
}: ContinentDetailsProps) {
  const { asPath } = useRouter();

  return (
    <>
      {asPath === "/continent/antardida" ? (
        ""
      ) : (
        <Flex
          direction="column"
          align={["flex-start", "center"]}
          pl={["0", "70px"]}
        >
          <Heading
            fontWeight="600"
            fontSize="3rem"
            color="yellow.900"
            lineHeight="9"
          >
            {amountDetail}
          </Heading>
          {hasTooltip ? (
            <Flex align="center">
              <Text fontWeight="600" fontSize="1.5rem">
                {legend}
              </Text>

              <Tooltip
                label="Em amarelo são as mais visitadas"
                aria-label="Tooltip"
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
          ) : (
            <Text fontWeight="600" fontSize="1.5rem">
              {legend}
            </Text>
          )}
        </Flex>
      )}
    </>
  );
}
