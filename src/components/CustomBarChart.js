import { Box, Typography } from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const CustomBarChart = () => {
  let legend = [
    {
      title1: "Equity",
      percentage1: "32.19%",
      color1: "#75D6FF",
      title2: "Gold",
      percentage2: "26.04%",
      color2: "#AA75FF",
    },
    {
      title1: "Bonds",
      percentage1: "26.40%",
      color1: "#75FFFF",
      title2: "Govt. Securities",
      percentage2: "26.40%",
      color2: "#FFC46A",
    },
  ];

  return (
    <Box>
      <Box style={{}}>
        <BarChart
          layout="horizontal"
          leftAxis={{ disableLine: true }}
          bottomAxis={{ disableLine: true }}
          margin={{ left: 3, right: 3, top: 3, bottom: 3 }}
          disableLine
          series={[
            { data: [42], stack: "A", color: "#75D6FF" },
            { data: [26], stack: "A", color: "#AA75FF" },
            { data: [26], stack: "A", color: "#75FFFF" },
            { data: [26], stack: "A", color: "#FFC46A" },
            { data: [26], stack: "A", color: "#FF7BF2" },
            { data: [10], stack: "A", color: "#FF8E5D" },
          ]}
          height={30}
        />
      </Box>
      <Box style={{ marginTop: "30px" }}>
        {legend.map((item) => {
          return (
            <Box style={{ display: "flex", marginTop: "10px" }}>
              <Box style={{ width: "50%" }}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Box
                    style={{
                      width: "17px",
                      height: "17px",
                      backgroundColor: item.color1,
                    }}
                  ></Box>
                  <Typography style={{ marginLeft: "10px", fontSize: "14px" }}>
                    {item.title1} <strong>{item.percentage1}</strong>
                  </Typography>
                </Box>
              </Box>
              <Box style={{ width: "50%" }}>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <Box
                    style={{
                      width: "17px",
                      height: "17px",
                      backgroundColor: item.color2,
                    }}
                  ></Box>
                  <Typography style={{ marginLeft: "10px", fontSize: "14px" }}>
                    {item.title2} <strong>{item.percentage2}</strong>
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CustomBarChart;
