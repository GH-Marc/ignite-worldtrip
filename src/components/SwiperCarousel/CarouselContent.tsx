import { Flex, Text } from "@chakra-ui/react";
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
    <Link href={`continent/${slug}`}>
      <Flex
        backgroundImage={`url(${image})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        w="100%"
        cursor="pointer"
        h={["250px", "450px"]}
      >
        <Flex justify="center" align="center" direction="column" w="100%">
          <Text fontSize="3rem" fontWeight="700" color="white.600">
            {name}
          </Text>
          <Text fontSize="1.5rem" fontWeight="700" color="gray.300">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
