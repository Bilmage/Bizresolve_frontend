import React from 'react';
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
  Container,
  FormControl,
  InputLabel,
  Input,  
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
                <InputLabel htmlFor="header-search"></InputLabel>
                <Input
                  type="text"
                  id="header-search"
                  placeholder="Search for a business, charity, category "
                  name="s"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8} md={3} lg={3}>
              <Select
                id="county"
                label="Select County"
                className="fw-bold"
                fullWidth
              >
                <MenuItem value="Nairobi">Nairobi</MenuItem>
                <MenuItem value="Mombasa">Mombasa</MenuItem>
                <MenuItem value="Mombasa">Kisumu</MenuItem>
                <MenuItem value="Mombasa">Nakuru</MenuItem>
                
              </Select>
            </Grid>
            <Grid item xs={12} sm={1} md={1} lg={1}>
            <Link to="/Registration">
              <Button text="Search"></Button>
            </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default SearchBar;
