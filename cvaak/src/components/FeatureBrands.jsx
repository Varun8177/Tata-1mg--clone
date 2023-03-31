import React from "react";
import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
const FeatureBrands = () => {
  const fb = [
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a4b4aac7-458a-4786-93b8-d12cb8dbc09b.png",
      name: "Baidyanath",
      id: 1,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ede6dd90-97de-4267-892b-5ebff274eb47.png",
      name: "Dabar",
      id: 2,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/be063bf5-3efb-4c29-bc0a-275ad18fdbe9.png",
      name: "Sri Sri Tattva ",
      id: 3,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/8c053c4c-b0d1-4141-a655-b5146deefb8d.png",
      name: "Dr Willmar Schwabe India",
      id: 4,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/68019dec-b4f5-4dc0-9676-52c856314db0.png",
      name: "Optimum Nutrution",
      id: 5,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5e933a16-7015-45a4-92b2-95bfbd578d4f.png",
      name: "Supradyn",
      id: 6,
    },
    {
      img: "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/0ed127ac-2317-435f-b652-14d04d696472.png",
      name: "Complan",
      id: 7,
    },
  ];

  //ShopByHealthConcerns.jsx

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
            sm: "repeat(2,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(6,1fr)",
            "2xl": "repeat(7,1fr)",
          }}
          w="80%"
          m="auto"
          gap="5"
        >
          {fb.map((item, i) => {
            return (
              <Box
                _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                p="5"
                align="center"
                key={i}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  height={"120px"}
                  width={"150px"}
                />
                <Text>{item.name}</Text>
              </Box>
            );
          })}
        </Grid>
      </Center>
    </div>
  );
};

export default FeatureBrands;
//FullBodyHealthCheckups.jsx
