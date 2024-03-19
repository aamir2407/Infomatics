import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useMemo } from "react";
import Card from "./components/Card";
import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import CustomPieChart from "./components/CustomPieChart";
import CustomBarChart from "./components/CustomBarChart";
import StackedBar from "./components/StackedBar";

function App() {
  return (
    <Box style={{}}>
      <Box
        style={{
          height: "60px",
          width: "100%",
          backgroundColor: "#d5bdaf",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>

      <Box
        style={{
          backgroundColor: "#e3d5ca",
          padding: "20px",
        }}
        className="App"
      >
        <Box className="cardMainFlex">
          <Card
            title={"Sub-Category"}
            description={
              "The assets are distributed between equity and cash & equivalents. "
            }
          >
            <CustomPieChart />
          </Card>
          <Card
            title={"Fund Distribution"}
            description={
              "A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
            }
          >
            <CustomBarChart />
          </Card>
          <Card
            title={"Top Sectors"}
            description={
              "The assets are distributed between equity and cash & equivalents. "
            }
          >
            <StackedBar />
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
