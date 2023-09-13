import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BG from "../../assets/images/bg1.png";

const cardStyle = {
  maxWidth: 345,
  margin: '10px', // Adjust the margin as needed
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'row', // Aligns cards vertically
  alignItems: 'flex-start', // Aligns elements to the left
};

const cardData = [
  {
    title: 'zuku',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    title: 'Safaricom',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    title: 'MTN',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
];

export default function ImgMediaCard() {
  return (
    <div className='container'>
    <div style={containerStyle}>      
      <div style={containerStyle}>
        {cardData.map((data, index) => (
                       
          <Card key={index} sx={cardStyle}>
            <CardMedia
              component="img"
              alt={`Image ${index}`}
              height="50"
              image={BG}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to collection</Button>
              <Button size="small">View profile</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
}
