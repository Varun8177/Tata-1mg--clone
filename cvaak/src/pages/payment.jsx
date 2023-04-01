import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Text,
  Textarea,
  RadioGroup,
  Stack,
  Radio,
  Flex,
  useToast,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
// import { useradress } from "@/redux/adress/adress.action";
 import { ADDADRESS } from "@/redux/adress/adress.types";
// import PaymentNavbar from "@/components/navbar/paymentNavbar/PaymentNavbar";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import { FormGroup, Input, InputLabel } from "@mui/material";
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
  let [value, setValue] = React.useState("");
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
  const eventHandler = () => {
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
      <Box padding={"50px"} backgroundColor={"gray.50"} style={{border:"0px solid red"}}>
        <Box
          style={{
            border: "0px solid red",
            marginLeft: "700px",
            color: "333333",
            fontSize: "16px",
            width:"20%",
            fontFamily: "Clear SansHelvetica Neue",
          }}
        >
          <h1 style={{fontSize:"30px",fontWeight:"bold" }}>Shipping Address</h1>
        </Box>
        {/* <Box style={{border:"1px solid red",marginBottom:"90%"}}> */}
        <Box
          style={{
            display:"flex",
            justifyContent:"space-around",
            borderStyle: "ridge",
            width: "80%",
             marginLeft:"180px",
            alignContent:"center",
            backgroundColor: "#fef7ef",

          }}
        >
          <Box>
            <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>Address:</label>
          <input
            onChange={(e) => setAdd(e.target.value)}
            type={"text"}
            value={add}
            style={{
              textAlign: "start",

              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "80px",
              borderRadius: "5px",
            }}
            placeholder="Flatnumber,BuildingName,Streetname,City"
          />
           <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>Landmark:</label>
          <input
            onChange={(e) => setLand(e.target.value)}
            value={land}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Landmark (optional)"
          />
           <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>Pincode:</label>
          <input
            onChange={(e) => setPin(e.target.value)}
            value={pin}
            type={"number"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Pincode"
          />
           <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>Locality:</label>
          <input
            onChange={(e) => setLocal(e.target.value)}
            value={local}
            type={"text"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Locality"
          />
             <ResizeExample />
          </Box>
          <Box style={{marginTop:"11px"}} >
          <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>City:</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type={"text"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="City"
          />
           <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>State:</label>
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            type={"text"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="State"
          />
           <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type={""}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="Customer Name"
          />
           <label for="" style={{marginLeft:"20px",fontWeight:"600"}}>Mobile Number:</label>
          <input
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
            type={"tel"}
            style={{
              textAlign: "start",
              padding: "5px",
              fontFamily:
                "Clear Sans Helvetica Neue Helvetica Arial sans-serif",
              border: "1px solid gray",
              width: "95%",
              margin: "15px",
              height: "40px",
              borderRadius: "5px",
            }}
            placeholder="10 Digits Mobile Number"
          />
 <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyItems: "end",
              justifyContent: "end",
            }}
          >
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                fontFamily:
                  "Clear Sans Helvetica Neue HelveticaArial sans-serif",
                fontSize: "15px",
                width: "100px",
                height: "40px",
              }}
            >
              {" "}
              CANCEL
            </button>
            <Button
              onClick={eventHandler}
              style={{
                backgroundColor: "#ff6f61",
                color: "white",
                fontFamily:
                  "Clear Sans Helvetica Neue HelveticaArial sans-serif",
                fontSize: "15px",
                marginTop:"100px",
                width: "100px",
                height: "40px",
              }}
              isDisabled={
                add == "" ||
                pin == "" ||
                local == "" ||
                city == "" ||
                state == "" ||
                mobile == "" ||
                name == ""
              }
            >
              SAVE
            </Button>
          </div>
          </Box>


          </Box>
          {/* */}
          
       
         
        {/* </Box> */}
            </Box>

         

    </> 
  );
};

export default Payment;
