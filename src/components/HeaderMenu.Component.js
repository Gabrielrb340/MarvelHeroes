import React from "react";
import "./HeaderMenu.Component.css";
import { Button, MenuItem, Menu } from "@material-ui/core";
import { useHistory } from "react-router-dom";
export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-color">
      <HeaderMenuButton name='PERSONAGEM' pushPath='/Personagem' />
      <HeaderMenuButton name='QUADRINHOS' pushPath='/Personagem' />
      <HeaderMenuButton name='CRIADORES' pushPath='/Personagem' />
      <HeaderMenuButton name='EVENTOS' pushPath='/Personagem' />
      <HeaderMenuButton name='SERIES' pushPath='/Personagem' />
    </div>
  );
}
function HeaderMenuButton(props) {
  let history = useHistory();
  function handleClick() {
    history.push(props.pushPath);
  }

  return (
    <Button
      className="button-color"
      size="small"
      onClick={handleClick}
    >
      {props.name}
    </Button>
  );
}
