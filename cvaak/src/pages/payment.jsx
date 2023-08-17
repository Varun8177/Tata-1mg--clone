import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  RadioGroup,
  Radio,
  useToast,
  Button,
  Stack,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ADDADRESS } from "@/redux/adress/adress.types";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
function ResizeExample() {
  const [resize, setResize] = React.useState("horizontal");
  return (
    <>
      <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Home</Radio>
          <Radio value="vertical">Office</Radio>
          <Radio value="none">Other</Radio>
        </Stack>
      </RadioGroup>
    </>
  );
}
const Payment = () => {
  let [add, setAdd] = React.useState("");
  let [land, setLand] = React.useState("");
  let [pin, setPin] = React.useState("");
  let [local, setLocal] = React.useState("");
  let [city, setCity] = React.useState("");
  let [state, setState] = React.useState("");
  let [mobile, setMobile] = React.useState("");
  let [name, setName] = React.useState("");
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const eventHandler = (e) => {
    e.preventDefault();
    if (
      add == "" ||
      pin == "" ||
      local == "" ||
      city == "" ||
      state == "" ||
      mobile == "" ||
      name == ""
    ) {
      toast({
        title: "adress not saved",
        description: "Please Fill the all details",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      const adress = {
        name: name,
        actualadress: add,
        state: state,
        city: city,
        mobile: mobile,
        pin: pin,
      };
      dispatch({ type: ADDADRESS, payload: adress });
      toast({
        title: "adress saved.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/summary");
    }
  };
  return (
    <>
      <CartNavbar />
      <Box
        padding={"50px"}
        backgroundColor={"gray.50"}
        style={{ border: "0px solid red" }}
      >
        <Box
          style={{
            border: "0px solid red",
            margin: "auto",
            color: "black",
            fontSize: "16px",
            width: "20%",
            fontFamily: "Clear SansHelvetica Neue",
          }}
        >
          <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
            Shipping Address
          </h1>
        </Box>
        <form
          style={{
            width: "80%",
            margin: "auto",
            background: "white",
            "box-shadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
          onSubmit={eventHandler}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-around",
              borderStyle: "ridge",
              width: "100%",
              alignContent: "center",
              backgroundColor: "white",
              padding: "5px",
            }}
          >
            <Box p={5} w={"50%"}>
              <VStack spacing={4} align="start">
                <label style={{ fontWeight: "600" }}>Address:</label>
                <Input
                  onChange={(e) => setAdd(e.target.value)}
                  type="text"
                  value={add}
                  isRequired
                  placeholder="Flatnumber, BuildingName, Streetname, City"
                />

                <label style={{ fontWeight: "600" }}>Landmark:</label>
                <Input
                  onChange={(e) => setLand(e.target.value)}
                  value={land}
                  placeholder="Landmark (optional)"
                  isRequired
                />

                <label style={{ fontWeight: "600" }}>Pincode:</label>
                <Input
                  onChange={(e) => setPin(e.target.value)}
                  value={pin}
                  type="number"
                  placeholder="Pincode"
                  isRequired
                />

                <label style={{ fontWeight: "600" }}>Locality:</label>
                <Input
                  onChange={(e) => setLocal(e.target.value)}
                  value={local}
                  type="text"
                  placeholder="Locality"
                  isRequired
                />

                <ResizeExample />
              </VStack>
            </Box>
            <Box p={5} w={"50%"}>
              <VStack spacing={4} align="start">
                <label style={{ fontWeight: "600" }}>City:</label>
                <Input
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  type="text"
                  placeholder="City"
                  isRequired
                />

                <label style={{ fontWeight: "600" }}>State:</label>
                <Input
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  type="text"
                  placeholder="State"
                  isRequired
                />

                <label style={{ fontWeight: "600" }}>Name:</label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type=""
                  placeholder="Customer Name"
                  isRequired
                />

                <label style={{ fontWeight: "600" }}>Mobile Number:</label>
                <Input
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                  type="tel"
                  placeholder="10 Digits Mobile Number"
                  isRequired
                />
              </VStack>
            </Box>
          </Box>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyItems: "end",
              justifyContent: "end",
              padding: "5px",
              gap: "10px",
            }}
          >
            <Button
              variant="outline"
              colorScheme="gray"
              fontFamily="Clear Sans Helvetica Neue Helvetica Arial sans-serif"
              fontSize="15px"
              width="100px"
              height="40px"
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              backgroundColor="#ff6f61"
              color="white"
              fontFamily="Clear Sans Helvetica Neue Helvetica Arial sans-serif"
              fontSize="15px"
              width="100px"
              height="40px"
            >
              SAVE
            </Button>
          </div>
        </form>

        {/* */}
        {/* </Box> */}
      </Box>
    </>
  );
};

export default Payment;
