import React from "react";
import {
  Stack,
  Box,
  Divider,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Center,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Container,
} from "@chakra-ui/react";

// {{xl:"", lg:"", md:"", sm:"", base:""}}

// import Image from "next/image";
const Footer = () => {
  return (
    <Stack bg="#fff" m="auto" w="100%" mt="10">
      <Box
        m="auto"
        w="95%"
        p={{ xl: "10", lg: "10", md: "5", sm: "2", base: "2" }}
      >
        <Heading
          as="h2"
          size={{ xl: "lg", lg: "40px", md: "30px", sm: "20px", base: "20px" }}
          mb={"30px"}
        >
          Stay Healthy with CVAAK: Your Favourite Online Pharmacy and Healthcare
          Platform
        </Heading>
        <Text as="b" size="md" mb={"20px"}>
          We Bring Care to Health.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          CVAAK is {"India's"} leading digital healthcare platform. From doctor
          consultations on chat to online pharmacy and lab tests at home: we
          have it all covered for you. Having delivered over 25 million orders
          in 1000+ cities till date, we are on a mission to bring {"care"} to
          {"health"} to give you a flawless healthcare experience.
        </Text>

        <Text as="b" size="md" mt={"20px"}>
          CVAAK: Your Favourite Online Pharmacy!
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          CVAAK is {"India's "}leading online chemist with over 2 lakh medicines
          available at the best prices. We are your one-stop destination for
          other healthcare products as well, such as over the counter
          pharmaceuticals, healthcare devices and homeopathy and ayurveda
          medicines.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          In case you need assistance, just give us a call and we will help you
          complete your order.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          And there is more! At CVAAK, you can buy health products and medicines
          online at best discounts.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          Now, {"isn't"} that easy? Why go all the way to the medicine store and
          wait in line, when you have CVAAK Pharmacy at your service.
        </Text>
        <Text as="b" size="md" mb={"30px"}>
          The Feathers in Our Cap
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          At CVAAK, our goal is to make healthcare understandable, accessible
          and affordable in India. We set out on our journey in 2015, and have
          come a long way since then. Along the way, we have been conferred with
          prestigious titles like BML Munjal Award {"for 'Business"} Excellence
          through Learning and {"Development',"} Best Online Pharmacy in India
          Award and Top 50 venture in The Smart CEO-Startup50 India.
        </Text>
        <Text as="b" size="md" mb={"30px"}>
          The Services We Offer
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          CVAAK is {"India's"} leading digital healthcare platform, where you
          can buy medicines online with discount. Buy medicine online in Delhi,
          Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai,
          Ahmedabad, Lucknow and around a 1000 more cities.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          We also facilitate lab tests at home. You can avail over 2,000 tests
          and get tested by 120+ top and verified labs at the best prices. Need
          to consult a doctor? On our platform, you can talk to over 20 kinds of
          specialists in just a few clicks.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          Customer centricity is the core of our values. Our team of highly
          trained and experienced doctors, phlebotomists and pharmacists looks
          into each order to give you a fulfilling experience.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          We’ve made healthcare accessible to millions by giving them quality
          care at affordable prices. Customer centricity is the core of our
          values. Our team of highly trained and experienced doctors,
          phlebotomists and pharmacists looks into each order to give you a
          fulfilling experience.
        </Text>
        <Text
          mb={"10px"}
          fontSize={{
            xl: "16px",
            lg: "16px",
            md: "14px",
            sm: "12px",
            base: "12px",
          }}
          color="#666666"
        >
          Visit our online medical store now, and avail online medicine purchase
          at a discount. Stay Healthy!
        </Text>
      </Box>
      <Box p={10}>
        <Text align="center">INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
        <Flex justifyContent="space-evenly">
          <Box align="center">
            <Text as="b" fontSize="3xl">
              260m+
            </Text>
            <Text>Visitors</Text>
          </Box>
          <Box align="center">
            <Text as="b" fontSize="3xl">
              31m+
            </Text>
            <Text>Orders Delivered</Text>
          </Box>
          <Box align="center">
            <Text as="b" fontSize="3xl">
              1800+
            </Text>
            <Text>Cities</Text>
          </Box>
        </Flex>
        <Divider h="2px" />
      </Box>
      <Box p={5}>
        <Center gap="10px">
          <Text display={{ md: "none", sm: "none", base: "none" }}>
            Get the link to download App
          </Text>
          <Input
            placeholder="Enter Phone Number"
            variant="filled"
            w={{
              xl: "400px",
              lg: "400px",
              md: "300px",
              sm: "250px",
              base: "250px",
            }}
          />
          <Button
            color="white"
            bg="#ff6f61"
            _hover={{
              bg: "#fd7c70",
            }}
          >
            Send Link
          </Button>
        </Center>
      </Box>
      <Box p={10} bg="#fffcf8" w="100%" m="auto" mt="10">
        <Grid templateColumns="repeat(5, 1fr)" gap={6} ml="10" color={"gray"}>
          <GridItem
            p="5px"
            color={"gray"}
            display={{
              xl: "grid",
              lg: "grid",
              md: "grid",
              sm: "none",
              base: "none",
            }}
          >
            <Text
              fontSize="16px"
              fontWeight={"500"}
              color={"#042430"}
              lineHeight="40px"
            >
              Know Us
            </Text>
            <Box
              fontSize={"12px"}
              fontWeight="400"
              lineHeight={"22px"}
              color="#666666"
            >
              <Text> About Us</Text>
              <Text>Contact Us</Text>
              <Text>Press Coverage</Text>
              <Text>Careers</Text>
              <Text>Business Partnership</Text>
              <Text>Become a Health</Text>
              <Text>Partner</Text>
              <Text>Corporate</Text>
              <Text>Governance</Text>
            </Box>
          </GridItem>
          <GridItem
            p="5px"
            color={"gray"}
            display={{
              xl: "grid",
              lg: "grid",
              md: "grid",
              sm: "none",
              base: "none",
            }}
          >
            <Text
              fontSize="16px"
              fontWeight={"500"}
              color={"#042430"}
              lineHeight="40px"
            >
              Our Policies
            </Text>
            <Box
              fontSize={"12px"}
              fontWeight="400"
              lineHeight={"22px"}
              color="#666666"
            >
              <Text>Privacy Policy</Text>
              <Text>Terms and Conditions</Text>
              <Text>Editorial Policy</Text>
              <Text>Return Policy</Text>
              <Text>IP Policy</Text>
              <Text>Grievance Redressal Policy</Text>
              <Text>Fake Jobs and Fraud</Text>
              <Text>Disclaimer</Text>
            </Box>
          </GridItem>
          <GridItem
            display={{
              xl: "grid",
              lg: "grid",
              md: "grid",
              sm: "none",
              base: "none",
            }}
          >
            <Text
              fontSize="16px"
              fontWeight={"500"}
              color={"#042430"}
              lineHeight="40px"
            >
              Our Services
            </Text>
            <Box
              fontSize={"12px"}
              fontWeight="400"
              lineHeight={"22px"}
              color="#666666"
            >
              <Text>Order</Text>
              <Text>Order</Text>
              <Text>Book Lab test</Text>
              <Text>Consult a Doctor</Text>
              <Text>Ayurveda</Text>
              <Text>Articles</Text>
              <Text>Hindi Articles</Text>
              <Text>Care Plan</Text>
            </Box>
          </GridItem>

          <GridItem>
            <Text
              fontSize="16px"
              fontWeight={"500"}
              color={"#042430"}
              lineHeight="40px"
            >
              Connect
            </Text>
            <Box
              fontSize={"12px"}
              fontWeight="400"
              lineHeight={"22px"}
              color="#666666"
            >
              <Text>Social Links</Text>
              <Flex w="150px" gap="5px">
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
                  src="https://onemg.gumlet.io/tywtfwyzxb8ujnqmbuau.svg"
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
              <Text>Want daily dose of health?</Text>
              <Button
                color="white"
                bg="#ff6f61"
                _hover={{
                  bg: "#fd7c70",
                }}
              >
                Sign Up
              </Button>
            </Box>
          </GridItem>
          <GridItem>
            <Text
              fontSize="12px"
              as={"b"}
              color={"black"}
              display={{
                xl: "flex",
                lg: "flex",
                md: "flex",
                sm: "none",
                base: "none",
              }}
            >
              Download App
            </Text>
            <Box
              display={{
                xl: "grid",
                lg: "grid",
                md: "grid",
                sm: "none",
                base: "none",
              }}
            >
              <Image
                w="120px"
                m="20px 0"
                src="https://s3.amazonaws.com/img.mynetdiary.com/images/app-store-badge.svg"
                alt="apple store"
              />
              <Image
                w="120px"
                h=""
                src="https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg"
                alt="google play store"
              />
            </Box>
          </GridItem>
        </Grid>

        <Divider h="2px" />
        <Box w="90%" m="auto" mt="10" mb="10">
          <Grid
            templateColumns={{ xl: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={6}
          >
            <GridItem>
              <Flex>
                <Image
                  src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg"
                  alt="fb"
                  width="100"
                  height="100"
                />
                <Box>
                  <Text as="b" fontSize="xl">
                    Reliable
                  </Text>
                  <Text
                    fontSize={{
                      xl: "12px",
                      lg: "12px",
                      md: "10px",
                      sm: "10px",
                      base: "10px",
                    }}
                    fontWeight="400"
                    lineHeight={"22px"}
                    color="#666666"
                  >
                    All products displayed on CVAAK are procured from verified
                    and licensed pharmacies. All labs listed on the platform are
                    accredited
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex>
                <Image
                  src="https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg"
                  alt="fb"
                  width="100"
                  height="100"
                />
                <Box>
                  <Text as="b" fontSize="xl">
                    Secure
                  </Text>
                  <Text
                    fontSize={"12px"}
                    fontWeight="400"
                    lineHeight={"22px"}
                    color="#666666"
                  >
                    CVAAK uses Secure Sockets Layer (SSL) 128-bit encryption and
                    is Payment Card Industry Data Security Standard (PCI DSS)
                    compliant
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex>
                <Image
                  src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg"
                  alt="fb"
                  width="100"
                  height="100"
                />
                <Box>
                  <Text as="b" fontSize="xl">
                    Affordable
                  </Text>
                  <Text
                    fontSize={"12px"}
                    fontWeight="400"
                    lineHeight={"22px"}
                    color="#666666"
                  >
                    Find affordable medicine substitutes, save up to 50% on
                    health products, up to 80% off on lab tests and free doctor
                    consultations.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Divider h="2px" />
        <Box align="center">
          <Image
            src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png"
            alt="logo1"
            width={{
              xl: "150px",
              lg: "100px",
              md: "90px",
              sm: "75px",
              base: "75px",
            }}
            // height="100"
          />
          <Text
            as="b"
            fontSize={{
              xl: "32px",
              lg: "28px",
              md: "24px",
              sm: "20px",
              base: "20px",
            }}
          >
            {"India's"} only LegitScript and ISO/ IEC 27001 certified online
            healthcare platform
          </Text>
        </Box>

        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Know more about CVAAK
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* 1 */}
                <Text as="b">Access medical and health information</Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="400"
                  lineHeight={"22px"}
                  color="#666666"
                >
                  CVAAK provides you with medical information which is curated,
                  written and verified by experts, accurate and trustworthy. Our
                  experts create high-quality content about medicines, diseases,
                  lab investigations, Over-The-Counter (OTC) health products,
                  Ayurvedic herbs/ingredients, and alternative remedies.
                </Text>
                {/* 2 */}
                <Text as="b">Order medicines online</Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="400"
                  lineHeight={"22px"}
                  color="#666666"
                >
                  Get free medicine home delivery in over 1800 cities across
                  India. You can also order Ayurvedic, Homeopathic and other
                  Over-The-Counter (OTC) health products. Your safety is our top
                  priority. All products displayed on CVAAK are procured from
                  verified and licensed pharmacies.
                </Text>
                {/* 3 */}
                <Text as="b">Book lab tests</Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="400"
                  lineHeight={"22px"}
                  color="#666666"
                >
                  Book any lab tests and preventive health packages from
                  certified labs and get tested from the comfort of your home.
                  Enjoy free home sample collection, view reports online and
                  consult a doctor online for free.
                </Text>
                {/* 4 */}
                <Text as="b">Consult a doctor online</Text>
                <Text
                  fontSize={"12px"}
                  fontWeight="400"
                  lineHeight={"22px"}
                  color="#666666"
                >
                  Got a health query? Consult doctors online from the comfort of
                  your home for free. Chat privately with our registered medical
                  specialists to connect directly with verified doctors. Your
                  privacy is guaranteed.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box>
          <Text
            as="b"
            fontSize={"12px"}
            fontWeight="400"
            lineHeight={"22px"}
            color="#666666"
          >
            © 2023 CVAAK. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we{" "}
            {"don't"}
            process requests for Schedule X and other habit forming drugs.
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default Footer;
