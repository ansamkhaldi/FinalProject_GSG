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
      className={classes.list}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        border: `${props.border}`,
        marginBottom: `${props.paddingBottom}`,
        padding: `${props.padding}`,
      }}
    >
      {props.children}
    </Grid>
  );
}
