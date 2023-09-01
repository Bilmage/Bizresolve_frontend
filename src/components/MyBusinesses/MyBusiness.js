import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon

export default function MyBusiness() {
  // Simulate your data
  const rows = [
    {
      id: 1,
      businessName: 'Safaricom',
      reviews: 5, // Assuming this represents reviews
      accredited: true,
      registeredAt: '2023-08-29 10:30:00', // Date and time of registration
    },
    {
      id: 2,
      businessName: 'Zuku',
      reviews: 4, // Assuming this represents reviews
      accredited: false,
      registeredAt: '2023-08-30 09:45:00', // Date and time of registration
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
      field: 'registeredAt',
      headerName: 'Registered Date',
      width: 180,
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
    <div className='container-fluid'>
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
    </div>
  );
}
