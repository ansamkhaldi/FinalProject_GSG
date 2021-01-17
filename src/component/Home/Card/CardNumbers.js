import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import useStyles from "./Style";
import CardNumbers from "./CardNumbersData";
import Card from "./Card";

export default function CardNumber(props) {
  const classes = useStyles();
  return (
    <div fullWidth="100%" className={classes.cardGrid}>
      <Container maxWidth="xg" className={classes.List}>
        <Grid container justify="space-evenly" spacing={4}>
          <Card paddingBottom={`1%`}>
            <h1>Working For Your Better Health</h1>
            <span>Take care of your health on time</span>
            <Button>All Services</Button>
          </Card>
          {CardNumbers.map((data, index) => {
            console.log(data.id);
            return (
              <Card border={`1px solid black`} paddingBottom={`2%`}>
                <h3>{data.title}</h3>
                <span>{data.id}</span>
                <p>{data.text}</p>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
