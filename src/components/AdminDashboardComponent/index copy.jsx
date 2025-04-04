import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import { ShoppingBag, BarChart, Users, Calendar } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Register Chart.js Components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Summary Cards Data
  const summaryData = [
    {
      icon: <ShoppingBag size={32} />,
      value: "4,510",
      label: "Total Sales",
      color: "#4caf50",
      percentage: "+12%",
    },
    {
      icon: <BarChart size={32} />,
      value: "3,200",
      label: "New Orders",
      color: "#f57c00",
      percentage: "+8%",
    },
    {
      icon: <Users size={32} />,
      value: "1,250",
      label: "New Users",
      color: "#0288d1",
      percentage: "+5%",
    },
    {
      icon: <Calendar size={32} />,
      value: "8",
      label: "Interviews Scheduled",
      color: "#e91e63",
      percentage: "+15%",
    },
  ];

  // Line Chart Data
  const lineChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [300, 450, 400, 600, 700, 500, 650],
        borderColor: "#0288d1",
        backgroundColor: "rgba(2, 136, 209, 0.3)",
        fill: true,
      },
      {
        label: "Orders",
        data: [200, 300, 350, 450, 550, 500, 600],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.3)",
        fill: true,
      },
    ],
  };

  // Today's Interview Lineup
  const interviewList = [
    { name: "Aman Sharma", time: "10:00 AM", position: "Frontend Developer" },
    { name: "Riya Mehta", time: "11:30 AM", position: "Backend Engineer" },
    { name: "Vikram Singh", time: "2:00 PM", position: "UI/UX Designer" },
  ];

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2}>
        {summaryData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                boxShadow: 3,
              }}
            >
              {item.icon}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.value}
                </Typography>
                <Typography variant="body2">{item.label}</Typography>
              </CardContent>
              <Typography
                sx={{
                  color: item.color,
                  fontWeight: "bold",
                  marginLeft: "auto",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: `${item.color}20`,
                }}
              >
                {item.percentage}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts & Interview Lineup */}
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {/* Line Chart */}
        <Grid item xs={12} md={8}>
          <Card sx={{ padding: 2, boxShadow: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Sales & Orders Trend
            </Typography>
            <Line data={lineChartData} />
          </Card>
        </Grid>

        {/* Today's Interview Lineup */}
        <Grid item xs={12} md={4}>
          <Card sx={{ padding: 2, boxShadow: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 1 }}
            >
              Today's Interview Lineup
            </Typography>
            <List>
              {interviewList.map((interview, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={interview.name}
                    secondary={`${interview.position} - ${interview.time}`}
                  />
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>

      {/* Table Section */}
      <Card sx={{ marginTop: 2, padding: 2, boxShadow: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Product Stock
        </Typography>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple MacBook Pro 13</td>
                <td>25</td>
                <td>
                  <span className="badge bg-success">Available</span>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>HP Pavilion 15</td>
                <td>10</td>
                <td>
                  <span className="badge bg-warning">Low Stock</span>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dell XPS 13</td>
                <td>0</td>
                <td>
                  <span className="badge bg-danger">Out of Stock</span>
                </td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </Box>
  );
};

export default Dashboard;
