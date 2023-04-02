import Sidebar from "@/components/admin/Sideview";
import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Boxes from "@/components/admin/Boxes";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { GetRequest } from "@/redux/admin/admin.action";
import {
  GetAdminDataRequest,
  GetOrdersDataRequest,
  GetUserDataRequest,
} from "@/redux/admin/admin.action";
// import CartNavbar from "@/components/navbar/cartNavbar/CartNavbar";
// import { auth } from "config/firebase";
// import { userStatusUpdate } from "@/redux/auth/action";
import { getData } from "@/redux/products/products.action";

const Admin = () => {
  //  const prod = useSelector((store) => store.AdminReducer.products);
  const data = useSelector((store) => store.AdminReducer.userData);
  const prod = useSelector((store) => store.ProductReducer.products);
  const Orderdata = useSelector((store) => store.AdminReducer.orders);
  // const AdminName = useSelector((store) => store.AdminReducer.Admins);
  const dispatch = useDispatch();
  // const { isAuth, userName } = useSelector((state) => state.authReducer);
  // let total = Orderdata.reduce((acc, el) => acc + Number(el.orders), 0);

  const InitialData = () => {
    dispatch(GetRequest());
    dispatch(getData("", ""));
  };
  useEffect(() => {
    InitialData();
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     dispatch(userStatusUpdate(user.displayName));
    //   }
    // });
    dispatch(GetUserDataRequest());
    dispatch(GetOrdersDataRequest());
    // dispatch(GetAdminDataRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // let x = AdminName?.filter((item) => {
  //   return item.name === userName;
  // });

  const userData = {
    labels: data.map((data) => data.day),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((data) => data.userGain),
        backgroundColor: ["#f24c00", "#e7e7e7", "#b9a44c"],
      },
    ],
  };
  const OrdersData = {
    labels: Orderdata.map((data) => data.day),
    datasets: [
      {
        label: "Orders Placed",
        data: Orderdata.map((data) => data.orders),
        backgroundColor: ["#f24c00", "#e7e7e7", "#b9a44c"],
      },
    ],
  };
  {
    console.log(prod);
  }
  return (
    <>
      {/* <CartNavbar /> */}
      <Box
        bgColor={"#d8dff7"}
        h={{
          base: "130vh",
          lg: "90vh",
        }}
      >
        <Flex bgColor={"#d8dff7"} w={"99%"} m={"auto"}>
          <Box
            bgColor={"white"}
            h={"80vh"}
            borderRadius={"10px"}
            mt="30px"
            mr={{
              base: "0",
              md: "30px",
            }}
          >
            <Sidebar />
          </Box>
          <Box
            // border={"1px solid red"}
            w={"100%"}
            h={{
              base: "120vh",
              lg: "90vh",
            }}
            m={"auto"}
            mt="30px"
            bgColor={"white"}
            p={"6"}
          >
            <Text>Welcome Back, </Text>
            {/* <Heading as={"b"}>{x[0]?.name}</Heading> */}

            <Grid
              w={"90%"}
              mt={"30px"}
              color={"white"}
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
                "2xl": "repeat(3,1fr)",
              }}
              gap={"6"}
            >
              <Boxes
                color={"#577590"}
                value={prod?.length}
                text={"Total Products"}
                location={"/admin/productdetails"}
                src={
                  "https://user-images.githubusercontent.com/107903370/229277637-f24596f8-7f0d-4d2e-9347-b2d87656b6d0.jpg"
                }
              />
              <Boxes
                color={"#43aa8b"}
                value={"1 0"}
                text={"Users online"}
                src={
                  "https://user-images.githubusercontent.com/107903370/229278170-dc210e2b-2b17-452e-9788-c88fd2077187.jpg"
                }
              />
              <Boxes
                color={"#90be6d"}
                // value={String(total).split("").join(" ")}
                text={"orders"}
                src={
                  "https://icon2.cleanpng.com/20180614/aue/kisspng-computer-icons-purchase-order-purchasing-order-form-5b22a7babdcb73.7441057115289978187774.jpg"
                }
              />
            </Grid>
            <Grid
              w={"90%"}
              mt={"30px"}
              color={"white"}
              templateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(2,1fr)",
                xl: "repeat(2,1fr)",
                "2xl": "repeat(2,1fr)",
              }}
              gap={"6"}
            >
              <Box
                boxShadow={"lg"}
                bgColor={"white"}
                h={{
                  base: "80px",
                  sm: "150px",
                  md: "220px",
                  lg: "180px",
                  xl: "200px",
                  "2xl": "300px",
                }}
                borderRadius={"10px"}
              >
                <Bar data={userData} />
              </Box>
              <Box
                mt={{
                  base: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0",
                  xl: "0",
                  "2xl": "0",
                }}
                bgColor={"white"}
                h={{
                  base: "200px",
                  md: "220px",
                  lg: "180px",
                  xl: "200px",
                  "2xl": "300px",
                }}
                borderRadius={"10px"}
              >
                {" "}
                <Pie data={OrdersData} />
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Admin;
