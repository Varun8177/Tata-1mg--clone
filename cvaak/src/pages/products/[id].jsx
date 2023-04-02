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
import { postCartData } from "@/redux/cart/cart.action";
// import { AddCartItem } from "@/redux/admin/admin.types";

const SingleProductPage = ({ data }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [addText, setAddText] = useState("Add To Cart");
  const Dummydata = [
    {
      _id: "6426fc0afcf829b54a307b02",
      title: "Himalaya Gentle Baby Soap 75gm (Buy 3 Get 1 Free)",
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/cropped/ubgtztgs4xp2xakp9muz/himalaya-gentle-baby-soap-75gm-buy-3-get-1-free.jpg",
      packsize: "box of 4 soaps",
      price: 144,
      "strike-price": "165",
      "discount-percent": "12%",
      maxQty: 7,
      rating: "4.5",
      CardRatingDetail: "432 ratings",
      description:
        "Himalaya Gentle Baby Soap is a clinically tested, hypoallergenic soap that can help moisturise and cleanse soft, sensitive skin. It is a pure, gentle and safe soap that is free of paraben, animal fats and synthetic colours. The soap can suit normal skin types and is ideal for daily use. It can help manage dry skin and remove impurities from the skin. It keeps the baby feeling fresh and rejuvenated.",
      category: "aryurvedic",
    },
    {
      _id: "6426fc0afcf829b54a307b03",
      title: "Mamaearth Tea Tree Face Wash",
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/cropped/ugjgxvpb3rijvtrhfxig/mamaearth-tea-tree-face-wash.jpg",
      packsize: "tube of 100 ml Face Wash",
      price: 228,
      "strike-price": "259",
      "discount-percent": "12%",
      maxQty: 7,
      rating: "4.2",
      CardRatingDetail: "769 ratings",
      description:
        "Mamaearth Face Wash Tea Tree helps to reduce and prevent the development of acne and pimples by controlling excess oil secretion.",
      category: "aryurvedic",
    },
    {
      _id: "6426fc0afcf829b54a307b04",
      title: "MuscleBlaze Fish Oil 1000mg Soft Gelatin Capsule",
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/uwimvlsrkb3z0esxy2qr/muscleblaze-fish-oil-1000mg-soft-gelatin-capsule.jpg",
      packsize: "bottle of 180 soft gelatin capsules",
      price: 999,
      "strike-price": "1429",
      "discount-percent": "30%",
      maxQty: 7,
      rating: "4.4",
      CardRatingDetail: "88 ratings",
      description:
        "MuscleBlaze Fish Oil 1000mg Soft Gelatin Capsule is now India's first and only certified Fish Oil for Purity and Accuracy by the reputed lab Labdoor, USA. It contains omega-3 fatty acids including 180mg Eicosapentaenoic acid (EPA) and 120mg Docosahexaenoic acid (DHA). They contain good fats and antioxidants that not only boost your immunity but also help in keeping fitness buffs, athletes, and bodybuilders fit and active.",
      category: "supplement",
    },
    {
      _id: "6426fc0afcf829b54a307b05",
      title: "MuscleBlaze MB Whey Protein Rich Milk Chocolate",
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/rnvl3l0jtnc5ys5dwvts/muscleblaze-mb-whey-protein-rich-milk-chocolate.jpg",
      packsize: "jar of 4.4 lb Powder",
      price: 5098,
      "strike-price": "6669",
      "discount-percent": "23%",
      maxQty: 7,
      rating: "4.2",
      CardRatingDetail: "453 ratings",
      description:
        "The ultimate MuscleBlaze 100% Whey Protein Supplement Powder with Digestive Enzyme, 4.4 lb 57 Servings (Rich Milk Chocolate) is a new benchmark of power-packed performance for all kinds of protein supplements in the market. All the best quality raw materials are directly imported from top-notch international sources maximizing your overall workout performance. It is widely recommended for muscle building enthusiasts, athletes, weight lifters and other active individuals.",
      category: "supplement",
    },
    {
      _id: "6426fc0afcf829b54a307b06",
      title: "Swadeshi Tulsi Drop",
      src: "https://onemg.gumlet.io/images/f_auto,w_150,h_150,c_fit,q_auto/fgw47znpfv2czxnnnxsi/swadeshi-tulsi-drop.jpg",
      packsize: "bottle of 15 ml Drop",
      price: 110,
      "strike-price": "2323",
      "discount-percent": "23%",
      maxQty: 7,
      rating: "4.2",
      CardRatingDetail: "173 ratings",
      description:
        "Swadeshi Tulsi Drops is a natural immunity booster to give you adequate protection in the flu season. Tulsi or the Holy basil is the most revered plant in India and it has been used in ancient India to treat many disorders in the body. It is primarily used to protect one from common flu, fever, malaria, diarrhoea, respiratory issues, asthma and is also used to maintain healthy lungs.",
      category: "aryurvedic",
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
          maxW="90%"
          direction={{ lg: "row", md: "column", base: "column" }}
          m={{ lg: "40px auto", md: "30px auto", base: "20px auto" }}
        >
          <Flex
            w={{ lg: "65%", md: "100%", base: "100%" }}
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
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  alignSelf: "flex-start",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                <li>
                  Contains a blend of vitamins and minerals to support overall
                  health and well-being
                </li>
                <li>
                  Formulated with antioxidants to help protect against oxidative
                  stress and free radical damage
                </li>
                <li>
                  Includes probiotics to support digestive health and immune
                  function
                </li>
                <li>
                  Non-GMO, gluten-free, and free from artificial colors,
                  flavors, and preservatives
                </li>
                <li>Third-party tested for purity and potency</li>
                <li>
                  Made in a GMP-certified facility to ensure quality and
                  consistency
                </li>
                <li>Easy-to-swallow capsules for convenient daily use</li>
                <li>100% satisfaction guarantee or your money back</li>
              </ul>
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
              h={"347px"}
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
                <RadioGroup defaultValue="1">
                  <Stack direction="column">
                    <Radio value="1" colorScheme="orange">
                      <Flex alignItems={"center"}>
                        <Text fontSize={"25"} mr="20px">
                          ₹{data.price}
                        </Text>
                        <Text fontSize={"15"} textDecor="line-through">
                          ₹{data["strike-price"]}
                        </Text>
                        <Text fontSize={"15"} ml={"10px"}>
                          {data["discount-percent"]} off
                        </Text>
                      </Flex>
                    </Radio>
                    <Radio value="2" colorScheme="orange">
                      <Flex alignItems={"center"}>
                        <Text fontSize={"25"} mr="20px">
                          ₹{data.price}
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
                  onClick={() => {
                    if (addText.length > 9) {
                      dispatch(
                        postCartData({
                          title: data.title,
                          src: data.src,
                          packsize: data.packsize,
                          price: data.price,
                          "strike-price": data["strike-price"],
                          "discount-percent": data["discount-percent"],
                          qty: 1,
                          rating: data.rating,
                          CardRatingDetail: data.CardRatingDetail,
                          description: data.description,
                          category: data.category,
                        })
                      ).then(() => {
                        setAddText("ADDED ✓");
                      });
                    }
                  }}
                >
                  {addText}
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
                  p={0}
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
                  p={0}
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
                  p={5}
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
              return <ProductCard key={item._id} {...item} />;
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
