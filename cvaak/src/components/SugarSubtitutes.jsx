import React from "react";
import { Box, Flex, Text, Grid, Spacer, Image, Center } from "@chakra-ui/react";
const SugarSubtitutes = () => {
  const arr = [
    {
      id: 1,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/bpgstknem0udqzp9p4dm.jpg",
      name: "Sugar Free Gold Low Calorie Sweetener",
      details: "bottle of 500 pellets",
      offered: "300",
      discount: "6% off",
      price: "280",
    },
    {
      id: 2,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/fud0ky8qdz1mupsc58ze.jpg",
      name: "So Sweet Stevia Sugar Free Tablet ",
      details: "packet of 100 tablets",
      offered: "120",
      discount: "2% off",
      price: "117",
    },
    {
      id: 3,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cropped/d8wetugtajdasve7gg0u.jpg",
      name: " Tata 1mg Multivitamin Supreme Capsule",
      details: "combo pack of 2 bottles",
      offered: "1644",
      discount: "48% off",
      price: "848",
    },
    {
      id: 4,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qir6i2zlhzeddxa4mqt0.jpg",
      name: "Sugar Free Natura Low Calorie Sweetener Pellets ",
      details: "bottle of 500 pellets",
      offered: "300",
      discount: "4% off",
      price: "287",
    },
    {
      id: 5,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/kuhv7g7ouhb8jwhvsgmk.jpg",
      name: "Zindagi Stevia Tablet ",
      details: "bottle of 100 tablets",
      offered: "165",
      discount: "7% off",
      price: "147",
    },
    {
      id: 6,
      img: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/jadahxgbfiupbmy8sxve.jpgg",
      name: "Lakanto Monkfruit Sweetener with Erythritol Classic White Sugar Replacement Granules ",
      details: "packet of 200 gm Granules",
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
            xl: "repeat(5,1fr)",
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

export default SugarSubtitutes;
