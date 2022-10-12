import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";

function Sidebar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        background: "#94e4ec",
        color: "red",
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#9b8bcb",
              color: "#0d0237",
            }}
            key={category.name}
          >
            <span
              style={{
                color:
                  category.name === selectedCategory ? "#444e9e" : "#444e9e",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : ".7",
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Sidebar;
