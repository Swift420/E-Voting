import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { candidatesData } from '../../candidateData';

const columns: GridColDef[] = [
 
  { field: 'fullname', headerName: 'Full Name', width: 130 },
  { field: 'candidancy', headerName: 'Running for', width: 130 },
  { field: 'faculty', headerName: 'Faculty', width: 250 },
  { field: 'votes', headerName: 'Votes', width: 90 , type: 'number'},

  
];



export default function Table() {
  return (
    <div className='' style={{ height: 500, width: 700 }}>
      <DataGrid
        rows={candidatesData}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
}
