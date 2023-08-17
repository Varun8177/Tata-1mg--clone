import useThrottle from "@/components/customHooks/useThrottle";
import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";

const NavMiddleSection = () => {
  const [onChangeValue, setOnChangeValue] = useState("");
  const [search, setSearch] = useState([]);
  const [showDropdown, setShowDropdown] = useBoolean();
  const throttledText = useThrottle(onChangeValue, 400);

  const searchMovies = async () => {
    const data = await fetch(`https://black-skirt.cyclic.app/products`);
    const res = await data.json();
    if (res) {
      let newSuggestions = res.filter((item) => {
        return item.title
          .split(" ")
          .join("")
          .trim()
          .toLowerCase()
          .indexOf(throttledText) !== -1
          ? true
          : false;
      });
      setSearch(newSuggestions);
      setShowDropdown.on();
    }
  };

  useEffect(() => {
    if (throttledText === "") {
      setSearch([]);
    } else {
      searchMovies();
    }
  }, [throttledText]);

  return (
    <Flex justifyContent={"space-around"} alignItems={"center"}>
      <Flex
        w={"50%"}
        // border={"1px solid blue"}
        alignItems={"center"}
        pt={"5px"}
        pb={"5px"}
      >
        <Input variant="filled" placeholder="City" size="sm" w={"200px"} />

        <Input
          ml={"20px"}
          variant="filled"
          placeholder="Search for medicines and health products"
          size="sm"
          w={"100%"}
          onChange={(e) => setOnChangeValue(e.target.value)}
        />
        {search.length > 0 && (
          <Box
            borderRadius="5px"
            position="absolute"
            top="100px"
            zIndex="100"
            bgColor="white"
            overflow="scroll"
            w="38%"
            maxH="400px"
            m="auto"
            left={"280"}
          >
            {search?.map((item, i) => {
              return (
                <Link href={`/products/${item._id}`} key={i + 1}>
                  <Text
                    fontSize="16px"
                    p="10px"
                    cursor="pointer"
                    onClick={setShowDropdown.off}
                  >
                    {item.title}
                  </Text>
                </Link>
              );
            })}
          </Box>
        )}
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
        gap={"5px"}
      >
        <AiFillThunderbolt />
        <>QUICK BUY! Get 25% off on medicines*</>
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
