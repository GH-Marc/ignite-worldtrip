import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface CountryProps {
  name: string;
  capital: string;
  image: string;
  flag: string;
}

export function Country({ name, capital, flag, image }: CountryProps) {
  const { asPath } = useRouter();

  return (
    <>
      {asPath !== "continent/antardida" && (
        <Box borderRadius="4px" overflow="hidden">
          <Image src={image} alt={`${name}, ${capital}`} h="170px" w="100%" />
          <Flex
            p="6"
            align="center"
            justify="space-between"
            border="1px"
            borderColor="yellow.200"
            borderTop="0"
          >
            <Flex direction="column">
              <Heading fontSize="xl" fontWeight="500">
                {name}
              </Heading>
              <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
                {capital}
              </Text>
            </Flex>
            <Image
              src={flag}
              w="30px"
              h="30px"
              borderRadius="50%"
              objectFit="cover"
            />
          </Flex>
        </Box>
      )}
    </>
  );
}
