"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  setVisualizationType,
  visualizationType,
}) {
  const handleChange = (event) => {
    setVisualizationType(event.target.value);
  };

  return (
    <Box sx={{ width: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={visualizationType}
          label="Select"
          onChange={handleChange}
        >
          <MenuItem value={"Table"}>Table</MenuItem>
          <MenuItem value={"LineGraph"}>Line Graph</MenuItem>
          <MenuItem value={"Histogram"}>Histogram</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
