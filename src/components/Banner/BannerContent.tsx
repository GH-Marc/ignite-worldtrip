import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

interface WideVersionProps {
  margin: string;
  width: string;
}

export function BannerContent() {
  const isWideVersion: WideVersionProps = useBreakpointValue({
    base: {
      margin: "0 16",
      width: "100%",
    },
    lg: {
      margin: "0 0 0 110px",
      width: "485",
    },
  });

  return (
    <>
      {!!isWideVersion && (
        <Flex
          maxW={isWideVersion.width}
          m={isWideVersion.margin}
          direction="column"
          align="center"
          justify="center"
          w={isWideVersion.width}
        >
          <Box>
            <Heading
              fontWeight="500"
              color="white.400"
              lineHeight={["2.25rem", "2.625rem", "3rem", "3.375rem"]}
              fontSize={["1.5rem", "1.75rem", "2rem", "2.25rem"]}
            >
              5 Continentes, <br /> infinitas possibilidades.
            </Heading>

            <Text
              color="gray.300"
              lineHeight={["1.5rem", "1.75rem"]}
              fontSize={["0.875rem", "1rem", "1.25rem"]}
              mt="1rem"
            >
              Chegou a hora de tirar do papel a viagem que você{" "}
              {isWideVersion.width === "100%" && <br />}sempre sonhou.
            </Text>

            <Image
              src="/images/airplane.svg"
              maxH="270"
              pos="absolute"
              right="140"
              top="1"
            />
          </Box>
        </Flex>
      )}
    </>
  );
}
