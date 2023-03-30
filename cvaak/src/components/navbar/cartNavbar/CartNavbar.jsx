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
      ml={{
        base: "5px",
        sm: "5px",
        md: "5px",
        lg: "20px",
        xl: "20px",
        "2xl": "20px",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
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
            src={"/healthPrimeLogo.png"}
            height={"50"}
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
