import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Paper, Typography, Button, TextField, Grid } from '@mui/material'
import '../styles/resumeAnalysis.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import data from '../data.json'
import ScoreCard from '../helpers/ScoreCard';



export default function ResumeAnaylze() {
    const overall_match = data.ats_analysis.overall_match_percentage;
    const skills_match = data.ats_analysis.skills_match_percentage;
    const experience_match = data.ats_analysis.experience_match_percentage || 0;
    const name = data.ats_analysis?.candidate_name || "Candidate Name";
    const experience = data.ats_analysis?.total_experience_years || "0 years";
    // const current_role=data.ats_analysis?.current_role || "Not Specified";
    const higest_education = data.ats_analysis?.highest_education || "Not Specified";
    const email = data.ats_analysis?.Email || "Not Specified";
    const phone = data.ats_analysis?.Phone || "Not Specified";
    const matching_skills = data.ats_analysis?.matched_skills || [];





    return (
        <div>

            <Box className="analysis-main">
                <Navbar />
                <Box className='analysis-content'>
                    <Box className='analysis-header'>
                        <Box className='analysis-header-left'>
                            <IconButton><ArrowBackIosNewIcon /></IconButton>
                            <Typography variant='h5' className='analysis-heading' sx={{ fontWeight: "700", fontSize: "28px" }}>Resume Analysis Result</Typography>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', backgroundColor: '#00C28E',
                                color: 'primary.contrastText', borderRadius: 1, px: 0.5, py: 0.5, pr: 2, fontWeight: 500,
                                fontSize: 'font', textTransform: 'none', width: 'fit-content'
                            }}>
                                <FiberManualRecordIcon className="good-fit-icon" fontSize="small" sx={{ mr: 1 }} />
                                Good Fit
                            </Box>
                        </Box>
                        <Box className='analysis-header-right'>
                            <Button variant='contained' sx={{ textTransform: "none", backgroundColor: '#9a65fe' }} className='export-button'>Export</Button>
                        </Box>

                    </Box>

                    <Box>
                        <Grid container spacing={4} className='score-cards'>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <ScoreCard title="Overall Match" score={overall_match} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <ScoreCard title="Skills Match" score={skills_match} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <ScoreCard title="Experience Match" score={experience_match} />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container spacing={4} className='analysis-cards'>
                            <Grid size={{ xs: 12, md: 4 }}>

                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>

                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>

                            </Grid>
                        </Grid>
                    </Box>


                </Box>
            </Box>
        </div >
    )
}
