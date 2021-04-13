import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselContentProps {
  slug: string;
  image: string;
  name: string;
  description: string;
}

export function CarouselContent({
  slug,
  image,
  name,
  description,
}: CarouselContentProps) {
  return (
    <Flex
      backgroundImage={`url(${image})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="100% 30%"
      backgroundSize="cover"
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      textAlign="center"
    >
      <Link href={`continent/${slug}`}>
        <ChakraLink _hover={{}}>
          <Heading
            fontSize={["3xl", "4xl", "5xl"]}
            fontWeight="700"
            color="white.600"
          >
            {name}
          </Heading>
          <Text
            fontSize={["0.8rem", "1xl", "2xl"]}
            mt={["2", "4"]}
            fontWeight="700"
            color="gray.300"
          >
            {description}
          </Text>
        </ChakraLink>
      </Link>
    </Flex>
  );
}
