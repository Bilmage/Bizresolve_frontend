import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import "./testimonial.css";
import ProfilePic from "../../assets/images/Profilepic1.png";
import { Link } from "react-router-dom";
import HeartIcon from "../../assets/icons/Heart.svg";

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export const TestimonialCard = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={ProfilePic} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Safaricom
              </Typography>
              <Typography variant="body2" gutterBottom>
              <div className="new">
                  <img className="heart" alt="Heart" src={HeartIcon} />
                  <div className="text-wrapper-4">New</div>
                </div>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nairobi, Westlands
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
              <i>Registred</i>&nbsp;Sept 12/10/2023
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Link to="#">
            <Typography variant="subtitle1" sx={{ cursor: 'pointer', color: '#f78431ff' }} component="div" >
              Add to collection
            </Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function TestimonialCardsArray() {
 
  const numberOfCards = 3;

  return (
    <div className='container'>
    <div className="testimonial-card-container">
      {[...Array(numberOfCards)].map((_, index) => (
        <TestimonialCard key={index} />
      ))}
    </div>
    </div>
  );
}
