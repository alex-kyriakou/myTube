import { Paper, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmitForm}
      sx={{
        borderRadius: 20,
        border: "1px solid #444e9e",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: "white",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <IconButton type="submit" sx={{ p: "10px", color: "#1c047b" }}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
