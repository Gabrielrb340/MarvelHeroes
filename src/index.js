import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./pages/MainPage";
import * as serviceWorker from "./serviceWorker";
import { Box } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import HeaderMenu from "./components/HeaderMenu.Component";
import CharacterCollectionPage from "./pages/Character-Collection-Page";
import CharacterPage from './pages/Character-Page'
ReactDOM.render(
  <BrowserRouter>

    <Grid container  className="root">
      <Grid  item xs={12} >
        <HeaderMenu />
      </Grid>
      <Grid  item xs={12} >

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/personagem" component={CharacterCollectionPage} />
          <Route exact path="/personagem/:id" component={CharacterPage}/>
       

        </Switch>
      </Grid>

    </Grid>
    </BrowserRouter>

  ,
  document.getElementById("root")
);
serviceWorker.unregister();
