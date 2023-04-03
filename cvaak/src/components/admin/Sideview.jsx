import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Stack, Heading, Box, Text, Grid, Divider } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { FiActivity, FiSettings } from "react-icons/fi";
import { SiSketchfab } from "react-icons/si";
import Link from "next/link";

const MenuItem = ({ icon, text, to, isCollapsed }) => {
  return (
    <Link href={to}>
      <Grid
        templateColumns={isCollapsed ? "50px" : "50px auto"}
        alignItems="center"
        cursor="pointer"
        p={2}
        borderRadius="md"
        _hover={{ bgColor: "gray.200" }}
      >
        {isCollapsed ? (
          icon
        ) : (
          <>
            {icon} <Text ml={3}>{text}</Text>
          </>
        )}
      </Grid>
    </Link>
  );
};

const Sidebar = ({ isCollapsed }) => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [view, setview] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Box
          w={isCollapsed ? "50px" : "200px"}
          h="100vh"
          bg="white"
          boxShadow="md"
          py={5}
          px={3}
          position="relative"
        >
          <Stack spacing={3}>
            <Heading
              size="md"
              textAlign="center"
              display={isCollapsed ? "none" : "block"}
            >
              Dashboard
            </Heading>
            <Divider />
            <MenuItem
              icon={<AiFillHome />}
              text="Dashboard"
              to="/admin"
              isCollapsed={isCollapsed}
            />
            <Divider />
            <MenuItem
              icon={<BsClipboardData />}
              text="Products"
              to="/admin/productdetails"
              isCollapsed={isCollapsed}
            />
            <Divider />
            <MenuItem
              icon={<FiActivity />}
              text="Activity"
              to="/admin/activity"
              isCollapsed={isCollapsed}
            />
            <Divider />
            <MenuItem
              icon={<SiSketchfab />}
              text="Admins"
              to="/admin/admins"
              isCollapsed={isCollapsed}
            />
            <Divider />
            <MenuItem
              icon={<FiSettings />}
              text="Settings"
              to="/admin/settings"
              isCollapsed={isCollapsed}
            />
            <Divider />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
