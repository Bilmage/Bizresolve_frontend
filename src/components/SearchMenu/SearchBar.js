import React from 'react';
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  Button,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';

const SearchBar = ({ className }) => {
  return (
    <Container>
      <div className="container" style={{display: "flex", justifyContent: "flex-start"}}>
        <div className="row">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <FormControl fullWidth>
                <InputLabel htmlFor="header-search">Search blog posts</InputLabel>
                <Input
                  type="text"
                  id="header-search"
                  placeholder="Search blog posts"
                  name="s"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Select
                id="county"
                label="Select County"
                className="fw-bold"
                fullWidth
              >
                <MenuItem value="Nairobi">Nairobi</MenuItem>
                <MenuItem value="Mombasa">Mombasa</MenuItem>
                {/* Add more counties here */}
              </Select>
            </Grid>
            <Grid item xs={12} sm={1} md={1} lg={1}>
              <Button variant="contained" color="primary" fullWidth>
                Search
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default SearchBar;
