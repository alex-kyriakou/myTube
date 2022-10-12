import { Paper, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: "#9b8bcb",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      ></input>
      <IconButton type="submit" sx={{ p: "10px", color: "#1c047b" }}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
