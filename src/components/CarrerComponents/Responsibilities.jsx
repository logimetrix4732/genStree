import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Card,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

const Responsibilities = ({ title, items = [], setItems, loading }) => {
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (inputValue.trim()) {
      if (editIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editIndex] = inputValue;
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([...items, inputValue]);
      }
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));

    if (editIndex === index) {
      setEditIndex(null);
      setInputValue("");
    }
  };

  const handleEditItem = (index) => {
    setInputValue(items[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <label>{title}</label>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          multiline
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          maxWidth: "90px",
          fontWeight: "bold",
          p: 1,
          borderRadius: "10px",
          backgroundColor: "#4786e6",
          marginTop: "10px",
        }}
        onClick={addItem}
        disabled={loading}
      >
        {editIndex !== null ? "Save" : "Add"}
      </Button>

      <Box mt={2}>
        {items.map((item, index) => (
          <Card
            key={index}
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 2,
              cursor: "pointer",
              borderColor: "grey.300",
              boxShadow: 1,
              mt: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <HomeIcon sx={{ fontSize: 40, mr: 2, color: "primary.main" }} />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {title}
                  <IconButton
                    sx={{ ml: 1, p: 0.5, backgroundColor: "#f0f0f0" }}
                    onClick={() => handleEditItem(index)}
                  >
                    <EditIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                  <IconButton
                    sx={{ ml: 1, p: 0.5, backgroundColor: "#f8d7da" }}
                    onClick={() => removeItem(index)}
                  >
                    <DeleteIcon sx={{ fontSize: 16, color: "#c00" }} />
                  </IconButton>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ width: "230px", wordBreak: "break-word", mt: 0.5 }}
                >
                  {item || "No Data"}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default Responsibilities;
