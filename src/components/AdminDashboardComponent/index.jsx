import React, { useState } from "react";
import {
  Box,
  Chip,
  Grid,
  Stack,
  Paper,
  Button,
  Avatar,
  Dialog,
  Tooltip,
  Divider,
  Container,
  Typography,
  DialogTitle,
  CardContent,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import {
  Eye,
  Zap,
  Users,
  Trophy,
  XCircle,
  Calendar,
  Activity,
  CheckCircle,
} from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";
// Register Chart.js Components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const PremiumDashboard = ({ dashboard }) => {
  console.log(dashboard, "=dashboard");
  // Monthly Applicants Data
  const monthlyApplicantsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Applicants",
        data: [120, 190, 8, 280, 310, 350, 400], // "Mar" ka data update kiya
        borderColor: "#2196f3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Summary Cards Data
  const summaryData = [
    {
      icon: <Users />,
      value: dashboard.totalApplied,
      label: "Total Applicants",
      color: "#4caf50",
      percentage: 12,
      description: "Total candidates who applied",
    },
    {
      icon: <Zap />,
      value: dashboard.totalScheduled,
      label: "Scheduled Interviews",
      color: "#ff9800",
      percentage: 8,
      description: "Interviews scheduled for applicants",
    },
    {
      icon: <Eye />,
      value: dashboard.totalViewed,
      label: "Viewed Applications",
      color: "#2196f3",
      percentage: 5,
      description: "Applications reviewed by recruiters",
    },
    {
      icon: <XCircle />,
      value: dashboard.totalRejected,
      label: "Rejected Applications",
      color: "#9c27b0",
      percentage: 15,
      description: "Applications that didn't qualify",
    },
  ];

  // Today's Interview Lineup
  const interviewList = [
    // {
    //   name: "Aman Sharma",
    //   time: "10:00 AM",
    //   position: "Frontend Developer",
    //   status: "Scheduled",
    //   icon: <Users size={20} />,
    // },
    // {
    //   name: "Riya Mehta",
    //   time: "11:30 AM",
    //   position: "Backend Engineer",
    //   status: "Confirmed",
    //   icon: <Calendar size={20} />,
    // },
    // {
    //   name: "Vikram Singh",
    //   time: "2:00 PM",
    //   position: "UI/UX Designer",
    //   status: "Pending",
    //   icon: <Activity size={20} />,
    // },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* Dashboard Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Trophy size={32} />
            Admin Dashboard
          </Typography>
        </Box>

        {/* Summary Cards */}
        <Grid container spacing={3}>
          {summaryData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={4}
                sx={{
                  height: "100%",
                  background: `linear-gradient(145deg, ${item.color}10, ${item.color}30)`,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      right: -20,
                      color: item.color,
                      opacity: 0.2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: `${item.color}20`,
                        width: 56,
                        height: 56,
                      }}
                    >
                      {item.icon}
                    </Avatar>
                    <Chip
                      label={`+${item.percentage}%`}
                      sx={{
                        fontWeight: "bold",
                        backgroundColor: `${item.color}20`,
                        color: item.color,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mt: 2,
                      color: "text.primary",
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary" }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      mt: 1,
                      color: "text.disabled",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Analytics and Interview Section */}
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={8}>
            <Paper elevation={4} sx={{ p: 3, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Monthly Applicants Overview
                </Typography>
              </Box>
              <Line
                data={monthlyApplicantsData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                    tooltip: {
                      backgroundColor: "rgba(0,0,0,0.8)",
                      titleFont: { size: 14 },
                      bodyFont: { size: 12 },
                    },
                  },
                  scales: {
                    x: {
                      grid: { display: false },
                    },
                    y: {
                      min: 0, // Minimum value
                      max: 50, // Maximum value
                      ticks: {
                        stepSize: 5, // Y-axis pe har tick 5 ke gap me hoga
                      },
                      grid: { borderDash: [5, 5] },
                    },
                  },
                }}
              />
            </Paper>
          </Grid>

          {/* Today's Interview Lineup */}
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Today's Interview Lineup
                </Typography>
                <Calendar size={20} />
              </Box>
              <Stack spacing={2}>
                {interviewList.map((interview, index) => (
                  <Box key={index}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: "primary.light",
                          color: "primary.main",
                        }}
                      >
                        {interview.icon}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: "bold" }}
                        >
                          {interview.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {interview.position} - {interview.time}
                        </Typography>
                      </Box>
                      <Chip
                        label={interview.status}
                        size="small"
                        color={
                          interview.status === "Confirmed"
                            ? "success"
                            : interview.status === "Pending"
                              ? "warning"
                              : "primary"
                        }
                        variant="outlined"
                      />
                    </Box>
                    {index < interviewList.length - 1 && (
                      <Divider sx={{ my: 1 }} />
                    )}
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PremiumDashboard;
