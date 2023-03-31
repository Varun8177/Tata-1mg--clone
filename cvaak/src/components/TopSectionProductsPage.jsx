import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const TopSectionProductsPage = () => {
  const router = useRouter();
  return (
    <>
      <Box mt="10px">
        <Text>
          <span
            onClick={() => router.push("/")}
            style={{ color: "#ff6f61", cursor: "pointer", fontSize: "12px" }}
          >
            Home
          </span>
          <span style={{ color: "grey", fontSize: "12px" }}>
            {" > "}All Products
          </span>
        </Text>
        <Heading
          fontSize={{ lg: "24px", md: "20px", base: "18px" }}
          fontWeight="700"
          lineHeight={"34px"}
          m="10px 0"
        >
          TATA 1MG HEALTH PRODUCTS
        </Heading>
      </Box>
      <Image
        src="https://onemg.gumlet.io/q_auto,h_124,f_auto,a_ignore,w_1062/9c43e75c-414a-4323-9096-74cdafa1efd8.png"
        alt="Dan Abramov"
        w="100%"
        m={"12px 0"}
        objectFit="cover"
      />
      <Box display={{ xl: "flex", lg: "none", base: "none" }} gap="8px">
        <Image
          src="https://onemg.gumlet.io/q_auto,h_187,f_auto,a_ignore,w_350/483095fe-4263-45ad-9916-1da74bd70b61.png"
          alt="Dan Abramov"
          w="auto"
        />
        <Image
          src="https://onemg.gumlet.io/q_auto,h_187,f_auto,a_ignore,w_350/d9081b44-9fba-42ad-a9f0-7ed99abffe0b.png"
          alt="Dan Abramov"
          w="auto"
        />
        <Image
          src="https://onemg.gumlet.io/q_auto,h_187,f_auto,a_ignore,w_350/14bfa337-4a8d-4cd2-9fce-44ae14394470.png"
          alt="Dan Abramov"
          w="auto"
        />
      </Box>
      <Heading
        fontSize={{ lg: "24px", md: "20px", base: "18px" }}
        fontWeight="700"
        lineHeight={"30px"}
        m="15px 0"
      >
        ALL PRODUCTS
      </Heading>
    </>
  );
};

export default TopSectionProductsPage;
