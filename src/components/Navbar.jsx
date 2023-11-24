import styled from "@emotion/styled";
import {Castle} from "@mui/icons-material";
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
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
  backgroundColor: "green",
  padding: "0 6px",
  borderEndStartRadius: "8px",
  borderStartEndRadius: "8px",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{display: {xs: "none", sm: "block"}}}>
          Liza Dev
        </Typography>
        <Castle sx={{display: {xs: "block", sm: "none"}}} />.
        <Search>Search </Search>
        <Icon>Icon</Icon>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
