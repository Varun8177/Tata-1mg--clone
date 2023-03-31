import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Grid,
  Heading,
  Hide,
  Menu,
  Show,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { FiActivity, FiSettings } from "react-icons/fi";
import { SiSketchfab } from "react-icons/si";

const Sidebar = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [show, setshow] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <Hide below="md">
            <Flex bgcolor={"white"} w={show ? "220px" : "80px"}>
              {show ? (
                <Stack w={"150px"} m={"auto"} h={"80vh"} textAlign={"center"}>
                  <Heading
                    ml={"15px"}
                    mb={"20px"}
                    pt={"5"}
                    w={"fit-content"}
                    borderBottomWidth={3}
                    textAlign={"center"}
                  >
                    Menu
                  </Heading>
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin");
                    }}
                  >
                    <AiFillHome /> <Text>Dashboard</Text>
                  </Grid>
                  <br />
                  <hr />
                  <Grid
                    cursor={"pointer"}
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    onClick={() => {
                      router.push("/admin/productdetails");
                    }}
                  >
                    <BsClipboardData /> Products
                  </Grid>
                  <br />
                  <hr />
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin/activity");
                    }}
                  >
                    <FiActivity /> Activity

                  </Grid>
                  <br />
                  <hr />
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin/admins");
                    }}
                  >
                    <SiSketchfab /> Admins
                  </Grid>
                  <br />
                  <hr />
                  <Grid
                    w={"70%"}
                    templateColumns={"50px auto"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    onClick={() => {
                      router.push("/admin/settings");
                    }}
                  >
                    <FiSettings /> Settings
                  </Grid>
                </Stack>
              ) : (
                <Stack w={"70px"} m={"auto"} h={"80vh"}>
                  <Heading
                    fontSize={"18px"}
                    ml={"15px"}
                    mb={"20px"}
                    pt={"5"}
                    w={"fit-content"}
                    borderBottomWidth={3}
                    textAlign={"center"}
                  >
                    Menu
                  </Heading>
                  <Tooltip
                    cursor={"pointer"}
                    label="Dashboard"
                    placement="right"
                  >
                    <Grid
                      cursor={"pointer"}
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                    >
                      <AiFillHome style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                  <br />
                  <hr />
                  <Tooltip label="Product Details" placement="right">
                    <Grid
                      cursor={"pointer"}
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                    >
                      <BsClipboardData style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                  <br />
                  <hr />
                  <Tooltip label="Activity" placement="right">
                    <Grid
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                      cursor={"pointer"}
                    >
                      <FiActivity style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                  <br />
                  <hr />
                  <Tooltip label="Admins" placement="right">
                    <Grid
                      cursor={"pointer"}
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                    >
                      <SiSketchfab style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>

                  <br />
                  <hr />

                  <Tooltip label="settings" placement="right">
                    <Grid
                      cursor={"pointer"}
                      w={"100%"}
                      templateColumns={"50px"}
                      alignItems={"center"}
                    >
                      <FiSettings style={{ margin: "auto" }} size={"20"} />
                    </Grid>
                  </Tooltip>
                </Stack>
              )}
              <Button
                h={"80vh"}
                bgColor={"white"}
                w={"30px"}
                alignSelf={"flex-end"}
                onClick={() => {
                  setshow(!show);
                }}
                _hover={{ bgcolor: "white" }}
              >
                {show ? <ArrowLeftIcon /> : <ArrowRightIcon />}
              </Button>
            </Flex>
          </Hide>
          <Show below="md">
            <Menu></Menu>
          </Show>
        </>
      )}
    </>
  );
};

export default Sidebar;