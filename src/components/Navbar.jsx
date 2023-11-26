import styled from "@emotion/styled";
import {Castle, Mail, Notifications} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "lightsteelblue",
  padding: "0 10px",
  width: "40%",
  borderEndStartRadius: "10px",
  borderStartEndRadius: "10px",
}));
const Icon = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{display: {xs: "none", sm: "block"}}}>
          Liza Dev
        </Typography>
        <Castle sx={{display: {xs: "block", sm: "none"}}} />.
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="success">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://i.ibb.co/Fxbm06w/berbie-Black.jpg"
          />
        </Icon>
        <UserBox>
          <Avatar
            sx={{width: 30, height: 30}}
            src="https://i.ibb.co/Fxbm06w/berbie-Black.jpg"
          />
          <Typography varient="span">LiZa</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
