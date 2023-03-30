import { Box } from "@chakra-ui/react";
import React from "react";
// import ColorModeToggle from "../../darkMode";
import NavBottomSection from "./NavBottomSection";
import NavMiddleSection from "./NavMiddleSection";
import NavTopSection from "./NavTopSection";

const MainNavbar = () => {
  return (
    <Box>
      <Box borderBottomWidth={"1px"}>
        <NavTopSection />
      </Box>
      <Box borderBottomWidth={"1px"}>
        <NavMiddleSection />
      </Box>
      <Box borderBottomWidth={"1px"}>
        <NavBottomSection />
      </Box>
    </Box>
  );
};

{
  /* <ColorModeToggle /> */
}
export default MainNavbar;
