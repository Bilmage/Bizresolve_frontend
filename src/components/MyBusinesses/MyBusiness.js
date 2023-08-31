import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon

export default function CustomizedGrid() {
  // Simulate your data
  const rows = [
    {
      id: 1,
      businessName: 'Safaricom',
      reviews: 5, // Assuming this represents reviews
      accredited: true,
    },
    {
      id: 2,
      businessName: 'Zuku',
      reviews: 4, // Assuming this represents reviews
      accredited: false,
    },
    // Add more rows as needed
  ];

  const columns = [
    { field: 'id', hide: true },
    { field: 'businessName', headerName: 'Business Name', width: 150 },
    {
      field: 'reviews',
      headerName: 'Reviews',
      width: 150,
      renderCell: (params) => '⭐⭐⭐⭐⭐', // Display 5 stars for reviews
    },
    {
      field: 'accredited',
      headerName: 'Status',
      width: 150,
      valueGetter: (params) =>
        params.value ? 'Accredited' : 'Not Accredited',
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 120,
      renderCell: (params) => (
        <DeleteIcon onClick={() => handleDelete(params.id)} />
      ),
    },
  ];

  // Simulate delete action
  const handleDelete = (id) => {
    // Implement your delete functionality here
    console.log(`Delete business with ID: ${id}`);
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
