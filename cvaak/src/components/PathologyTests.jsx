import React from "react";
import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Flex,
  Stack,
  Tag,
  Grid,
} from "@chakra-ui/react";
const PathologyTests = () => {
  const tests = [
    {
      id: 1,
      name: "Complete Blood Count",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "299",
      offered: "498",
      discount: "25% off",
      rating: "4.9",
      test: "Provided By 4 Labs",
    },
    {
      id: 2,
      name: "Thyroid profile Total",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "299",
      offered: "400",
      discount: "46% off",
      rating: "4.9",
      test: "Thyroid Function Test, TFT",
    },
    {
      id: 3,
      name: "Lipid Profile, Non Fasting",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "320",
      offered: "500",
      discount: "35% off",
      rating: "4.9",
      test: "Includes  1 Test",
    },
    {
      id: 4,
      name: "Vitamin D (25-OH)",
      img: "https://onemg.gumlet.io/safe_bjisiz.svg",
      logo: "https://onemg.gumlet.io/diagnostics/b1f8f81e-5677-11ec-9fd9-0a65f29f7340.png?format=auto",
      price: "370",
      offered: "1750",
      discount: "78% off",
      rating: "4.9",
      test: "Includes  71 Test",
    },
  ];
  return (
    <div>
      <Center
        bgColor={"white"}
        w="100%"
        // border="1px solid black"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        mt="10"
        mb="10"
      >
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
            xl: "repeat(3,1fr)",
            "2xl": "repeat(4,1fr)",
          }}
          pt={"5"}
          pb={"5"}
          w="80%"
          m="auto"
          gap="5"
        >
          {tests.map((item) => {
            return (
              <Box
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                p="5"
                align="left"
                key={item.id}
                w={{
                  base: "100%",
                  sm: "100%",
                  md: "300px",
                  lg: "270px",
                  xl: "300px",
                  "2xl": "300px",
                }}
                h="180px"
                borderWidth={2}
                borderRadius={5}
              >
                <Stack>
                  <Flex gap="5px">
                    <Text fontSize="sm" as="b">
                      {item.name}
                    </Text>
                    <Flex bg="#ffe3c2" align="center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        height={10}
                        width={10}
                      />
                      <Text fontSize="10px" bg="#ffe3c2" p="2 5 2 10">
                        SAFE
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fontSize="10px">{item.test}</Text>
                  <Flex>
                    <Image
                      src={item.logo}
                      alt={item.name}
                      height={50}
                      width={70}
                    />
                    <Tag
                      variant="solid"
                      colorScheme="green"
                      size="xl"
                      h="5"
                      p="2"
                    >
                      {item.rating}{" "}
                    </Tag>

                    {/* <Text bg="green" color="white" p="2px">{item.rating} </Text> */}
                    <Text fontSize="10px">ISO</Text>
                  </Flex>
                  <Flex gap="10px">
                    <Text>₹{item.price}</Text>
                    <Text color="grey" fontSize="15px" as="del">
                      ₹{item.offered}
                    </Text>
                    <Box
                      bg="green.100"
                      color="#1aab2a"
                      border="1px dotted green"
                      fontSize="15px"
                    >
                      {item.discount}
                    </Box>
                  </Flex>
                </Stack>
              </Box>
            );
          })}
        </Grid>
      </Center>
    </div>
  );
};

export default PathologyTests;
