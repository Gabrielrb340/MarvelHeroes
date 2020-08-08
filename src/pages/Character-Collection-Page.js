import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { getKey } from "../global/Utils";
import {useHistory} from 'react-router-dom'
const axios = require("axios");

export default function CharacterCollectionPage() {
  let shouldFetch = true;
  let history= useHistory();
  const [data, setData] = useState({ results: [] });
  useEffect(() => {
    console.log("came first use efect");
    axios
      .get(
        "https://gateway.marvel.com/v1/public/characters"+getKey()
      )
      .then(function (response) {
        shouldFetch = false;
        setData(response.data.data);
        console.log(response);
      })
      .catch(function (error) {
      })
      .then(function () {
      });
  }, [shouldFetch]);
  return (
    console.log("fet", data.results),
    (
      <Grid container spacing={3} style={{ overflow: "auto" }}>
        {data.results.map((data) => (
          <Grid item xs={3} sm={3} key={data.id}>
            <Card>
              <CardMedia
                component="img"
                style={{ height: "auto" }}
                image={data.thumbnail.path + "/portrait_fantastic.jpg"}
                src={data.thumbnail.path + "/portrait_fantastic.jpg"}
                title={data.name}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{history.push('/personagem/'+data.id)}}>
                  Detalhes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
    )
  );
}
