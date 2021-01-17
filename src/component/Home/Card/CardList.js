import React from "react";
import { Button, Grid, Container } from "@material-ui/core";
import useStyles from "./Style";
import CardData from "./CartData";
import Card from "./Card";

export default function CardList(props) {
  const classes = useStyles();
  return (
    <div fullWidth="100%" className={classes.cardGrid}>
      <Container maxWidth="xg" className={classes.List}>
        <Grid container justify="space-evenly" spacing={4}>
          {CardData.map((data, index) => {
            return (
              <Card backgroundImage={data.img}>
                <p>{data.title}hhhhh</p>
                <h4>{data.type}</h4>
                <p>
                  <span>{data.price}</span>
                  <span>{data.firstPrice}</span>
                </p>
                <Button>dddddd</Button>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
