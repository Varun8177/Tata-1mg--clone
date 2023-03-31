import React from "react";
import { Box, Flex, Text, Grid, Spacer, Image, Center } from "@chakra-ui/react";
// import Image from "next/image";
const PopularCombo = () => {
  const arr = [
    {
      id: 1,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/38b86c6a33f744afac80ed36d4bb87ba.jpg",
      name: "Tata 1mg Diabetes Care Combo Pack",
      details: "combo pack of 3 Packs",
      offered: "1085",
      discount: "47% off",
      price: "568",
    },
    {
      id: 2,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/c2sw0gi2dw4cwdf1ecjp.jpg",
      name: "Accu-Chek Combo Pack of Active 50 ",
      details: "combo pack of 3 units",
      offered: "1299",
      discount: "7% off",
      price: "1208",
    },
    {
      id: 3,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/537fd698-25dd-43d5-b5f7-02a997bcd33a.jpeg",
      name: " Tata 1mg Multivitamin Supreme Capsule",
      details: "combo pack of 2 bottles",
      offered: "1644",
      discount: "48% off",
      price: "848",
    },
    {
      id: 4,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg",
      name: "Immunity Care Combo of 1mg Panch Tulsi ",
      details: "combo pack of 2 Packs",
      offered: "335",
      discount: "26 % off",
      price: "246",
    },
    {
      id: 5,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cr9a2p0evnuzwvw5ksp1.jpg",
      name: "Acne Care Combo of Cetaphil Oily Skin Cleanser ",
      details: "combo pack of 2 Packs",
      offered: "820",
      discount: "14% off",
      price: "703",
    },
    {
      id: 6,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/if0qou7t1ptcaaowcigp.jpg",
      name: "Accu-Chek Active Combo of Glucometer ",
      details: "combo pack of 2 Packs",
      offered: "2048",
      discount: "5% off",
      price: "1936",
    },
    {
      id: 7,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/uca5jm0uqfqpjoyydzh0.jpg",
      name: "Tata 1mg Diabetes Care Combo ",
      details: "combo pack of 4 bottles",
      offered: "1580",
      discount: "58% off",
      price: "665",
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
        {/* <Flex w="80%" m="auto" gap="5"> */}
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(6,1fr)",
            "2xl": "repeat(7,1fr)",
          }}
          gap={6}
          w="80%"
          m="auto"
        >
          {arr.map((item) => {
            return (
              <Box
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                p="5"
                key={item.id}
                borderRadius="15px"
                justifyContent="center"
              >
                <Box>
                  <Image
                    src={item.img}
                    alt={item.name}
                    height={180}
                    width={200}
                    objectFit="contain"
                  />
                  <Text fontSize="14px" noOfLines={2}>
                    {item.name}
                  </Text>
                  <Text color="grey" fontSize="15px">
                    {item.details}
                  </Text>
                </Box>
                <Box w="auto" h="10px"></Box>
                <Box w="100%">
                  <Flex gap="4px" bottom="0px">
                    <Text color="grey" fontSize="10px" as="del">
                      MRP{item.offered}
                    </Text>
                    <Text color="green" fontSize="14px">
                      {item.discount}
                    </Text>
                  </Flex>
                  <Text>₹{item.price}</Text>
                </Box>
              </Box>
            );
          })}
        </Grid>
        {/* </Flex> */}
      </Center>
    </div>
  );
};

export default PopularCombo;
