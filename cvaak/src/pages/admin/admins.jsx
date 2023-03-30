import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Grid,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { GetAdminDataRequest } from "@/redux/admin/admin.action";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";

const AdminsSection = () => {
  const data = useSelector((store) => store.AdminReducer.Admins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAdminDataRequest());
  }, []);
  return (
    <>
      <CartNavbar />
      <Box bgColor={"#d8dff7"} h={"90vh"}>
        <Flex bgColor={"#d8dff7"} w={"99%"} m={"auto"}>
          <Box
            bgColor={"white"}
            h={"80vh"}
            borderRadius={"10px"}
            mt="30px"
            mr={"30px"}
          >
            <Sidebar />
          </Box>
          <Box
            w={"100%"}
            h={"80vh"}
            m={"auto"}
            mt="30px"
            bgColor={"white"}
            pt={"20px"}
          >
            <Flex
              justifyContent={"space-around"}
              borderBottomWidth={1}
              pb={"5"}
            >
              <Input
                placeholder="Search by name "
                variant={"filled"}
                w={"50%"}
                onChange={(e) => {
                  data.filter((item) => {
                    return item.name.includes(e.target.value);
                  });
                }}
              />
              <Menu>
                <MenuButton
                  _hover={{ bgColor: "500" }}
                  bgColor={"500"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Filter
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  _hover={{ bgColor: "500" }}
                  bgColor={"500"}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  Sort
                </MenuButton>
                <MenuList>
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Grid
              templateColumns={"repeat(5,1fr)"}
              gap={"3"}
              m={"auto"}
              w={"fit-content"}
              alignItems={"center"}
              h={"400px"}
            >
              {data.map((item, i) => {
                return (
                  <Box
                    borderRadius={"10px"}
                    w={"220px"}
                    h={"340px"}
                    bgColor={"gray.200"}
                    key={i}
                  >
                    <Image
                      src={item.profile}
                      alt={item.name}
                      h={"200px"}
                      w={"280px"}
                      objectFit={"cover"}
                    />
                    <Center>
                      <Text as={"b"}>{item.name}</Text>
                    </Center>
                    <Center>
                      <Grid templateColumns={"repeat(2,1fr)"}>
                        <Text>Position:</Text>
                        <Text>{item.position}</Text>
                        <Text>Contact:</Text>
                        <Text>{item.contact}</Text>
                      </Grid>
                    </Center>
                    <Flex w="100%" justifyContent={"space-evenly"}>
                      <Image
                        src="https://onemg.gumlet.io/vqpr5zx9ofpsyafjwwin.svg"
                        alt="fb"
                        width="30"
                        height="30"
                      />
                      <Image
                        src="https://onemg.gumlet.io/wwynoy59i3iakt8te5xl.svg"
                        alt="fb"
                        width="30"
                        height="30"
                      />
                      <Image
                        src="https://onemg.gumlet.io/cwrpdmlzckwzvv9e1gjv.svg"
                        alt="fb"
                        width="30"
                        height="30"
                      />

                      <Image
                        src="https://onemg.gumlet.io/hqfglkzkfxaxaypniixn.svg"
                        alt="fb"
                        width="30"
                        height="30"
                      />
                    </Flex>
                  </Box>
                );
              })}
            </Grid>
            {/* <Flex w={"20%"} m={"auto"} justifyContent={"space-evenly"}>
            <Button>Next</Button>
            <Button>Previous</Button>
          </Flex> */}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AdminsSection;
