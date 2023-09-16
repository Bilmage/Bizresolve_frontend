import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Eye from "../../assets/icons/Redeye.svg"
import './modal.css';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `Lorem ipsum dolor  `;

export default function AutoGridNoWrap() {
  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>L</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{message}</Typography>
            <img className="description" alt="Description" src={Eye} />
          </Grid>
        </Grid>
      </StyledPaper>  
    </Box>
  );
}
