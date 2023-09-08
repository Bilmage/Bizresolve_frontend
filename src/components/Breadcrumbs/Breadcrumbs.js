import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs() {
  return (
    <div className='container'>
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        Dashboard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="#"
        >
         My Businesses 
        </Link>
        <Typography color="text.primary">[Business Name]</Typography>
      </Breadcrumbs>
    </div>
    </div>
  );
}