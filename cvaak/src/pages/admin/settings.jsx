import Sidebar from "@/components/adminPanel/Sidebar";
import useValueChange from "@/components/customHooks/useValueChange";
import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
import { GetAdminDataRequest } from "@/redux/admin/admin.action";
import { userLogout, userStatusUpdate } from "@/redux/auth/action";
import { EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { auth } from "config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

const AdminSettings = () => {
  const data = useSelector((store) => store.AdminReducer.Admins);
  const { isAuth, userName } = useSelector((state) => state.authReducer);
  const [domLoaded, setDomLoaded] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editMobile, setEditMobile] = useState(false);
  const [editGender, setEditGender] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setname] = useValueChange("");
  const [email, setEmail] = useValueChange("");
  const [mobile, setMobile] = useValueChange("");
  const [gender, setGender] = useValueChange("male");
  const dispatch = useDispatch();
  const router = useRouter();
  const Remove = () => setSelectedImage(null);
  const handleLogout = async () => {
    dispatch(userLogout());
    await signOut(auth);
  };
  const upload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(userStatusUpdate(user.displayName));
      }
    });
    setDomLoaded(true);
    dispatch(GetAdminDataRequest());
  }, []);

  let x = data?.filter((item) => {
    return item.name === userName;
  });
  return (
    <>
      <CartNavbar />{" "}
      {domLoaded && (
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
            <Box w={"100%"} h={"80vh"} m={"auto"} mt="30px" bgColor={"white"}>
              <Heading m={"auto"} w={"fit-content"}>
                Admin Settings
              </Heading>
              <Flex justifyContent={"space-evenly"} mt={"30px"}>
                <Stack w={"60%"}>
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Display Name</Text>
                      <EditIcon
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditName(true);
                        }}
                      />
                    </Flex>
                    {editName ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditName(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setname("");
                              setEditName(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {name.length ? name : x[0]?.name}
                      </Text>
                    )}
                  </Box>
                  <hr />
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Email</Text>
                      <EditIcon
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditEmail(true);
                        }}
                      />
                    </Flex>
                    {editEmail ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditEmail(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setEmail("");
                              setEditEmail(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {email.length ? email : x[0]?.email}
                      </Text>
                    )}
                  </Box>
                  <hr />
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Mobile</Text>
                      <EditIcon
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditMobile(true);
                        }}
                      />
                    </Flex>
                    {editMobile ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditMobile(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setMobile("");
                              setEditMobile(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {mobile.length ? mobile : x[0]?.contact}
                      </Text>
                    )}
                  </Box>
                  <hr />
                  <Box mb={"20px"}>
                    <Flex
                      alignItems={"center"}
                      w={"150px"}
                      justifyContent={"space-between"}
                    >
                      <Text as={"b"}>Gender</Text>
                      <EditIcon
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                          setEditGender(true);
                        }}
                      />
                    </Flex>
                    {editGender ? (
                      <Stack>
                        <Input
                          variant={"filled"}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        />
                        <Flex w={"100px"} justifyContent={"space-between"}>
                          <Button
                            onClick={() => {
                              setEditGender(false);
                            }}
                          >
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => {
                              setGender("");
                              setEditGender(false);
                            }}
                          >
                            <RxCross2 />
                          </Button>
                        </Flex>
                      </Stack>
                    ) : (
                      <Text fontSize={"12px"} color={"500"}>
                        {gender.length ? gender : x[0]?.gender}
                      </Text>
                    )}
                  </Box>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <Button
                    bgColor={"500"}
                    w={"200px"}
                    onClick={() => {
                      handleLogout();
                      router.push("/");
                    }}
                  >
                    Sign Out
                  </Button>
                </Stack>
                <Stack>
                  <Box textAlign={"center"}>
                    <Image
                      objectFit={"cover"}
                      borderRadius={"50%"}
                      alt="not found"
                      width={"250px"}
                      h={"250px"}
                      src={selectedImage ? selectedImage : x[0]?.profile}
                    />
                    <input type="file" name="myImage" onChange={upload} />
                  </Box>
                </Stack>
              </Flex>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
};

export default AdminSettings;
