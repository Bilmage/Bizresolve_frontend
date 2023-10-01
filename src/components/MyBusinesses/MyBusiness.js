import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyBusiness() {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  // Simulate your data
  const rows = [
    {
      id: 1,
      businessName: 'Safaricom',
      reviews: 5, // Assuming this represents reviews
      accredited: true,
      registeredAt: '2023-08-29 10:30:00', // Date and time of registration
      location: 'Nairobi', // Location data for the business
    },
    {
      id: 2,
      businessName: 'Zuku',
      reviews: 4, // Assuming this represents reviews
      accredited: false,
      registeredAt: '2023-08-30 09:45:00', // Date and time of registration
      location: 'Kisumu', // Location data for the business
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
      field: 'location', // New "Location" column
      headerName: 'Location',
      width: 150,
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

  // Filter the rows based on the search query
  const filteredRows = rows.filter((row) =>
    row.businessName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        {/* Add the search input field */}
        <input
          type="text"
          placeholder="Search businesses"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <DataGrid
            rows={filteredRows} // Use the filtered rows
            columns={columns}
            pageSize={5}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </div>
      </div>
    </div>
  );
}
