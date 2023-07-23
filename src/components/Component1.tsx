import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Grid } from '@material-ui/core'


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;

}

const DataGridDemo: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User id', width: 90, type: "number" },
    {
      field: 'id',
      headerName: 'Id',
      width: 150,
      editable: true,
      type: "number"
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      type: 'string',
      width: 110,
      editable: true,
    },
  ];

  const rows = data;

  return (
    <Grid style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <Grid item xs={10} sm={10} md={10}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DataGridDemo;
