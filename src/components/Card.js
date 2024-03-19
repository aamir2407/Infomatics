import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <Box
      className={styles.cardMainBox}
      // style={{
      //   // width: "392px",
      //   // border: "1px solid red",
      //   padding: "20px",
      //   backgroundColor: "white",
      //   // width: "25%",
      // }}
    >
      <Box style={{ width: "100%", height: "100%" }}>
        {/* title description */}
        <Box style={{ width: "100%" }}>
          {/* title */}
          <Box>
            <Typography style={{ fontSize: "30px" }}>{props.title}</Typography>
          </Box>
          {/* decription */}
          <Box style={{ marginTop: "15px" }}>
            <Typography style={{ fontSize: "18px" }}>
              {props.description}
            </Typography>
          </Box>
        </Box>

        {/* main content box */}
        <Box
          style={{
            width: "100%",
            // border: "1px solid",
            marginTop: "10px",
            // backgroundColor: "#D9D9D9",
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
