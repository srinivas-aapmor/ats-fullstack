import React, { useState } from 'react'
import { Box, Paper, Typography, Button, TextField, Grid } from '@mui/material'
import Navbar from '../components/Navbar'
import '../styles/upload.css'
import grid from '../assets/grid.svg'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PublishIcon from '@mui/icons-material/Publish';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'

export default function Upload() {
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const navigate = useNavigate();

    const formData = new FormData();

    // console.log(data.ats_analysis.missing_skills);

    const handleRemoveFiles = () => {
        setFileName(null);
        setSelectedFile(null);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        // alert("Resume Uploaded");

        for (let file of files) {
            if (!validTypes.includes(file.type)) {
                alert('Only PDF or DOC files are allowed.');
                event.target.value = '';
                return;
            }
        }


        setSelectedFile(files[0]);

        setFileName(files[0].name);

    };

    // console.log('Valid files:', selectedFile);

    const handleAnalyze = async () => {
        // console.log("Analyzing file:", selectedFile);
        formData.append('resume', selectedFile);
        formData.append('job_description', description)
        const response = await axios.post('http://192.168.1.27:8502/analyze_resume', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response);

        // navigate("/analyze", { state: { response: response.data } });
    };


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });



    return (

        <>

            <Box className='upload-main'>
                <Navbar />
                <Box className='upload-container'>
                    <Typography gutterBottom variant="h6" className='welcome-user' sx={{ color: '#8638e6', fontWeight: "bold", fontSize: "24px", mb: "2%", mt: "2%" }}>
                        Welcome Jyothi,
                    </Typography>
                    <Grid container spacing={5} className="upload-inputs">
                        <Grid size={6} className='upload-description inputs'>
                            <Box className='jd-box'>
                                <ContentPasteIcon className='icons' sx={{ fontSize: 35, mr: 1, }} />
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} className='jd-heading'>Add Your Job Description</Typography>
                            </Box>
                            <Box>

                                <TextField
                                    className='jd-input'
                                    placeholder="Paste Or Type Your Job Description"
                                    required
                                    variant="outlined"
                                    multiline
                                    minRows={9}
                                    maxRows={9}
                                    // Height="120px"
                                    fullWidth
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    sx={{ backgroundColor: "white", CursorWidth: '0' }}
                                />
                            </Box>
                        </Grid>
                        <Grid size={6} className='upload-resume inputs'>
                            <Box className='jd-box'>
                                <AttachFileIcon className='icons' sx={{ fontSize: 35, mr: 1, }} />

                                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} className='jd-heading'>Upload Your Resume</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: 'white',
                                border: '2px dashed #00C28E',
                                minHeight: '75%',
                                borderRadius: '5px',
                                width: '100%',
                                mb: '10px',
                                gap: 2

                            }}
                            >
                                < PublishIcon sx={{
                                    fontSize: 75,
                                    backgroundColor: '#E1FFF5',
                                    color: '#00C28E',
                                    borderRadius: "50%",
                                    padding: "15px"

                                }} />

                                <Typography variant="h7" color="black">
                                    Upload Your Resume
                                </Typography>
                                <Typography sx={{ color: 'grey' }} variant="h7">
                                    {' Support Format be .PDF,DOC Only(Less than 2 MB)'}
                                </Typography>
                                {!fileName && (
                                    <Button
                                        component="label"
                                        variant="contained"
                                        className='Upload'
                                        type="file"
                                        onChange={handleFileChange}
                                        // startIcon={<CloudUploadIcon />}
                                        sx={{
                                            backgroundColor: '#dbdbdb', color: 'black', height: '30px',
                                            minWidth: '130px', marginTop: '10px', padding: '4px 8px', fontSize: '15px',
                                            lineHeight: 1, textTransform: "none", boxShadow: 'none'
                                        }}
                                    >
                                        Choose File
                                        <VisuallyHiddenInput type="file" accept=".pdf,.doc,.docx" multiple />
                                    </Button>
                                )}
                                {fileName && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px', gap: 1 }}>
                                        <Typography variant="body2" sx={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {fileName}
                                        </Typography>
                                        <IconButton aria-label="delete" onClick={handleRemoveFiles} size="small" color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                )}
                            </Box>
                            <Box> <Button sx={{ float: "right", mt: 1, backgroundColor: "#00C28E", textTransform: "none", boxShadow: 'none' }}
                                onClick={handleAnalyze}

                                disabled={!selectedFile || !description.trim()}
                                variant='contained'>< SendIcon sx={{ mr: 1 }} />Analyze</Button></Box>


                        </Grid>
                    </Grid>
                </Box >
                <div className='grids left-grid'>
                    <img src={grid} alt="grid" />
                </div>
                <div className='grids right-grid'>
                    <img src={grid} alt="grid" />
                </div>
            </Box >
        </>
    )
}
