import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

function SideBar({ selectCategory, setSelectCategory }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((type) => (
        <button
          className="category-btn"
          onClick={() => setSelectCategory(type.name)}
          style={{
            background: type.name === selectCategory && "#FC1503",
            color: "rgb(3 252 68)",
          }}
          key={type.name}
        >
          <span style={{ margineRight: "15px" }}>{type.icon}</span>
          <span style={{ opacity: type.name === selectCategory ? "1" : "0.7" }}>
            {type.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
