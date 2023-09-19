import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import HeartIcon from "../../assets/icons/Heart.svg";
import Eye from "../../assets/icons/Redeye.svg";
import { Link } from "react-router-dom"; // Import the Link component
import "./popular.css";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
}));

const Popular = ({ businessName, isNew, showDescription }) => {
  const [isStarHovered, setIsStarHovered] = useState(false);
  const [isFolderHovered, setIsFolderHovered] = useState(false);

  return (
    <div className="container">
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>      
        <StyledPaper
          sx={{
            my: 1,
            mx: "auto",
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
            <Grid
              item
              xs
              zeroMinWidth
              container
              justifyContent="center"
              alignItems="center"
              display="flex"
              onMouseOver={() => setIsStarHovered(true)}
              onMouseOut={() => setIsStarHovered(false)}
            >
              <Link to="/leave-review"> {/* Specify the URL for Leave a Review */}
                <FontAwesomeIcon
                  icon={faStar}
                  className="star-icon"
                  style={{ color: isStarHovered ? "#FF0000" : "#F78431" }}
                />
                {isStarHovered && <div className="hover-text">Leave a Review</div>}
              </Link>
            </Grid>
            <Grid
              item
              xs
              zeroMinWidth
              container
              justifyContent="center"
              alignItems="center"
              display="flex"
              onMouseOver={() => setIsFolderHovered(true)}
              onMouseOut={() => setIsFolderHovered(false)}
            >
              <Link to="/file-complaint"> {/* Specify the URL for File a Complaint */}
                <FontAwesomeIcon
                  icon={faFolderPlus}
                  style={{ color: isFolderHovered ? "#FF0000" : "#F78431", fontSize: "20px" }}
                />
                {isFolderHovered && <div className="hover-text">File a Complaint</div>}
              </Link>
            </Grid>
            <Grid item xs zeroMinWidth container justifyContent="center" alignItems="center">
              {/* Wrap the Eye icon with a Link */}
              <Link to="/"> {/* Specify the URL for the Eye icon */}
                <img className="description" alt="Description" src={Eye} />
              </Link>
            </Grid>
          </Grid>
        </StyledPaper>
      </Box>
    </div>
  );
};

export default Popular;
