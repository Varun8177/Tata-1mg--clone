import { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Center,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetCart } from "@/redux/cart/cart.action";
import { RESETCART } from "@/redux/cart/cart.types";

const Final = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCart({ type: RESETCART }));
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <Center h="100vh">
      <Box maxW="600px" mx="auto" textAlign="center" py={20}>
        <Center mb={4}>
          <FaCheckCircle size="5em" color="green.500" />
        </Center>
        <Heading as="h1" size="xl" mb={4}>
          Thank you for your order!
        </Heading>
        <Text mb={8}>
          Your order has been successfully placed and will be shipped to you
          soon.
        </Text>
        <Stack direction={["column", "row"]} spacing={4} justify="center">
          <Button colorScheme="green" size="lg" onClick={() => {}}>
            View Order Details
          </Button>
          <Button
            size="lg"
            onClick={() => {
              router.push("/");
            }}
          >
            Return to Home
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default Final;
