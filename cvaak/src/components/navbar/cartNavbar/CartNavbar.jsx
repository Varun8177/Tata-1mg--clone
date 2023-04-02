import { Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartNavbar = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"white"}
    >
      <Flex
        w={{
          base: "70%",
          sm: "70%",
          md: "70%",
          lg: "70%",
          xl: "50%",
          "2xl": "50%",
        }}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Image
            p={"2"}
            src={"/cvaak.png"}
            height={"100"}
            alt={"logo"}
            width={"120"}
          />
        </Link>
        <InputGroup>
          <Input
            size="sm"
            variant={"filled"}
            placeholder={"Search for Medicines and Products"}
          />
          <InputRightElement mt={"-3px"}>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Text mr={"20px"}>Need help?</Text>
    </Flex>
  );
};

export default CartNavbar;
