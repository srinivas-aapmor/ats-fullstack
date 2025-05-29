import React, { useState } from "react";
import Navbar from '../components/Navbar';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Grid,
  IconButton,
  Stack,
  InputAdornment,
  useTheme,
  useMediaQuery
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SearchIcon from '@mui/icons-material/Search';
import grid from '../assets/grid.svg';

import { useNavigate } from 'react-router-dom';

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
        score: "98%",
        name: "Satheesh Kyahtam1",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 3,
        score: "98%",
        name: "Satheesh Kyahtam2",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 4,
        score: "98%",
        name: "Satheesh Kyahtam3",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 5,
        score: "98%",
        name: "Satheesh Kyahtam4",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 6,
        score: "98%",
        name: "Satheesh Kyahtam5",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 7,
        score: "98%",
        name: "Satheesh Kyahtam6",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 8,
        score: "98%",
        name: "Satheesh Kyahtam7",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 9,
        score: "98%",
        name: "Satheesh Kyahtam8",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
      {
        sl: 10,
        score: "98%",
        name: "Satheesh Kyahtam9",
        email: "satheesh@12342",
        skills: "Java, React, Nodejs, MongoDB",
        match: "98%",
        contact: "1234567894",
        experience: "6+ Years",
        education: "MS Graduate",
      },
];

const ResumeResults = () => {
  const [selectedScore, setSelectedScore] = useState('Overall Match');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
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
              <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ marginBottom: 2 }}>
                <Grid item xs={12} md="auto">
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                    <Button variant="outlined">Scores ▼</Button>
                    <Button variant="outlined">Matched Skills</Button>
                    <Button variant="contained" onClick={() => navigate('/upload')} color="primary" startIcon={<CloudUploadIcon />} >Upload New Resume</Button>
                  </Stack>
                </Grid>
                <Grid item xs={12} md="auto">
                  <Button variant="contained" color="success" startIcon={<FileDownloadIcon />}>Export Results</Button>
                </Grid>
              </Grid>

              {/* Table */}
              <Box sx={{ overflowX: 'auto' }}>
                <Table>
                  <TableHead sx={{ backgroundColor: "#4caf50" }}>
                    <TableRow>
                      {["SL No.", "Score", "Candidate Name", "Email ID", "Skills", "Match", "Contact No.", "Experience", "Education", ""].map((header, index) => (
                        <TableCell key={index} sx={{ color: "#fff" }}>{header}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {resumeData.map((row, index) => (
                      <TableRow key={index} hover>
                        <TableCell>{row.sl}</TableCell>
                        <TableCell>{row.score}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.skills}</TableCell>
                        <TableCell>{row.match}</TableCell>
                        <TableCell>{row.contact}</TableCell>
                        <TableCell>{row.experience}</TableCell>
                        <TableCell>{row.education}</TableCell>
                        <TableCell>
                          <IconButton color="error">
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
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
