import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./Style";

export default function Card(props) {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      ClassName={classes.list}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        border: `${props.border}`,
        marginBottom: `${props.paddingBottom}`,
        maxWidth: "28%",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        padding: " 10px 23px",
        height: "250",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.children}
    </Grid>
  );
}
