import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import logo
import logo from "../assets/logo.png";
// import components
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={1}
    sx={{
      position: "sticky",
      background: "#281f47",
      top: 0,
      justifyContent: "space-between",
      borderBottom: "1px solid #9b8bcb",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", marginRight: "0" }}
    >
      <img src={logo} alt="logo" height={45} />
      <p className="logo_title">
        my<span>Tube</span>
      </p>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
