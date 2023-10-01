import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import HeartIcon from "../../assets/icons/Heart.svg"; 
import Eye from "../../assets/icons/Redeye.svg"; 
import './popular.css';
import Toggle from '../Toggle/Toggle';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
}));

const Popular = ({ businessName, isNew, showDescription }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (isToggled) => {
    setIsChecked(isToggled);
  };
 
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2} alignItems="center">
          <Grid item>
            <Avatar>L</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth container justifyContent="center" alignItems="center">
            <Typography noWrap>{businessName}</Typography>&nbsp;
          </Grid>
          <Grid item xs zeroMinWidth container justifyContent="center" alignItems="center">
            {isNew && (
              <div className="new">
                <img className="heart" alt="Heart" src={HeartIcon} />
                <div className="text-wrapper-4">New</div>
              </div>
            )}
          </Grid>
          <Grid item xs zeroMinWidth container justifyContent="center" alignItems="center" display="flex">
            <Toggle
              labelLeft="Leave a review"
              labelRight="File a complaint"
              toggled={isChecked}
              onClick={handleToggle}
            />
          </Grid>
          <Grid item xs zeroMinWidth container justifyContent="center" alignItems="center">
            {showDescription && <img className="description" alt="Description" src={Eye} />}
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
    
  );
};

export default Popular;
