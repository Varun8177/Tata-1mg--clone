import SignInModal from "@/components/authCom/SignIn/SignInModal";
import SignUpModal from "@/components/authCom/SignUp/SignUpModal";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Badge,
  Flex,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Show,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import React, { useEffect } from "react";

import { useRouter } from "next/router";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMedicalCase, CiMedicalCross, CiMedicalMask } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FcConferenceCall } from "react-icons/fc";
import { GiMeditation } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { TbDiscount2, TbHelp } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { userLogout, userStatusUpdate } from "@/redux/auth/action";
import { getCartData } from "@/redux/cart/cart.action";

const NavTopSection = () => {
  const { isAuth, userName, admin } = useSelector((state) => state.authReducer);
  const cartData = useSelector((state) => state.CartReducer.products);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  useEffect(() => {
    const token = localStorage.getItem("token") || "";
    if (token) {
      dispatch(userStatusUpdate());
      dispatch(getCartData());
    }
  }, []);

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
          base: "100%",
          sm: "100%",
          md: "100%",
          lg: "62em",
          xl: "62em",
          "2xl": "56em",
        }}
        justifyContent={{
          base: "space-between",
          sm: "space-evenly",
          md: "space-evenly",
          lg: "space-evenly",
          xl: "space-evenly",
          "2xl": "space-evenly",
        }}
        alignItems={"center"}
      >
        <Link href={"/"}>
          <Image src={"/cvaak.png"} height={"50"} alt={"logo"} width={"160"} />
        </Link>
        <Hide breakpoint="(max-width: 397px)">
          <Text
            fontSize={{
              base: "6px",
              sm: "8px",
              md: "10px",
              lg: "13px",
              xl: "13px",
              "2xl": "15px",
            }}
            _hover={{ color: "500", cursor: "pointer" }}
            as={"b"}
          >
            MEDICINES
          </Text>
          <Text
            fontSize={{
              base: "6px",
              sm: "8px",
              md: "10px",
              lg: "13px",
              xl: "13px",
              "2xl": "15px",
            }}
            _hover={{ color: "500", cursor: "pointer" }}
            as={"b"}
          >
            LAB TESTS
          </Text>
          <Text
            fontSize={{
              base: "6px",
              sm: "8px",
              md: "10px",
              lg: "13px",
              xl: "13px",
              "2xl": "15px",
            }}
            _hover={{ color: "500", cursor: "pointer" }}
            as={"b"}
          >
            CONSULT DOCTORS
          </Text>
          <Text
            fontSize={{
              base: "6px",
              sm: "8px",
              md: "10px",
              lg: "13px",
              xl: "13px",
              "2xl": "15px",
            }}
            _hover={{ color: "500", cursor: "pointer" }}
            as={"b"}
          >
            COVID 19
          </Text>
          <Text
            fontSize={{
              base: "6px",
              sm: "8px",
              md: "10px",
              lg: "13px",
              xl: "13px",
              "2xl": "15px",
            }}
            _hover={{ color: "500", cursor: "pointer" }}
            as={"b"}
          >
            AYURVEDA
          </Text>
          <Text
            fontSize={{
              base: "6px",
              sm: "8px",
              md: "10px",
              lg: "13px",
              xl: "13px",
              "2xl": "15px",
            }}
            _hover={{ color: "500", cursor: "pointer" }}
            as={"b"}
          >
            CARE PLAN
          </Text>
        </Hide>
        <Show breakpoint="(max-width: 986px)">
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<FaUser />}>Profile</MenuItem>
              <MenuItem icon={<TbDiscount2 />}>Offers</MenuItem>
              <MenuItem icon={<AiOutlineShoppingCart />}>Cart</MenuItem>
              <MenuItem icon={<TbHelp />}>Need help?</MenuItem>
              {/* medines */}
              <Show breakpoint="(max-width: 397px)">
                <MenuItem icon={<CiMedicalCross />}>MEDICINES</MenuItem>
                <MenuItem icon={<ImLab />}>LAB TESTS</MenuItem>
                <MenuItem icon={<FcConferenceCall />}>CONSULT DOCTORS</MenuItem>
                <MenuItem icon={<CiMedicalMask />}>COVID 19</MenuItem>
                <MenuItem icon={<CiMedicalCase />}>AYURVEDA</MenuItem>
                <MenuItem icon={<GiMeditation />}>CARE PLAN</MenuItem>
              </Show>
            </MenuList>
          </Menu>
        </Show>
      </Flex>

      <Flex
        mr={"20px"}
        w={"25%"}
        justifyContent={"space-evenly"}
        alignItems={"center"} // Add this line to vertically center the content
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
      >
        {/* <IoPersonOutline size={"30"} /> */}
        {isAuth ? (
          <>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaUser size={"30"} />}
                variant={"unstyled"}
              />
              <MenuList zIndex={3}>
                <MenuItem as={"b"} color={"500"}>
                  Welcome {userName}
                </MenuItem>

                <Link href="/profile"> View Profile</Link>

                <MenuItem>My orders</MenuItem>
                <MenuItem>
                  Previously Ordered Items{" "}
                  <Badge ml={"5"} colorScheme="green">
                    New
                  </Badge>
                </MenuItem>
                <MenuItem>
                  Rate Your recent Purchases{" "}
                  <Badge ml={"5"} colorScheme="green">
                    New
                  </Badge>
                </MenuItem>
                <MenuItem>
                  Previously Ordered Items{" "}
                  <Badge ml={"5"} colorScheme="green">
                    New
                  </Badge>
                </MenuItem>
                <MenuItem>My Lab tests</MenuItem>
                <MenuItem>My Consultations</MenuItem>
                <MenuItem>My Health records</MenuItem>
                <MenuItem>Manage Payments </MenuItem>
                {admin && (
                  <MenuItem onClick={() => router.push("/admin")}>
                    admins here
                  </MenuItem>
                )}
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </MenuList>
            </Menu>
            <>Offers</>
            <Flex>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<AiOutlineShoppingCart size={"30"} />}
                  variant={"unstyled"}
                />
                {cartData?.length >= 1 && (
                  <MenuList zIndex={5}>
                    <Flex justifyContent={"space-around"} w={"100%"}>
                      <Text as={"b"}>Order Summary</Text>
                      <Text>{cartData?.length} Items</Text>
                    </Flex>
                    <MenuDivider />
                    <Flex justifyContent={"space-around"} w={"100%"}>
                      <Text fontSize={13}>
                        {cartData?.length >= 1
                          ? cartData[cartData?.length - 1].title.substr(0, 13)
                          : null}
                      </Text>
                      <Text fontSize={13}>Qty:1</Text>
                    </Flex>
                    {cartData?.length > 1 && (
                      <Flex justifyContent={"space-around"} w={"100%"}>
                        <Text fontSize={13}>
                          {cartData.length >= 2
                            ? cartData[cartData.length - 2].title.substr(0, 13)
                            : null}
                        </Text>
                        <Text fontSize={13}>
                          Qty:{cartData[cartData.length - 2].qty}
                        </Text>
                      </Flex>
                    )}
                    <MenuItem>
                      <Text
                        m={"auto"}
                        border={"1p solid red"}
                        color={"500"}
                        as={"b"}
                        onClick={() => {
                          router.push("/cart");
                        }}
                      >
                        Proceed to cart
                      </Text>
                    </MenuItem>
                  </MenuList>
                )}
              </Menu>
              <Text
                color={"white"}
                bgColor={"500"}
                borderRadius={"3px"}
                ml={"-15px"}
                mt={"-4px"}
                h={"23px"}
                w={"20px"}
                textAlign={"center"}
                zIndex={2}
              >
                {cartData?.length}
              </Text>
            </Flex>
          </>
        ) : (
          <>
            <SignUpModal text={"Sign-Up"} />
            <SignInModal />
          </>
        )}

        <>Need help?</>
      </Flex>
    </Flex>
  );
};

export default NavTopSection;
