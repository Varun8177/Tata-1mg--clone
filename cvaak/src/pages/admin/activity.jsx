import Boxes from "@/components/adminPanel/Boxes";
import Sidebar from "@/components/adminPanel/Sidebar";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Activity = () => {
  const data = [
    { id: 1, year: 2016, userGain: 98098, userLoast: 823 },
    { id: 2, year: 2017, userGain: 72211, userLoast: 823 },
    { id: 3, year: 2018, userGain: 8232, userLoast: 823 },
    { id: 4, year: 2016, userGain: 21311, userLoast: 823 },
    { id: 5, year: 2016, userGain: 12312, userLoast: 823 },
    { id: 6, year: 2016, userGain: 72211, userLoast: 823 },
    { id: 7, year: 2016, userGain: 72278, userLoast: 823 },
    { id: 8, year: 2016, userGain: 88098, userLoast: 823 },
  ];

  const userData = {
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((data) => data.userGain),
        backgroundColor: ["#f24c00", "#e7e7e7", "#b9a44c"],
      },
    ],
  };
  return (
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
          // border={"1px solid red"}
          w={"100%"}
          h={"80vh"}
          m={"auto"}
          mt="30px"
          bgColor={"white"}
        >
          <Line data={userData} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Activity;
