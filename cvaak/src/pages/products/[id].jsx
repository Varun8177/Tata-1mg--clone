import React, { useState } from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  Badge,
  useToast,
  RadioGroup,
  Radio,
  VStack,
  HStack,
  Select,
  Grid,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Head from "next/head";
import ProductCard from "@/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
// import SignUpModal from "@/components/authCom/SignUp/SignUpModal";
import MainNavbar from "@/components/navbar/MainNavbar/MainNavbar";
import Footer from "@/components/footer";
import { BsGraphUpArrow } from "react-icons/bs";
// import { AddCartItem } from "@/redux/admin/admin.types";

const SingleProductPage = ({ data }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const Dummydata = [
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/0fa72f2c-072d-4c6a-bc52-446edab403a4/tata-1mg-salmon-omega-3-fish-oil-capsule.jpeg",
      title: "Tata 1mg Salmon Omega 3 Fish Oil Capsule",
      packsize: "bottle of 60 capsules",
      rating: "4.4",
      CardRatingDetail: "1506 ratings",
      "strike-price": "995",
      "discount-percent": "47% off",
      price: 524,
      id: 1,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gc3u9gfc331wtsipnljl/tata-1mg-calcium-vitamin-d3-zinc-magnesium-and-alfalfa-tablet-joint-support-bones-health-immunity-energy-support.jpg",
      title:
        "Tata 1mg Calcium + Vitamin D3, Zinc, Magnesium and Alfalfa Tablet, Joint Support, Bones Health, Immunity & Energy Support",
      packsize: "bottle of 60 tablets",
      rating: "4.3",
      CardRatingDetail: "2418 ratings",
      "strike-price": "595",
      "discount-percent": "53% off",
      price: 277,
      id: 2,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gggpxmbrgyv0uqhzwyy8/tata-1mg-lumbar-sacral-belt-for-lower-back-support-universal.jpg",
      title: "Tata 1mg Lumbar Sacral Belt for Lower Back Support Universal",
      packsize: "box of 1 Unit",
      rating: "4.2",
      CardRatingDetail: "94 ratings",
      "strike-price": "800",
      "discount-percent": "43% off",
      price: 451,
      id: 3,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/gmkrpf1imjj9djwvq4gq/tata-1mg-multivitamin-supreme-zinc-calcium-and-vitamin-d-capsule-for-immunity-energy-overall-health.jpg",
      title:
        "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Capsule for Immunity, Energy, Overall Health",
      packsize: "bottle of 60 capsules",
      rating: "4.2",
      CardRatingDetail: "1243 ratings",
      "strike-price": "995",
      "discount-percent": "57% off",
      price: 422,
      id: 4,
    },
    {
      maxQty: 7,
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/59d4bf61-6252-419d-80f7-340459744690/i-know-ovulation-strip-kit.jpeg",
      title: "i-Know Ovulation Strip Kit",
      packsize: "packet of 5 Test Kits",
      rating: "3.7",
      CardRatingDetail: "339 ratings",
      "strike-price": "549",
      "discount-percent": "14% off",
      price: 472,
      id: 5,
    },
  ];
  // const { isAuth, userName } = useSelector((state) => state.authReducer);
  const [isAuth, setIsAuth] = useState(true);
  return (
    <>
      <Head>
        <title>Health Prime</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <MainNavbar />
        <Stack
          // border={"1px solid black"}
          maxW="90%"
          direction={{ lg: "row", md: "column", base: "column" }}
          m={{ lg: "40px auto", md: "30px auto", base: "20px auto" }}
        >
          <Flex
            // border={"1px solid red"}
            w={{ lg: "65%", md: "100%", base: "100%" }}
            // m="auto"
            direction={{ lg: "row", md: "row", base: "column" }}
          >
            <Box w={{ lg: "50%", md: "100%", base: "100%" }}>
              <Image
                m="auto"
                src={data.src}
                height={{ lg: "300px", md: "200px", base: "150px" }}
                alt=""
                objectFit={"contain"}
              />
            </Box>
            <Box w={{ lg: "50%", md: "100%", base: "100%" }} p={""}>
              <Text
                fontSize={{ lg: "24px", md: "18px", base: "16px" }}
                mb={"10px"}
                fontWeight={700}
                lineHeight="35px"
              >
                {data.title}
              </Text>
              <Text
                fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                mb={"10px"}
                color="#ff6f61"
                fontWeight={600}
              >
                Tata 1mg Healthcare Solutions Private Limited
              </Text>
              <Flex gap={"20px"}>
                <Button
                  bg="#1aab2a"
                  size={"xs"}
                  color={"#fff"}
                  fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                  mb={"10px"}
                  fontWeight={600}
                >
                  {data.rating} <AiFillStar />
                </Button>
                <Text
                  fontSize={{ lg: "13px", md: "12px", base: "10px" }}
                  mb={"10px"}
                  color="#ff6f61"
                  fontWeight={600}
                >
                  {data.CardRatingDetail} ratings
                </Text>
              </Flex>
              <Text color="grey" fontSize={"18px"} mb={"10px"} fontWeight={600}>
                {data.packsize}
              </Text>
              <Text
                fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                lineHeight="20px"
                fontWeight={"400"}
                textAlign={"justify"}
                pb="15px"
              >
                Product highlights <br />• Lorem ipsum dolor sit amet
                consectetur adipisicing elit. <br />• Exercitationem at nam
                tempora voluptatem error hic vitae. <br />
                • excepturi iure nulla ducimus in. <br />• Atque minima
                accusantium quibusdam.
              </Text>
            </Box>
          </Flex>
          <Grid
            bgColor={"white"}
            w="409px"
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              lg: "repeat(1,1fr)",
            }}
            gap="10"
          >
            <VStack
              bgColor={"white"}
              w={{
                base: "250px",
                md: "250px",
                lg: "409px",
              }}
              h={"277px"}
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              borderRadius={"10px"}
            >
              <Flex
                w={{
                  md: "250px",
                  lg: "409px",
                }}
                h="37px"
                bgColor={"green.200"}
                borderTopRadius="10px"
                p={2}
              >
                <Box ml={"20px"}>
                  <BsGraphUpArrow size={20} />
                </Box>
                <Text ml={"20px"} fontSize={12}>
                  26 people bought this recently
                </Text>
              </Flex>
              <Box w={"100%"} pl="5" pr="5">
                <RadioGroup>
                  <Stack direction="column">
                    <Radio value="1">
                      <Flex alignItems={"center"}>
                        <Text fontSize={"25"} mr="20px">
                          ₹1157
                        </Text>
                        <Text fontSize={"15"}>₹119 93% off</Text>
                      </Flex>
                    </Radio>
                    <Radio value="2">
                      <Flex alignItems={"center"}>
                        <Text fontSize={"25"} mr="20px">
                          ₹1157
                        </Text>
                        <Text fontSize={"15"}>
                          + free shipping and 3% Extra
                        </Text>
                      </Flex>
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Text p={"2"}>Inclusive of all taxes</Text>
                <Flex mb={"20px"}>
                  <Select placeholder="1 Box" size="xs" w={"100px"} />
                  <Text ml={"20px"}>of 1 Unit</Text>
                </Flex>
                <Button
                  w={"100%"}
                  size={"md"}
                  borderRadius="5px"
                  bg={"#ff6f61"}
                  _hover={{
                    bg: "#fd7c70",
                  }}
                  color="#fff"
                >
                  Add To Cart
                </Button>
              </Box>
            </VStack>
            <VStack
              p={5}
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              borderRadius={"10px"}
              mt="20px"
              w={{
                base: "250px",
                md: "250px",
                lg: "409px",
              }}
              mb={"20px"}
            >
              <Flex>
                <Text fontSize={15} as="b" mr={"10px"}>
                  Earliest delivery by
                </Text>
                <Text as="b" color={"green"}>
                  10pm, Tomorrow
                </Text>
              </Flex>
              <Text>Delivering to: 110020, New Delhi</Text>
            </VStack>
            <Image
              src="https://onemg.gumlet.io/b7cb336e-f8ca-4700-becd-7450a5d538b6_1680157560.jpg?w=410&h=94&format=auto"
              alt="single img"
              w={{
                base: "250px",
                md: "250px",
                lg: "409px",
              }}
            />
            <VStack
              mt={"20px"}
              border="1px dotted grey"
              w={{
                base: "250px",
                md: "250px",
                lg: "409px",
              }}
            >
              <Flex p={2} alignItems="center">
                <Image
                  src="https://onemg.gumlet.io/vibatg4xwiuep6bhonzs.svg"
                  mr={"20px"}
                  w="20px"
                  h={"20px"}
                />
                <Text fontSize={12}>
                  <Text as="b">Paytm Wallet:</Text>
                  Pay with Paytm Wallet on Tata 1mg for ₹799 or more and get up
                  to ₹400 cashback with minimum cashback of ₹20. Offer ends 31st
                  March 2023.
                </Text>
              </Flex>
            </VStack>
          </Grid>
        </Stack>
        <Box bgColor={"#f8f8f8"} w={"100%"}>
          <Stack
            // border={"1px solid black"}
            maxW="90%"
            direction={{ xl: "row", lg: "column", base: "column" }}
            m={{ lg: "40px auto", md: "30px auto", base: "20px auto" }}
            bgColor={"#f8f8f8"}
          >
            <Flex
              w={{ lg: "95%", md: "100%", base: "100%" }}
              direction={{ lg: "row", md: "column", base: "column" }}
              pl="10"
              pt={"10"}
              pb={"10"}
              justifyContent={"space-between"}
            >
              <VStack
                textAlign={"left"}
                bgColor={"white"}
                w={{
                  base: "100%",
                  md: "100%",
                  lg: "65%",
                }}
                p={5}
              >
                <Text alignSelf={"flex-start"} fontSize={"20"} mb={"10px"}>
                  Information about {data.title}
                </Text>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  {data.title}
                </Text>
                <Text alignSelf={"flex-start"} fontSize={"14"} mb={"10px"}>
                  {data.description}
                </Text>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  Uses:
                </Text>
                <Text alignSelf={"flex-start"} fontSize={"14"} mb={"10px"}>
                  A glucometer is used to measure blood glucose levels.
                </Text>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  Product Specifications and Features:
                </Text>
                <UnorderedList
                  spacing={5}
                  alignSelf={"flex-start"}
                  fontSize={"14"}
                  mb={"10px"}
                >
                  <ListItem ml={"15px"}>
                    Second-chance® sampling: 60 sec.
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Provides highly accurate results and is easy to use
                  </ListItem>
                  <ListItem ml={"15px"}>
                    SmartLIGHT® target range changes the colour according to the
                    blood glucose level for easier understanding of blood
                    glucose levels
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Connects to the CONTOUR®DIABETES app for easy storage of
                    readings
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Second-chance® allows to reply more blood to the same test
                    stript to help minimise the strip wastage
                  </ListItem>
                </UnorderedList>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  Directions for Use:
                </Text>
                <UnorderedList
                  alignSelf={"flex-start"}
                  fontSize={"14"}
                  mb={"10px"}
                  spacing={5}
                >
                  <ListItem ml={"15px"}>
                    Insert the CONTOUR®PLUS test strip, and the meter will
                    switch on
                  </ListItem>
                  <ListItem ml={"15px"}>
                    Let the blood drop be sipped into the test strip
                  </ListItem>
                  <ListItem ml={"15px"}>
                    View the test result together with the smartLIGHT® colour
                    indicator
                  </ListItem>
                </UnorderedList>
                <Text
                  alignSelf={"flex-start"}
                  fontSize={"16"}
                  as="b"
                  mb={"10px"}
                >
                  How often should you test your blood glucose levels?
                </Text>
                <Text alignSelf={"flex-start"} fontSize={"14"} mb={"10px"}>
                  In the case of type 1 diabetes, check the blood glucose levels
                  several times a day, such as before and after meals and before
                  and after exercise or as advised by the doctor. Whereas, in
                  the case of type 2 diabetes, monitoring the sugar levels might
                  be based on the severity of the condition, which can be
                  several times a day, once a day, or thrice a week. Hence, talk
                  to the doctor about how often blood glucose levels should be
                  tested.
                </Text>
              </VStack>
              <Grid
                bgColor={"#f8f8f8"}
                w="409px"
                templateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(2,1fr)",
                  md: "repeat(2,1fr)",
                  lg: "repeat(1,1fr)",
                }}
                margin="auto"
                gap="10"
                ml={"10px"}
                mt={{
                  base: "20px",
                  md: "20px",
                  lg: "0",
                }}
              >
                <VStack
                  w={{
                    base: "250px",
                    md: "250px",
                    lg: "409px",
                  }}
                  bgColor="white"
                  p={5}
                >
                  <Image
                    src="https://onemg.gumlet.io/Doctor_xqon4h.png"
                    m={"auto"}
                    w="100px"
                    h={"100px"}
                  />
                  <Button variant={"outline"} bgColor="500">
                    Consult Doctors Online
                  </Button>
                </VStack>
                <VStack
                  w={{
                    base: "250px",
                    md: "250px",
                    lg: "409px",
                  }}
                  bgColor="white"
                  pl={2}
                  pt={2}
                  pr={2}
                >
                  <Flex>
                    <VStack>
                      <Text alignSelf={"flex-start"}>Stressful life?</Text>
                      <Text alignSelf={"flex-start"}>
                        Stay on top of your Health with our
                      </Text>
                      <Text alignSelf={"flex-start"} as={"b"} fontSize="22px">
                        Preventive Health Packages
                      </Text>
                    </VStack>
                    <Image
                      w={"100px"}
                      h={"100px"}
                      src="https://onemg.gumlet.io/Preventive_Health_Package_yaejrz.png?format=auto"
                    />
                  </Flex>
                  <Button
                    variant={"outline"}
                    colorScheme={"500"}
                    alignSelf={"flex-end"}
                  >
                    Book a Lab Test Online
                  </Button>
                </VStack>
                <VStack
                  mt={"20px"}
                  w={{
                    base: "250px",
                    md: "250px",
                    lg: "409px",
                  }}
                  bgColor="white"
                  p={5}
                >
                  <Text alignSelf={"flex-start"} as="b">
                    Content Details
                  </Text>
                  <Text alignSelf={"flex-start"} fontSize="13">
                    Last updated
                  </Text>
                  <Text alignSelf={"flex-start"} fontSize="13">
                    27 Mar 2023 | 03:03 PM (IST)
                  </Text>
                  <Divider />
                  <Flex>
                    <Image
                      w={"80px"}
                      src="https://onemg.gumlet.io/hpmev62q0ukad0pyv31g.png"
                    />
                    <VStack>
                      <Text alignSelf={"flex-start"} fontSize="13">
                        We provide you with authentic, trustworthy and revelant
                        information
                      </Text>
                      <Text
                        alignSelf={"flex-start"}
                        as="b"
                        fontSize="13"
                        color={"500"}
                      >
                        Want to know more
                      </Text>
                    </VStack>
                  </Flex>
                  <Divider />
                  <Flex justifyContent={"space-between"}>
                    <Image
                      w={"30px"}
                      src="https://onemg.gumlet.io/cross_with_tag_1_vsxphe.svg"
                    />
                    <HStack>
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Have issue with the content?
                      </Text>
                      <Text
                        alignSelf={"flex-start"}
                        as="b"
                        fontSize="13"
                        color={"500"}
                      >
                        Report Problem
                      </Text>
                    </HStack>
                  </Flex>
                </VStack>
                <VStack
                  mt={"20px"}
                  w={{
                    base: "250px",
                    md: "250px",
                    lg: "409px",
                  }}
                  bgColor="white"
                  p={5}
                >
                  <Flex justifyContent={"space-between"} w={"80%"}>
                    <VStack>
                      <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/star.png" />
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Authentic Products
                      </Text>
                    </VStack>
                    <VStack>
                      <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/group.png" />
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Great Savings
                      </Text>
                    </VStack>
                    <VStack>
                      <Image src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/delivery.png" />
                      <Text alignSelf={"flex-start"} fontSize="13">
                        Home Delivery
                      </Text>
                    </VStack>
                  </Flex>
                </VStack>
              </Grid>
            </Flex>
          </Stack>
        </Box>
        <Stack p={10}>
          <Text as={"b"} ml={"20px"}>
            Similar Products
          </Text>
          <Flex flexWrap={"wrap"}>
            {Dummydata?.map((item, i) => {
              // return <Link key={i + 1} href={`products/${item.id}`}>
              return <ProductCard key={i + 1} {...item} />;
              // </Link>
            })}
          </Flex>
        </Stack>
        <Footer />
      </>
    </>
  );
};

export default SingleProductPage;

export async function getStaticPaths() {
  const res = await fetch(`https://black-skirt.cyclic.app/products/`);
  let data = await res.json();

  return {
    paths: data.map((item) => ({ params: { id: item._id } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  let res = await fetch(`https://black-skirt.cyclic.app/products/${id}`);
  let data = await res.json();
  return { props: { data } };
}