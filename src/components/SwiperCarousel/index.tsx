import { Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { CarouselContent } from "./CarouselContent";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface Continent {
  slug: string;
  swiperImage: string;
  name: string;
  description: string;
}

interface SwiperCarouselProps {
  continents: Continent[];
}

export function SwiperCarousel({ continents }: SwiperCarouselProps) {
  return (
    <Flex w="90%" align="center" justify="center" mb="2.5rem">
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000 }}
      >
        {continents.map((continent) => (
          <SwiperSlide tag="li" key={`slide-${continent.slug}`}>
            <CarouselContent
              slug={continent.slug}
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
