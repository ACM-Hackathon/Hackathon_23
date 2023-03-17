import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Scholarships = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "contract_address", headerName: "Address", flex: 2 },
    {
      field: "sender_id",
      headerName: "Sender ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "receiver_id",
      headerName: "Receiver ID",
      // type: "number",
      flex: 1,
      // headerAlign: "left",
      // align: "left",
    },
    {
        field: "amount",
        headerName: "Amount",
        // type: "number",
        flex: 1,
        // headerAlign: "left",
        // align: "left",
      },
      {
        field: "timestamp",
        headerName: "Timestamp",
        // type: "number",
        flex: 1,
        // headerAlign: "left",
        // align: "left",
      },
      {
        field: "transaction_id",
        headerName: "Transaction ID",
        // type: "number",
        flex: 1,
        // headerAlign: "left",
        // align: "left",
      },
   
  ];

  const [rowData, getRowData] = useState([]);
  const navigateTo = useNavigate();
  useEffect(() => {
    const URL = `https://dhanrakshak-production-0b5f.up.railway.app/admin`;
    axios
      .get(URL, 
        {
        headers: {
          "Content-Type": "application/json",
          // "authorization": `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data.transactions);
          getRowData(response.data.transactions);
        } else {
          // alert("Some error occurred.");
          navigateTo('/login',{replace:true});

          return;
        }
      })
      .catch((err) => {
        // alert(err);
        navigateTo('/login',{replace:true});
        // window.location = "/login";
        return;
      });
  }, []);


  return (
    <Box m="20px">
      <Header
        title="TRANSACTIONS"
        subtitle="List of all transactions stored on blockchain"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={rowData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Scholarships;