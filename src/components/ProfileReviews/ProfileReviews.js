import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Cover from "../../assets/images/bg1.png";

export default function ProfileReviews() {

    const business = {
        rating: 4,
    };

    return (
        <div className='container'>
            <Card sx={{
                display: 'flex', margin: "auto",
            }}>
                <Box sx={{ display: 'flex',  flexDirection: 'column', width: {
                        xs: '100%',
                        sm: 500,
                    }, }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Safaricom
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Ratings
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        <div className="ratings">
                            {Array.from({ length: business.rating }).map((_, index) => (
                                <FontAwesomeIcon key={index} icon={faStar} className="star-icon" style={{ color: '#F78431' }} />
                            ))}
                            <div className="text-wrapper">{business.rating} of 5</div>
                        </div>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={Cover}
                    alt="profilecover"
                />
            </Card>
        </div>
    );
}
