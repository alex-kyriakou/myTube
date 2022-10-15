import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setselectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        background: "#122030",
        // paddingRight: "70px",
        // width: "200px",
        // md: '100%',
        justifyContent: "center",
        // alignContent: "center",
        // alignItems: "center",
      }}
    >
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{
              background: category.name === selectedCategory && "#9b8bcb",
              color: "#ab9ee0",
              // width: "150px",
            }}
            key={category.name}
            onClick={() => setselectedCategory(category.name)}
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
