import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import SignInCarousel from "./SignInCarousel";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userStatusUpdate } from "@/redux/auth/action";
import { getCartData } from "@/redux/cart/cart.action";

export default function SignInCard() {
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [load, setLoad] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const signinSuccess = () => {
    toast({
      title: "sign-in Successfull",
      description: `welcome back`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    dispatch(getCartData());
    dispatch(userStatusUpdate());
    setLoad(false);
  };

  const signinFail = () => {
    toast({
      title: "something went wrong",
      description: `Login attempt was failed`,
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    setLoad(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoad(true);
    toast.closeAll();
    dispatch(
      userLogin({
        email: loginEmail,
        password: loginPass,
        signinSuccess,
        signinFail,
      })
    );
  };
  return (
    <Flex
      minH={"60vh"}
      maxW={"60vw"}
      align={"center"}
      justify={"center"}
      flexDirection={{ base: "column", md: "row", lg: "row" }}
      margin="auto"
      mt="10vh"
      borderRadius="15px"
    >
      <SignInCarousel />
      <Stack
        spacing={8}
        mx={"auto"}
        w={{ base: "100%", md: "50%", lg: "50%" }}
        py={12}
        px={6}
      >
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleLogin}>
            <Stack spacing={4}>
              <Box>
                <Center>
                  <Heading>Sign In</Heading>
                </Center>
              </Box>
              <HStack></HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setLoginPass(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={load}
                  loadingText="Submitting"
                  size="lg"
                  color={"white"}
                  bg={"#ff6f61"}
                  _hover={{
                    bg: "#fd7c70",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  New user?{" "}
                  <Link href="#" color={"blue.400"}>
                    Signup
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
