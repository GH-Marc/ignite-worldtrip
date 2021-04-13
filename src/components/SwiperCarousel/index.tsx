import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { CarouselContent } from "./CarouselContent";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface SwiperCarouselProps {
  continents: {
    id: number;
    swiperImage: string;
    name: string;
    description: string;
  }[];
}

export function SwiperCarousel({ continents }: SwiperCarouselProps) {
  return (
    <Flex
      w="90%"
      h={["250px", "450px"]}
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
        style={{ width: "100%", flex: "1" }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <CarouselContent
              id={continent.id}
              image={continent.swiperImage}
              name={continent.name}
              description={continent.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
