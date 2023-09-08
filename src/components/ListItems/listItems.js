import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>    
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/my-business">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="My Business" />
    </ListItemButton>
    <ListItemButton component={Link} to="/business-profile">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Business Profile" />
    </ListItemButton>
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Business reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end" />
    </ListItemButton>
  </React.Fragment>
);