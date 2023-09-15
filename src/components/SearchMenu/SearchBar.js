import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    // Handle search logic here, e.g., initiate search based on searchQuery and selectedCity
  };

  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '40ch' }, // Adjust the width here
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-search-input"
            label="Search for a business"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            variant="outlined"
          />          
        </div>
      </Box>
      <div>
        <Link to="#">
          <Button text="Search" onClick={handleSearchClick} />
        </Link>
      </div>
    </div>
  );
}
