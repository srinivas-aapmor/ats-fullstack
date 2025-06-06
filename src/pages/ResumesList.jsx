import React, { useState } from "react";
import Navbar from '../components/Navbar';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  InputAdornment,
  useTheme,
  useMediaQuery,
  Paper,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions 
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import grid from '../assets/grid.svg';

import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
  const resumeData = [
    {
      sl: 1,
      score: "98%",
      name: "Satheesh Kyahtam",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 2,
      score: "96%",
      name: "Ganesh",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 3,
      score: "94%",
      name: "Srinivas",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 4,
      score: "99%",
      name: "Appmore",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 5,
      score: "98%",
      name: "Ciril",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 6,
      score: "98%",
      name: "Satheesh Kyahtam",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 7,
      score: "98%",
      name: "Satheesh Kyahtam",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 8,
      score: "98%",
      name: "Satheesh Kyahtam",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 9,
      score: "98%",
      name: "Satheesh Kyahtam",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 10,
      score: "98%",
      name: "Satheesh Kyahtam",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },
    {
      sl: 11,
      score: "98%",
      name: "Satheesh Kyahtam",
      email: "satheesh@1234",
      skills: "Java, React, Nodejs",
      match: "98%",
      contact: "1234567894",
      experience: "8+ Years",
      education: "MS Graduate",
    },

  ];

  const scoreRanges = [
    { label: "All Scores", value: "" },
    { label: "10% - 20%", value: [10, 20] },
    { label: "20% - 30%", value: [20, 30] },
    { label: "30% - 40%", value: [30, 40] },
    { label: "40% - 50%", value: [40, 50] },
    { label: "50% - 60%", value: [50, 60] },
    { label: "60% - 70%", value: [60, 70] },
    { label: "70% - 80%", value: [70, 80] },
    { label: "80% - 90%", value: [80, 90] },
    { label: "90% - 100%", value: [90, 100] },
  ];

  const ResumeResults = () => {
    const [data, setData] = useState(resumeData);
    const [searchText, setSearchText] = useState('');
    const [selectedRange, setSelectedRange] = useState("");
    const [openDeleteAllDialog, setOpenDeleteAllDialog] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navigate = useNavigate();

  const handleDeleteRow = (sl) => {
    const updatedData = data.filter(row => row.sl !== sl);
    setData(updatedData);
  };

  const handleDeleteAll = () => {
    setData([]);
  };
  const buttonStyle = {
    backgroundColor: '#b2dfdb',
    color: '#00695c',
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#a5d6a7',
    },
  };
  const filteredData = data.filter((row) => {
    const scoreValue = parseInt(row.score.replace("%", ""));
  
    const inSearch = Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    );
  
    if (selectedRange && selectedRange !== "") {
      const [min, max] = JSON.parse(selectedRange);
      return inSearch && scoreValue >= min && scoreValue <= max;
    }
  
    return inSearch;
  });

  const handleExportExcel = () => {
    const exportData = data.map((row) => ({
      'SL No.': row.sl,
      Score: row.score,
      'Candidate Name': row.name,
      'Email ID': row.email,
      Skills: row.skills,
      Match: row.match,
      'Contact No.': row.contact,
      Experience: row.experience,
      Education: row.education,
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Resume Results');
  
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(dataBlob, 'ResumeResults.xlsx');
  };
  
  const columns = [
    { field: 'sl', headerName: 'SL No.', width: 90 },
    { field: 'score', headerName: 'Score', width: 100 },
    { field: 'name', headerName: 'Candidate Name', width: 200 },
    { field: 'email', headerName: 'Email ID', width: 200 },
    { field: 'skills', headerName: 'Skills', width: 250 },
    { field: 'match', headerName: 'Match', width: 100 },
    { field: 'contact', headerName: 'Contact No.', width: 150 },
    { field: 'experience', headerName: 'Experience', width: 150 },
    { field: 'education', headerName: 'Education', width: 150 },
    {
      field: 'actions',
      headerName: (
        <IconButton color="error" 
        //onClick={handleDeleteAll} 
        onClick={() => setOpenDeleteAllDialog(true)}
        title="Delete All">
          <DeleteIcon />
        </IconButton>
      ),
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <IconButton color="error" onClick={() => {setSelectedRowId(params.row.sl); setOpenDialog(true)}}>
          <DeleteIcon />
        </IconButton>
      )
    }
  ];
  

  return (
    <div>
      <Box className="analysis-main">
        <Navbar />
        <Box className='analysis-content'>
          {/* Header */}
          <Box className="analysis-header" display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} gap={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <IconButton><ArrowBackIosNewIcon /></IconButton>
              <Typography variant='h5' sx={{ fontWeight: 700, fontSize: "28px" }}>Resume Results</Typography>
            </Box>
            <TextField
              placeholder="Search candidate"
              size="small"
              variant="outlined"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              sx={{ width: isMobile ? '100%' : 250 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Main Content */}
          <Box sx={{ background: "linear-gradient(to bottom right, #e0f7fa, #e1bee7)", minHeight: "100vh", padding: 3, mt: 3 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              {/* <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ marginBottom: 2 }}>
                <Grid item xs={12} md="auto">
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                    <Button variant="outlined">Scores ▼</Button>
                    <Button variant="outlined">Matched Skills</Button>
                    <Button variant="contained" onClick={() => navigate('/upload')} color="primary" startIcon={<CloudUploadIcon />}>Upload New Resume</Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Button variant="contained" color="success" startIcon={<FileDownloadIcon />}>Export Results</Button>
                </Grid>
              </Grid> */}

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <TextField
              select
              value={selectedRange}
              onChange={(e) => setSelectedRange(e.target.value)}
              size="small"
              variant="outlined"
              sx={{
                minWidth: 160,
                backgroundColor: '#b2dfdb',
                borderRadius: '8px',
                '& .MuiSelect-select': {
                  color: '#00695c',
                  paddingY: '8px',
                  fontWeight: 600,
                },
                '& fieldset': {
                  border: 'none',
                },
              }}
            >
              <MenuItem
                value=""
                sx={{
                  color: '#00695c',
                  fontWeight: 600,
                }}
              >
                Scores
              </MenuItem>
              {scoreRanges
                .filter((range) => range.value !== "") // prevent duplicate "Scores"
                .map((range, index) => (
                  <MenuItem
                    key={index}
                    value={JSON.stringify(range.value)}
                    sx={{
                      color: '#00695c',
                      fontWeight: 600,
                    }}
                  >
                    {range.label}
                  </MenuItem>
                ))}
            </TextField>


                  <Button variant="contained" sx={buttonStyle}>
                    Matched Skills
                  </Button>

                  <Button
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    onClick={() => navigate('/upload')}
                    sx={buttonStyle}
                  >
                    Upload New Resume
                  </Button>

                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<FileDownloadIcon />}
                    onClick={handleExportExcel}
                    sx={buttonStyle}
                  >
                    Export Results
                  </Button>
            </Stack>


              {/* DataGrid Table */}
              <Box sx={{ width: '100%' , mt: 2 }}>
                <DataGrid
                  //autoHeight
                  rows={filteredData.map((row, index) => ({ id: row.sl, ...row }))}
                  columns={columns}
                  pageSize={10}
                  disableSelectionOnClick
                  initialState={{
                    pagination: {
                      paginationModel: { pageSize: 10, page: 0 },
                    },
                  }}
                  autoSizeOptions={{
                    includeOutliers: true,
                    expand: true,
                  }}
                  sx={{
                    '& .MuiDataGrid-columnHeaders': {
                      backgroundColor: '#4caf50',
                      color: '#fffff',
                      fontWeight: 'bold',
                    },
                  }}
                  pageSizeOptions={[10, 20, 50]}
                />
                
              </Box>
              <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
              >
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Are you sure you want to delete this resume entry?
                  </DialogContentText>
                  <Typography variant="body2" sx={{ color: '#e57373', mt: 1 }}>
                    * Deleted entries will not be recovered.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenDialog(false)} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      handleDeleteRow(selectedRowId);
                      setOpenDialog(false);
                    }}
                    color="error"
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={openDeleteAllDialog}
                onClose={() => setOpenDeleteAllDialog(false)}
              >
                <DialogTitle>Confirm Delete All</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Are you sure you want to delete all resume entries?
                    {/* <br />
                    <strong style={{ color: 'red' }}>Deleted entries will not be recovered.</strong> */}
                  </DialogContentText>
                  <Typography variant="body2" sx={{ color: '#e57373', mt: 1 }}>
                    * Deleted entries will not be recovered.
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setOpenDeleteAllDialog(false)} color="primary">
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      handleDeleteAll();
                      setOpenDeleteAllDialog(false);
                    }}
                    color="error"
                  >
                    Delete All
                  </Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </Box>
        </Box>

        <div className='grids left-grid'>
          <img src={grid} alt="grid" />
        </div>
        <div className='grids right-grid'>
          <img src={grid} alt="grid" />
        </div>
      </Box>
    </div>
  );
};

export default ResumeResults;
