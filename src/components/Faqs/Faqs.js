import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Frequents() {
  return (
    <div className="container">
    <Container className="mt-5" style={{ maxWidth: "auto" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Question #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>This is the first item's accordion body.</strong> It is shown
            by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Question #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding
            our default variables. It's also worth noting that just about any HTML
            can go within the <code>.accordion-body</code>, though the transition
            does limit overflow.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Question #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>This is the third item's accordion body.</strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
    </div>
  );
}
