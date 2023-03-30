// import useThrottle from "@/components/customHooks/useThrottle";
import { CheckIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiThunderBlade } from "react-icons/gi";
import { ImLocation } from "react-icons/im";

const NavMiddleSection = () => {

  const [onChangeValue, setOnChangeValue] = useState('');
  const [search, setSearch] = useState([]);
  const [Products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean()
//   const throttledText = useThrottle(onChangeValue, 400)

//   const searchMovies = async () => {
//     const data = await fetch(`https://dead-earrings-tick.cyclic.app/products`);
//     const res = await data.json();
//     setProducts(res)
//   }
//   useEffect(() => {
//     searchMovies()
//   }, [])
//   useEffect(() => {
//     if (throttledText === '') {
//       setSearch([])
//     }
//     else {
//       console.log(throttledText)
//       let newSuggestions = Products.filter(item => {
//         return item.title.split(' ').join("").trim().toLowerCase().indexOf(throttledText) !== -1 ? true : false;
//       })
//       setSearch(newSuggestions)
//       setShowDropdown.on()
//     }
//   }, [throttledText])
//   console.log(search);



  return (
    <Flex justifyContent={"space-around"} alignItems={"center"}>
      <Flex
        w={"50%"}
        // border={"1px solid blue"}
        alignItems={"center"}
        pt={"5px"}
        pb={"5px"}
      >
        {/* <InputLeftElement pointerEvents="none">
          <ImLocation color="gray.300" size={"20"} />
        </InputLeftElement> */}
        <Input variant="filled" placeholder="City" size="sm" w={"200px"} />

        <Input
          ml={"20px"}
          variant="filled"
          placeholder="Search for medicines and health products"
          size="sm"
          w={"100%"}
          // position='relative'  
          onChange={(e) => setOnChangeValue(e.target.value)}
        />
        {search.length > 0 && <Box
          // border='1px solid black'
          borderRadius='5px'
          position='absolute'
          top='100px'
          zIndex="100"
          bgColor='white'
          overflow='scroll'
          w='38%'
          maxH='400px'
          m='auto'
          left={'280'}
        >
          {search.map((item, i) => {
            return <Link href={`/products/${item.id}`} key={i + 1} >
              <Text fontSize='16px' p='10px' cursor='pointer' onClick={setShowDropdown.off}>{item.title}</Text>
            </Link>
          })}
        </Box>}
        {/* <InputRightElement>
          <Search2Icon />
        </InputRightElement> */}
      </Flex>
      <Flex
        fontSize={{
          base: "8px",
          sm: "10px",
          md: "12px",
          lg: "13px",
          xl: "13px",
          "2xl": "13px",
        }}
        alignItems={"center"}
        ml={"10px"}
      >
        <AiFillThunderbolt />
        <Text>QUICK BUY! Get 25% off on medicines*</Text>
        <Button
          ml={"10px"}
          bgColor={"500"}
          color={"white"}
          _hover={{ bgColor: "500" }}
          fontSize={{
            base: "8px",
            sm: "10px",
            md: "12px",
            lg: "13px",
            xl: "13px",
            "2xl": "13px",
          }}
        >
          Quick Order
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavMiddleSection;
