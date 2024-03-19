import { Box, Typography } from "@mui/material";
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const CustomPieChart = () => {
  let legend = [
    {
      title1: "Flexi Cap Fund",
      percentage1: "32.19%",
      color1: "#75D6FF",
      title2: "ELSS",
      percentage2: "26.04%",
      color2: "#AA75FF",
    },
    {
      title1: "Small Cap Fund",
      percentage1: "26.40%",
      color1: "#75FFFF",
      title2: "Index Funds",
      percentage2: "12.03%",
      color2: "#FF7BF2",
    },
    {
      title1: "Sectoral Fund",
      percentage1: "26.40%",
      color1: "#FFC46A",
      title2: "Large & Mid Cap Fund",
      percentage2: "12.03%",
      color2: "#FF8E5D",
    },
  ];

  return (
    <Box>
      <Box>
        <PieChart
          margin={{ left: 3, right: 3, top: 0, bottom: 10 }}
          series={[
            {
              data: [
                {
                  id: 0,
                  value: 32,
                  color: "#75D6FF",
                },
                {
                  id: 1,
                  value: 26,
                  color: "#AA75FF",
                },
                {
                  id: 2,
                  value: 26,
                  color: "#75FFFF",
                },
                {
                  id: 3,
                  value: 12,
                  color: "#FF7BF2",
                },
                {
                  id: 4,
                  value: 26,
                  color: "#FFC46A",
                },
                {
                  id: 5,
                  value: 12,
                  color: "#FF8E5D",
                },
              ],
              highlightScope: { faded: "global", highlighted: "item" },
              faded: {
                innerRadius: 30,
                additionalRadius: -30,
                color: "gray",
              },

              //   cx: 190,
            },
          ]}
          height={300}
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

export default CustomPieChart;
