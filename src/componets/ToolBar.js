import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
  clearCart,
} from "../Redux/ShoppingCartSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
export default function ToolBar({
  handleDrawerToggle,
  navItems,
  shoeTitle,
  shoePrice,
}) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const cartItem = useSelector((state) => state.ShoppingCart.checkoutCart);
  const count = useSelector((state) => state.ShoppingCart.total);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const getIcons = (id, shoeTitle, shoePrice) => {
    return (
      <div className="navIcons">
        <ArrowDropUpIcon
          onClick={() => dispatch(addToCart({ id, shoeTitle, shoePrice }))}
        />
        <ArrowDropDownIcon onClick={() => dispatch(removeFromCart({ id }))} />
      </div>
    );
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Toolbar>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" }, JustifyContent: "space-between" }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          fontWeight: "600",
        }}
      >
        NIKE
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: "#000" }}>
            {item}
          </Button>
        ))}
      </Box>
      <Badge badgeContent={count} color="error" onClick={handleClick}>
        <ShoppingCartIcon color="action" />
      </Badge>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          <Divider />
          {!cartItem.length && (
            <ListItem>
              <ListItemText
                primary={"The cart is empty"}
                primaryTypographyProps={{ fontSize: "15px" }}
              />
            </ListItem>
          )}
          {cartItem.map((item) => (
            <ListItem key={item.shoeTitle}>
              <ListItemAvatar>
                <Avatar alt={item.shoeTitle} src={item.srcImage} />
              </ListItemAvatar>
              <ListItemText
                primary={item.shoeTitle}
                primaryTypographyProps={{ fontSize: "10px", pr: 10 }}
              />
              <ListItemText
                primaryTypographyProps={{ fontSize: "15px" }}
                primary={item.count ? item.count : 1}
              />
              <ListItemText
                primaryTypographyProps={{ fontSize: "10px", pr: 2 }}
                primary={getIcons(item.id, item.shoeTitle, item.shoePrice)}
              />
              <ListItemIcon>
                <DeleteOutlineIcon
                  onClick={() => dispatch(deleteFromCart({ id: item.id }))}
                />
              </ListItemIcon>

              <ListItemText
                primaryTypographyProps={{ fontSize: "10px" }}
                primary={
                  item.count ? item.count * item.shoePrice : item.shoePrice
                }
              />
            </ListItem>
          ))}

          <Divider />
          {cartItem.length ? (
            <ListItemButton
              component="a"
              href="#customized-list"
              onClick={() => dispatch(clearCart())}
            >
              <ListItemText
                sx={{ my: 0 }}
                primary="Clear Cart"
                primaryTypographyProps={{
                  bgcolor: "#aacae7",
                  justifyContent: "center",
                  display: "flex",
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
          ) : null}
        </List>
      </Popover>
      <div></div>

      {/* <ShoppingCartIcon />
       */}
    </Toolbar>
  );
}
