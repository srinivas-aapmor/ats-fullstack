import React from "react";
import {
  Box,
  Card,
  CardContent,
  CssBaseline,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/landingpage.css";
import Carousel from "../components/Carousel";
import grid from "../assets/grid.svg";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/upload");
  }

  return (
    <>
      <CssBaseline />
      {/* Background Box */}
      <Box className="BoxOne" sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            p: "20px",
            backgroundColor: "#ffffff90",
            borderRadius: 2,
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ffffff",
              borderRadius: 1,
              height: "84vh",
              margin: "auto",
            }}
          >
            {/* Left Container */}
            <Box className="Left-box" sx={{}}>
              <Typography
                gutterBottom
                variant="body2"
                sx={{ color: "#9a64ff", fontWeight: 550 }}
              >
                Welcome Jyothi
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                You’re just one step ahead <br />
                from enhancing your <br />
                hiring process.
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "black", fontWeight: 530 }}
              >
                Unlock the future of work !
              </Typography>

              <Button
                variant="contained"
                className="my-button"
                sx={{
                  backgroundColor: "#00c28e",
                  borderRadius: "30px",
                }}
                endIcon={<ArrowForwardIcon />}
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </Box>
            {/* Right Container */}
            <Box className="Right-box" /* sx={{ my: 4 }} */>
              <Carousel />
            </Box>
          </Box>
        </Box>
        {/* Carousel Images */}
        <img src={grid} alt="img" className="grid-left" />
        <img src={grid} alt="img" className="grid-right" />
        <img src={grid} alt="img" className="top-middle" />
      </Box>
    </>
  );
}
