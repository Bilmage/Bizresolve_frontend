import React from 'react';
import Button from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
      <div className="container" style={{ display: "flex", justifyContent: "flex-start" }}>
        <div className="row">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8} md={7} lg={7}>
              <FormControl fullWidth>
                <InputLabel htmlFor="header-search"></InputLabel>
                <div style={{ position: 'relative' }}>                  
                  <Input
                    type="text"
                    id="header-search"
                    placeholder="Search for a business, charity, category "
                    name="s"
                  />                  
                </div>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <Select
                id="county"
                label="Select County"
                className="fw-bold"
                fullWidth
                
                
              >
                <MenuItem value="Nairobi">Nairobi</MenuItem>
                <MenuItem value="Mombasa">Mombasa</MenuItem>
                <MenuItem value="Kisumu">Kisumu</MenuItem>
                <MenuItem value="Nakuru">Nakuru</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2}>
              <Link to="#">
                <Button text="Search" size="small"></Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default SearchBar;
