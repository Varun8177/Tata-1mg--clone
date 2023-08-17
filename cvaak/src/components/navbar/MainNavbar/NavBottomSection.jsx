import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const NavBottomSection = () => {
  const router = useRouter();
  const [HealthResource, setHealthResource] = useState(false);
  const [Vitamins, setVitamins] = useState(false);
  const [Diabetes, setDiabetes] = useState(false);
  const [HealthCare, setHealthCare] = useState(false);
  const [PersonalCare, setPersonalCare] = useState(false);
  const [HealthConditions, setHealthConditions] = useState(false);
  const [Ayurveda, setAyurveda] = useState(false);
  const [Homeopathy, setHomeopathy] = useState(false);
  const [Featured, setFeatured] = useState(false);
  const [Covid, setCovid] = useState(false);

  return (
    <>
      <Show breakpoint="(min-width: 900px)">
        <Flex
          w={{
            lg: "100%",
            xl: "90%",
            "2xl": "90%",
          }}
          m={"auto"}
          justifyContent={"space-evenly"}
        >
          <Menu isOpen={HealthResource}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseLeave={() => {
                setHealthResource(false);
              }}
              onMouseOver={() => {
                setHealthResource(true);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              variant={"unstyled"}
              as={Button}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              rightIcon={<ChevronDownIcon />}
            >
              Health resource center
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseOver={() => {
                setHealthResource(true);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setHealthResource(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <MenuItem onClick={() => router.push("/products")}>
                All Disesase
              </MenuItem>
              <MenuItem onClick={() => router.push("/products")}>
                Medicines
              </MenuItem>
              <MenuItem onClick={() => router.push("/products")}>
                Medicines by therapeutic class
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu isOpen={Vitamins}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseLeave={() => {
                setVitamins(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(true);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Vitamins and nutrition
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(true);
              }}
              onMouseLeave={() => {
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(3,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Vitamins and Supplements">
                    <MenuItem onClick={() => router.push("/products")}>
                      Multivitamins
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Vitamins A-Z{" "}
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Mineral Supplements{" "}
                    </MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Nutritional drinks ">
                    <MenuItem onClick={() => router.push("/products")}>
                      Adult daily Nutrition
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Kids Nutrition
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Kids
                    </MenuItem>
                  </MenuGroup>
                </Box>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Protein Supplements">
                    <MenuItem onClick={() => router.push("/products")}>
                      Whey Protein
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Amino acids
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Mass Gainers
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Worout essentials
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/products")}>
                      Fat burners
                    </MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Omega & Fish Oil">
                    <MenuItem>Fish oil</MenuItem>
                    <MenuItem>COD liver oil</MenuItem>
                    <MenuItem>Fla oil</MenuItem>
                  </MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="Speciality Supplements">
                    <MenuItem>Plants based supplements</MenuItem>
                    <MenuItem>Beauty supplements </MenuItem>
                    <MenuItem>Pre pro biotics </MenuItem>
                    <MenuItem>Glucoasamine </MenuItem>
                    <MenuItem>Collagen </MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Weight Management">
                    <MenuItem>Weight Management Herbs</MenuItem>
                    <MenuItem>Meal replacements</MenuItem>
                    <MenuItem>Weight gain</MenuItem>
                  </MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={Diabetes}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseLeave={() => {
                setDiabetes(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(true);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Diabetes
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(true);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setDiabetes(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(2,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Diabetes Monitoring">
                    <MenuItem>Blood Glucose Monitors</MenuItem>
                    <MenuItem>Test-strips & Lancets </MenuItem>
                    <MenuItem>Syringes and Pens</MenuItem>
                    <MenuItem>Continuous Glucose Monitors</MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Sugar free ">
                    <MenuItem>Sugar level checks</MenuItem>
                    <MenuItem>Sugar free meds</MenuItem>
                  </MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="Diabetic Medicines">
                    <MenuItem>Vitamins, Minerals and Anitioxidnts</MenuItem>
                    <MenuItem>Homeopathy medicines</MenuItem>
                    <MenuItem>Sugar substitutes</MenuItem>
                    <MenuItem>Diabetic diet</MenuItem>
                    <MenuItem>Diabetic Nutritional Supplements</MenuItem>
                  </MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={HealthCare}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(true);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setHealthCare(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Healthcare devices
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseLeave={() => {
                setHealthCare(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(true);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(2,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Top brands in healthcare devices">
                    <MenuItem>Dr.Morphen Devices</MenuItem>
                    <MenuItem>Accu Check</MenuItem>
                    <MenuItem>One Touch</MenuItem>
                    <MenuItem>Amron</MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Thermometers ">
                    <MenuItem>IR Thermometer</MenuItem>
                  </MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="Supports and Braces">
                    <MenuItem>Neck & shoulder Support</MenuItem>
                    <MenuItem>Knee & Leg Support</MenuItem>
                    <MenuItem>Back & abdomen Support</MenuItem>
                    <MenuItem>Ankle & Foot Support</MenuItem>
                    <MenuItem>Cervical Pillows</MenuItem>
                  </MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={PersonalCare}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(true);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setPersonalCare(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              personal care
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseLeave={() => {
                setPersonalCare(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(true);
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(3,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Sexual Wellness">
                    <MenuItem>Condoms</MenuItem>
                    <MenuItem>Lubricants & Massage Gels</MenuItem>
                    <MenuItem>Mens Performance Enhancers</MenuItem>
                    <MenuItem>Sexual Health Supplements</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Skin Cares">
                    <MenuItem>Body Lotions</MenuItem>
                    <MenuItem>Mosquito Repellents</MenuItem>
                    <MenuItem>Lip Balm</MenuItem>
                    <MenuItem>Acne Care</MenuItem>
                    <MenuItem>Bath Essentials</MenuItem>
                    <MenuItem>Facewash</MenuItem>
                    <MenuItem>Sanitizers & Handwash</MenuItem>
                    <MenuItem>Sunsscreen</MenuItem>
                  </MenuGroup>
                </Box>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Baby Care">
                    <MenuItem>Baby & Infant Food</MenuItem>
                    <MenuItem>Baby Diapers,wipes & more </MenuItem>
                    <MenuItem>Nursing and feeding</MenuItem>
                    <MenuItem>Baby Bath Essentials</MenuItem>
                    <MenuItem>Baby Skin care </MenuItem>
                    <MenuItem>Baby Healthcare </MenuItem>
                    <MenuItem>Baby oral Healthcare</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Hair Care">
                    <MenuItem>Shampoo</MenuItem>
                    <MenuItem>Hair Conditioners</MenuItem>
                    <MenuItem>Hair Growth Supplements</MenuItem>
                    <MenuItem>Hair Oils</MenuItem>
                    <MenuItem>Hair Growth Products</MenuItem>
                  </MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="Elderly Care">
                    <MenuItem>Adult Diapers</MenuItem>
                    <MenuItem>Bone & joint Health </MenuItem>
                    <MenuItem>Living & Safety Aids</MenuItem>
                    <MenuItem>Orthopaedic Supports</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Women Care">
                    <MenuItem>Feminine Hygiene</MenuItem>
                    <MenuItem>Women Care Supplements</MenuItem>
                    <MenuItem>Mother Care</MenuItem>
                    <MenuItem>Menopause</MenuItem>
                    <MenuItem>Polycystic Ovary Syndrome</MenuItem>
                  </MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={HealthConditions}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(true);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setHealthConditions(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Health conditions
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseLeave={() => {
                setHealthConditions(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(true);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(2,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Stomach Care"></MenuGroup>
                  <MenuGroup title="Heart Care "></MenuGroup>
                  <MenuGroup title="Bone, Joint and Muscle Care "></MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Pain Relief">
                    <MenuItem>Heating Aids</MenuItem>
                    <MenuItem>Heating Omnigel Products</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Eye care">
                    <MenuItem>Eye Lubricants</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Ear care">
                    <MenuItem>Hearing Aid Devices</MenuItem>
                  </MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="First Aid"></MenuGroup>
                  <MenuGroup title="Liver Care"></MenuGroup>
                  <MenuGroup title="Cold & Cough"></MenuGroup>
                  <MenuGroup title="Fever"></MenuGroup>
                  <MenuGroup title="Mental Wellness"></MenuGroup>
                  <MenuGroup title="Kidney Care"></MenuGroup>
                  <MenuGroup title="Respiratory Care"></MenuGroup>
                  <MenuGroup title="Piles,Fissures,& Fistula Care"></MenuGroup>
                  <MenuGroup title="Smoking Cessation"></MenuGroup>
                  <MenuGroup title="Derma Care"></MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={Ayurveda}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(true);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setAyurveda(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Ayurveda products
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseLeave={() => {
                setAyurveda(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(true);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(3,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Ayurvada Top Brands">
                    <MenuItem>Dabur</MenuItem>
                    <MenuItem>Sri Sri Tattva</MenuItem>
                    <MenuItem>Kerala Ayurveda</MenuItem>
                    <MenuItem>Patanjali</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Chyanwanparash"></MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Popular categories">
                    <MenuItem>Herbal juice</MenuItem>
                    <MenuItem>Ayurvedic Immunity Boosters</MenuItem>
                    <MenuItem>Explore Popular Herbs</MenuItem>
                    <MenuItem>Herbal Supplements</MenuItem>
                  </MenuGroup>
                </Box>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Top Health Concerns">
                    <MenuItem>Ayurvedic Respiratory care</MenuItem>
                    <MenuItem>Cough, Cold & Fever</MenuItem>
                    <MenuItem>Sexual Wellness</MenuItem>
                    <MenuItem>Bone Joint muscle Care</MenuItem>
                    <MenuItem>Stomach Care</MenuItem>
                    <MenuItem>Diabetes Care</MenuItem>
                    <MenuItem>Liver Care</MenuItem>
                    <MenuItem>Mind Care</MenuItem>
                    <MenuItem>Cardiac Care</MenuItem>
                  </MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="Unani Medicines">
                    <MenuItem>Hamdard Unani</MenuItem>
                    <MenuItem>AMU Dawakhana</MenuItem>
                    <MenuItem>Rex Remedies</MenuItem>
                    <MenuItem>Dehlvi Remedies</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Ayurvedic Medicine"></MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={Homeopathy}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(true);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setHomeopathy(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Homeopathy
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseLeave={() => {
                setHomeopathy(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(true);
                setPersonalCare(false);
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(2,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Homeopathy Top Brands">
                    <MenuItem>SBL Homeopathy</MenuItem>
                    <MenuItem>Dr Reckeweg </MenuItem>
                    <MenuItem>Dr Willmar Schwabe India</MenuItem>
                    <MenuItem>Adel Pekana</MenuItem>
                    <MenuItem>BJAIN Homeopathy</MenuItem>
                    <MenuItem>Baksons</MenuItem>
                    <MenuItem>Allen</MenuItem>
                    <MenuItem>Wheezal</MenuItem>
                    <MenuItem>Dr Willmar Schwabe Germany</MenuItem>
                    <MenuItem>Haslab</MenuItem>
                    <MenuItem>Medisynth</MenuItem>
                    <MenuItem>Boiron</MenuItem>
                    <MenuItem>Bhandari</MenuItem>
                    <MenuItem>Dr Bakshi Bakson</MenuItem>
                    <MenuItem>Br Batra</MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Homeopathy Wellness Combos"></MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="Homeopathy Popular Categories">
                    <MenuItem>Homeopathic Care for Cold & Cough</MenuItem>
                    <MenuItem>Homeopathic Respiratory Care</MenuItem>
                    <MenuItem>Homeopathic Covid Essentials</MenuItem>
                    <MenuItem>Sexual Health</MenuItem>
                    <MenuItem>Hair Care Products</MenuItem>
                    <MenuItem>Skin Care Products</MenuItem>
                    <MenuItem>Children Health</MenuItem>
                    <MenuItem>Women Health</MenuItem>
                  </MenuGroup>
                  <MenuGroup title="Homeopathy Medicines">
                    <MenuItem>Homeopathic Drops</MenuItem>
                    <MenuItem>Dilutions</MenuItem>
                    <MenuItem>Mother Tinctures</MenuItem>
                    <MenuItem>Triturations</MenuItem>
                    <MenuItem>Bio Combinations</MenuItem>
                    <MenuItem>Millesimal LM Potencies</MenuItem>
                    <MenuItem>Biochemicals</MenuItem>
                    <MenuItem>Bach Flower Remedies</MenuItem>
                  </MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={Featured}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(true);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setFeatured(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Featured
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseLeave={() => {
                setFeatured(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(false);
                setDiabetes(false);
                setFeatured(true);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(2,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Winter Care">
                    <MenuItem>Body & Skin Care</MenuItem>
                    <MenuItem>Winter HAir & Scalp Care </MenuItem>
                    <MenuItem>Cough & Cold</MenuItem>
                    <MenuItem>Fever & Headache</MenuItem>
                    <MenuItem>Vaporizers & Nebulizers</MenuItem>
                    <MenuItem>Heating Aid</MenuItem>
                    <MenuItem>Winter Combos</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="TATA 1mg Health Products"></MenuGroup>
                  <MenuGroup title="Trending now"></MenuGroup>
                  <MenuGroup title="New Arrivals on TATA 1MG"></MenuGroup>
                  <MenuGroup title="Buy More, Save More"></MenuGroup>
                  <MenuGroup title="Minimum 33% Off"></MenuGroup>
                </Box>
                <Box>
                  <MenuGroup title="Popular Combo Deals"></MenuGroup>
                  <MenuGroup title="Deals of the Day"></MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Top Brands">
                    <MenuItem>Accu Check</MenuItem>
                    <MenuItem>Ensure</MenuItem>
                    <MenuItem>Revital</MenuItem>
                    <MenuItem>Optimum Nutrition</MenuItem>
                    <MenuItem>Dr. Morepen</MenuItem>
                    <MenuItem>Pediasure</MenuItem>
                    <MenuItem>Teddy</MenuItem>
                    <MenuItem>Scalpe</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Super Savings"></MenuGroup>
                  <MenuGroup title="Best Seller"></MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu isOpen={Covid}>
            <MenuButton
              _focus={{
                boxShadow: "none",
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(true);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              onMouseLeave={() => {
                setCovid(false);
              }}
              rightIcon={<ChevronDownIcon />}
              variant={"unstyled"}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
              as={Button}
            >
              Covid Essentials
            </MenuButton>
            <MenuList
              zIndex={10}
              onMouseLeave={() => {
                setCovid(false);
              }}
              onMouseOver={() => {
                setHealthResource(false);
                setAyurveda(false);
                setCovid(true);
                setDiabetes(false);
                setFeatured(false);
                setHealthCare(false);
                setHealthConditions(false);
                setHomeopathy(false);
                setPersonalCare(false);
                setVitamins(false);
              }}
              fontSize={{
                base: "8px",
                sm: "10px",
                md: "12px",
                lg: "13px",
                xl: "13px",
                "2xl": "13px",
              }}
            >
              <Grid templateColumns={"repeat(1,250px)"}>
                <Box borderRight={"1px solid #f4f5f7"}>
                  <MenuGroup title="Covid-19 Self test Kits"></MenuGroup>
                  <MenuGroup title="Oxygen Cans & Concentrators"></MenuGroup>
                  <MenuGroup title="Masks"></MenuGroup>
                  <MenuGroup title="Sanitizers & Handwash products"></MenuGroup>
                  <MenuGroup title="Thermometer"></MenuGroup>
                  <MenuGroup title="Chyawanprash"></MenuGroup>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
        </Flex>
      </Show>
      <TabMob />
    </>
  );
};

function TabMob() {
  return (
    <Show breakpoint="(max-width: 900px)">
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box textAlign="center" margin={"auto"} w={"fit-content"}>
                <BsChevronDoubleDown />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Grid templateColumns={"repeat(3,1fr)"}>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  as={Button}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                >
                  Health resource center
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Vitamins and nutrition
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Diabetes
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Healthcare devices
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  personal care
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Health conditions
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Ayurveda products
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Homeopathy
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Featured
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  _focus={{
                    boxShadow: "none",
                  }}
                  variant={"unstyled"}
                  fontSize={{
                    base: "8px",
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    "2xl": "13px",
                  }}
                  as={Button}
                >
                  Covid Essentials
                </MenuButton>
              </Menu>
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Show>
  );
}

export default NavBottomSection;
