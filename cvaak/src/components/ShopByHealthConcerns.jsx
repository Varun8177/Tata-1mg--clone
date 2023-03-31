import React from "react";
import Image from "next/image";
import { Box, Center, Heading, Text, Flex, Grid } from "@chakra-ui/react";
const ShopByHealthConcerns = () => {
  return (
    <div>
      <Center
        bg="grey.100"
        w="100%"
        // border="1px solid black"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        mt="10"
        mb="10"
        bgColor={"white"}
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
          {/* 1 */}
          <Box
            p="5"
            align="center"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png"
              alt="diabataese care"
              height="120"
              width="120"
            />
            <Text>diabataese care</Text>
          </Box>
          {/* 2 */}
          <Box
            p="5"
            align="center"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png"
              alt="diabataese care"
              height="120"
              width="120"
            />
            <Text>Cardiac care</Text>
          </Box>
          {/* 3 */}
          <Box
            p="5"
            align="center"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png"
              alt="diabataese care"
              height="120"
              width="120"
            />
            <Text>Stomach care</Text>
          </Box>
          {/* 4 */}
          <Box
            p="5"
            align="center"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png"
              alt="Liver care"
              height="120"
              width="120"
            />
            <Text>Liver care</Text>
          </Box>
          {/* 5 */}
          <Box
            p="5"
            align="center"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png"
              alt="diabataese care"
              height="120"
              width="120"
            />
            <Text>Bone,Joint care</Text>
          </Box>
          {/* 6 */}
          <Box
            p="5"
            align="center"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png"
              alt="diabataese care"
              height="120"
              width="120"
            />
            <Text>Kidney care</Text>
          </Box>
          {/* 7 */}
          <Box
            p="5"
            align="center"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <Image
              src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png"
              alt="diabataese care"
              height="120"
              width="120"
            />
            <Text>Drema care</Text>
          </Box>
        </Grid>
      </Center>
    </div>
  );
};

export default ShopByHealthConcerns;
