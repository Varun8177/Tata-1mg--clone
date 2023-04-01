import { Avatar, Box, Flex, Hide, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaLongArrowAltRight } from "react-icons/fa"

function Boxes({ color, value, text, location,src }) {
  const router = useRouter();
  return (
    <Box
      h={{
        base: "100px",
        sm: "100px",
        md: "100px",
        lg: "100px",
        xl: "120px",
        "2xl": "120px",
      }}
      w={{
        base: "200px",
        sm: "200px",
        md: "200px",
        lg: "220px",
        xl: "240px",
        "2xl": "250px",
      }}
      bgColor={color}
      borderRadius={"10px"}
      pt={"15px"}
    >
      <Flex alignItems={"center"} w={"100%"} justifyContent={"space-around"}>
        <Box>
        {/* <Avatar bgColor={"white"} color={"black"} name={String(value)} /> */}
        <img  style={{width:"60px",borderRadius:"50%"}} src={src} alt="logo" />
        </Box>
        <Box>
        <Text color={"black"}>{text}</Text>
       
        <Text style={{fontSize:"25px",fontWeight:"bold"}} >{value}</Text>
        </Box>

      </Flex>
      <Flex
        alignItems={"center"}
        mt={{
          base: "5px",
          sm: "5px",
          md: "5px",
          lg: "10px",
          xl: "20px",
          "2xl": "20px",
        }}
        w={"fit-content"}
        ml={"20px"}
        cursor={"pointer"}
        onClick={() => {
          router.push(location);
        }}
      > 
      
        {/* <Text w={"fit-content"}>View Details</Text> */}
        {/* <FaLongArrowAltRight style={{ marginLeft: "20px" }} /> */}
      </Flex>
    </Box>
  );
}
export default Boxes;
