import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { XGrid } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  {
    id: 1,
    col1: "Safaricom",
    col2: "Internet",
    phoneNumber: "123-456-7890",
    email: "safaricom@example.com",
    description: "Telecom company",
    registeredAt: "2023-08-29 10:30:00",
    accredited: true,
  },
  {
    id: 2,
    col1: "Zuku",
    col2: "Internet",
    phoneNumber: "987-654-3210",
    email: "zuku@example.com",
    description: "Internet service provider",
    registeredAt: "2023-08-30 09:45:00",
    accredited: false,
  },
  {
    id: 3,
    col1: "Surgipham",
    col2: "Pharmacy",
    phoneNumber: "555-123-4567",
    email: "surgipham@example.com",
    description: "Pharmaceutical store",
    registeredAt: "2023-08-31 14:20:00",
    accredited: true,
  },
  {
    id: 4,
    col1: "Gengis Capital",
    col2: "Investment Banking",
    phoneNumber: "222-333-4444",
    email: "gengiscapital@example.com",
    description: "Financial services",
    registeredAt: "2023-09-01 08:00:00",
    accredited: false,
  },
  {
    id: 5,
    col1: "Dimension Data",
    col2: "Technology",
    phoneNumber: "999-888-7777",
    email: "dimensiondata@example.com",
    description: "IT solutions provider",
    registeredAt: "2023-09-02 16:30:00",
    accredited: true,
  },
  {
    id: 6,
    col1: "MTN",
    col2: "Internet",
    phoneNumber: "444-555-6666",
    email: "mtn@example.com",
    description: "Telecom company",
    registeredAt: "2023-09-03 11:10:00",
    accredited: false,
  },
];

const columns: GridColDef[] = [
  { field: "id", hide: true },
  { field: "col1", headerName: "Business Name", width: 150 },
  { field: "col2", headerName: "Business Category", width: 150 },
  { field: "phoneNumber", headerName: "Phone Number", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "registeredAt", headerName: "Date Registered", width: 180 },
  {
    field: "accredited",
    headerName: "Accredited",
    width: 120,
    renderCell: (params) => (params.value ? "Yes" : "No"),
  },
];

export default function Businesses() {
  return (
    <div className="container-fluid">
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
    </div>
  );
}
