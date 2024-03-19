import { Box, Typography } from "@mui/material";
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const StackedBar = () => {
  let legend = [
    {
      title1: "Oil & Gas",
      percentage1: "32.19%",
      color1: "#75D6FF",
      title2: "Private Bank",
      percentage2: "26.04%",
      color2: "#AA75FF",
    },
    {
      title1: "Pharmaceuticals",
      percentage1: "26.40%",
      color1: "#75FFFF",
      title2: "Construction",
      percentage2: "12.03%",
      color2: "#FF7BF2",
    },
    {
      title1: "Power Generation",
      percentage1: "26.40%",
      color1: "#FFC46A",
      title2: "Other",
      percentage2: "12.03%",
      color2: "#FF8E5D",
    },
  ];

  return (
    <Box>
      <Box>
        <BarChart
          layout="horizontal"
          leftAxis={{ disableLine: true }}
          bottomAxis={{ disableLine: true }}
          margin={{ left: 1, right: 1, top: 1, bottom: 1 }}
          disableLine
          series={[
            { data: [42], stack: "A", color: "#75D6FF" },
            { data: [26], stack: "A", color: "#AA75FF" },
            { data: [56], stack: "B", color: "#75FFFF" },
            { data: [12], stack: "B", color: "#FFC46A" },
            { data: [38], stack: "C", color: "#FF7BF2" },
            { data: [15], stack: "C", color: "#75FFBD" },
            { data: [15], stack: "C", color: "#FF8E5D" },
          ]}
          height={330}
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

export default StackedBar;
