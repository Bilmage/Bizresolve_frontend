import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

export default function Feedback() {
  return (
    <div className='container'>
      <Paper
        style={{
          border: '1px solid #e6e6e6',
          padding: '70px 70px 50px 70px',
          width: '100%',
          maxWidth: 440,
          margin: '50px auto',
          background: '#fff',
        }}
      >
        <div>
          <Typography
            variant='h4'
            style={{
              marginBottom: 2,
              fontWeight: 'bold',
              color: '#414b66',
            }}
          >
            Take a survey
          </Typography>
          <Typography
            variant='body1'
            style={{
              fontSize: 15,
              marginBottom: 3,
              letterSpacing: '0.05em',
              fontFamily: "Inter-Regular",
            }}
          >
            "Your feedback is invaluable in helping us enhance our services. Share your thoughts and help us continue delivering exceptional care!"
          </Typography>
        </div>
        <table
          className='contents'
          style={{
            borderCollapse: 'collapse',
            borderSpacing: 0,
            width: '100%',
          }}
        >
          <tbody>
          &nbsp;&nbsp;
            <tr>
              <td style={{ width: '50%' }}>
              <Link to="#">
              <Button text="No" ></Button>
            </Link>
              </td>
              <td style={{ width: '50%' }}>
              <Link to="#">
              <Button text="yes" ></Button>
            </Link>
                
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </div>
  );
}
