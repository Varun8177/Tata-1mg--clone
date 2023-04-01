import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Box,
  StackDivider,
  Switch,
} from "@chakra-ui/react";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import MainNavbar from "@/components/navbar/MainNavbar/MainNavbar";
import Footer from "@/components/footer";

export default function Profile() {
  const [email, setEmail] = useState("reddyvaritejeshkumarreddy@gmail.com");
  const [mobile, setMobile] = useState("9133826592");
  const [workemail, setworkEmail] = useState(
    "reddyvaritejeshkumarreddy@gmail.com"
  );
  const [swth, setSwth] = useState(!true);
  const [swth2, setSwth2] = useState(!true);

  const handlemobile = () => {
    const tt = prompt("Type Number to Edit");

    setMobile(tt);
  };
  const handlemail = () => {
    const tt = prompt("Type Email to Edit");

    setEmail(tt);
  };
  const handlworkemail = () => {
    const tt = prompt("Type Workemail to edit");
    setworkEmail(tt);
  };
  const handleSwitch1 = () => {
    setSwth((prev) => !prev);
  };
  const handleSwitch2 = () => {
    setSwth2((prev) => !prev);
  };
  return (
    <>
      <MainNavbar />
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "0px",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "50px",
          height: "60vh",
        }}
      >
        <div style={{ margin: "auto", marginLeft: "150px" }}>
          {" "}
          <Card style={{ width: "500px" }}>
            <CardHeader>
              <Heading size="md">
                Hi,There <br />
                <Text
                  style={{ color: "grey", fontWeight: "10", fontSize: "15px" }}
                >
                  joined in 2023
                </Text>
              </Heading>
            </CardHeader>
            <hr style={{ style: "gray", margin: "20px" }} />
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box
                  style={{
                    display: "flex",
                    gap: "10%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <img
                      width="50px"
                      src="https://onemg.gumlet.io/image/upload/v1638281620/kt40wjhqxqdrjpgzvc73.png"
                      alt=""
                    />
                  </Box>
                  <Box style={{ marginRight: "40%" }}>
                    <Heading size="xs">
                      <Text
                        style={{
                          color: "grey",
                          fontWeight: "10",
                          fontSize: "13px",
                        }}
                      >
                        Mobile Number
                      </Text>
                    </Heading>

                    <Text pt="2" fontSize="sm">
                      {mobile}
                    </Text>
                  </Box>
                  <Box style={{ marginRight: "0%" }}>
                    <button onClick={handlemobile}>
                      <p style={{ color: "red", fontSize: "20px" }}>edit</p>
                    </button>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    gap: "10%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <img
                      width="50px"
                      src="https://onemg.gumlet.io/image/upload/v1638281596/yl5o4t3xslirp8kathah.png"
                      alt=""
                    />
                  </Box>
                  <Box style={{ marginRight: "0%" }}>
                    <Heading size="xs">
                      <Text
                        style={{
                          color: "grey",
                          fontWeight: "10",
                          fontSize: "13px",
                        }}
                      >
                        Primary Emailadress
                      </Text>
                    </Heading>

                    <Text pt="2" fontSize="sm">
                      {email}
                    </Text>
                  </Box>
                  <Box style={{ marginRight: "0%" }}>
                    <button>
                      <p
                        style={{ color: "red", fontSize: "20px" }}
                        onClick={handlemail}
                      >
                        edit
                      </p>
                    </button>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    gap: "10%",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <img
                      width="50px"
                      src="https://onemg.gumlet.io/image/upload/v1638281596/yl5o4t3xslirp8kathah.png"
                      alt=""
                    />
                  </Box>
                  <Box style={{ marginRight: "" }}>
                    <Heading size="xs">
                      <Text
                        style={{
                          color: "grey",
                          fontWeight: "10",
                          fontSize: "13px",
                        }}
                      >
                        Work Email address
                      </Text>
                    </Heading>

                    <Text pt="2" fontSize="sm">
                      {workemail}
                    </Text>
                  </Box>
                  <Box style={{ marginRight: "0%" }}>
                    <button>
                      <p
                        style={{ color: "red", fontSize: "20px" }}
                        onClick={handlworkemail}
                      >
                        edit
                      </p>
                    </button>
                  </Box>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </div>
        <div
          style={{
            width: "38%",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "",
            marginRight: "130px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              backgroundColor: "white",
              marginTop: "0px",
              height: "90px",
              justifyContent: "space-evenly",
              borderRadius: "5px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <div style={{ marginTop: "20px" }}>
              <img
                height={"40px"}
                width={"30px"}
                src="https://onemg.gumlet.io/image/upload/v1638281747/nzzgxx5xqbtcwmwbvanv.png"
                alt=""
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <span>My Nuo Coins</span>
              <br />
              <p>you have 0 coins in your wallet</p>
            </div>
            <div style={{ marginTop: "20px" }}>{">"}</div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              backgroundColor: "white",
              marginTop: "30px",
              height: "160px",
              justifyContent: "space-evenly",
              borderRadius: "5px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              paddingRight:"20px"
            }}
          >
            <div style={{ margin: "20px" }}>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <h5 style={{ color: swth2 ? "red" : "black" }}>
                  Subscribe to marketing emails
                </h5>
              </div>
              <div style={{ marginTop: "20px"}}>
                <p style={{paddingBottom:"10px"}}>
                  We will send you the latest offers, best products and updated
                  medical information to your email address
                </p>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Stack align="center" direction="row">
                <Switch onChange={handleSwitch2} size="sm" />
              </Stack>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              backgroundColor: "white",
              marginTop: "20px",
              height: "150px",
              justifyContent: "space-evenly",
              borderRadius: "5px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              paddingRight:"20px"
            }}
          >
            <div style={{ margin: "20px" }}>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                <h5 style={{ color: swth ? "red" : "black" }}>
                  Get whatsapp notifications
                </h5>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p>
                  We will send you the latest notifications related to your
                  orders and lab reports to your mobile number
                </p>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <Stack align="center" direction="row">
                <Switch onChange={handleSwitch1} size="sm" />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}