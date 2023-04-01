// import { AddCartItem } from "@/redux/admin/admin.types";
import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const ProductCard = (props) => {
  // const cartData = useSelector((state) => state.AdminReducer.cart);
  // const { isAuth } = useSelector((state) => state.authReducer);
  const [isAuth, setIsAuth] = useState(true);
  const [addText, setAddText] = useState("ADD");
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();
  const goToSingleProductPage = () => {
    router.push(`products/${props._id}`);
    console.log(props._id);
  };
  return (
    <GridItem
      w="240px"
      h="auto"
      padding="5"
      textAlign="left"
      bg="white"
      m="auto"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Box maxW={"100%"} h={"150px"} mb={"10px"} align={"center"}>
        <Image
          objectFit={"contain"}
          h="100%"
          src={props.src}
          alt={props.id}
          onClick={goToSingleProductPage}
          cursor="pointer"
        />
      </Box>
      <Text
        fontSize="14px"
        fontWeight="600"
        mb="5px"
        onClick={goToSingleProductPage}
        cursor="pointer"
      >
        {props.title.substring(0, 24).concat("...")}
      </Text>
      <Text color="grey" fontSize="13px" fontWeight="600" mb="10px">
        {props.packsize}
      </Text>
      <Flex gap={"20px"}>
        <Button
          fontSize={"12px"}
          fontWeight={600}
          bg="#1aab2a"
          size={"xs"}
          color={"white"}
          mb={"10px"}
          cursor="auto"
          _hover={{
            bg: "#4dc65b",
          }}
        >
          {props.rating}
          <AiFillStar />
        </Button>
        <Text fontSize={"13px"} mb={"10px"} color="grey" fontWeight={600}>
          {props.CardRatingDetail}
        </Text>
      </Flex>
      <Flex gap={"10px"}>
        <Text
          color="grey"
          fontSize={"12px"}
          mb={"10px"}
          textDecor="line-through"
          fontWeight={600}
        >
          {props["strike-price"] ? props["strike-price"] : null}₹
        </Text>
        <Text fontSize={"13px"} mb={"10px"} color="#1aab2a" fontWeight={600}>
          {props["discount-percent"] ? props["discount-percent"] : "0%"}
        </Text>
      </Flex>
      <Flex align={"center"} justify="space-between">
        <Heading fontSize={"15px"} mb="2px" fontWeight={600}>
          ₹{props.price}
        </Heading>
        <Button
          fontWeight={"700"}
          bg="white"
          size={"sm"}
          color="#ff6f61"
          _hover={{
            bg: "#ff6f61",
            color: "white",
          }}
          onClick={() => {
            isAuth && dispatch({ type: AddCartItem, payload: props });
            // console.log(cartData);
            if (!isAuth) {
              toast({
                title: "Product cannot be added.",
                description: "Please login first.",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
                bg: "#ff6f61",
              });
            }
            isAuth && setAddText("ADDED ✓");
          }}
          display={isAuth ? "block" : "none"}
        >
          {addText}
        </Button>
      </Flex>
    </GridItem>
  );
};

export default ProductCard;
