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
        <Link underline="hover" color="inherit" href="/search">
        Dashboard
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/businesses"
        >
         All Businesses 
        </Link>
        <Typography color="text.primary">[Business Name]</Typography>
      </Breadcrumbs>
    </div>
    </div>
  );
}