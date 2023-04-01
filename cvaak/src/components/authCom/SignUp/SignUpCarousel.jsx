import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Center,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import Image from 'next/image';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SignUpCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Make Healthcare Simpler',
      text:
        "Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.",
      image:
        'https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png',
    },
    {
      title: 'Know Your Medicines',
      text:
        "View medicine information like usage, side effects and cheaper substitutes before you take them.",
      image:
        'https://www.1mg.com/images/login-signup/Know-Your-Medicines.png',
    },
    {
      title: 'Medicines, Home Deliverd',
      text:
        "Order any medicine or health product and we’ll deliver it for free. Enjoy discounts on everything.",
      image:
        'https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png',
    },
    {
      title: 'Lab Tests At Home',
      text:
        "Book any test from any lab. We'll collect the sample and send the reports. Save up to 80% every time.",
      image:
        'https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png',
    },
    {
      title: 'Health Related Queries?',
      text:
        "Consult our certified doctors from anywhere, anytime, and for free. We guarantee your privacy.",
      image:
        'https://www.1mg.com/images/login-signup/Health-Related-Queries.png',
    }
  ];

  return (
    <Box
      position={'relative'}
      height={"500px"}
      w={{base:"100%", md:"50%", lg:"50%"}}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
           >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                  <Center><Image src={card.image} width={100} height={100} alt="alt"></Image></Center>
                  
                <Heading fontSize={{ base: 'xl', md: '2xl', lg: '2xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'md' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}