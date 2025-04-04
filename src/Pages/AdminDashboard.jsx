import React, { useEffect, useState } from "react";
import AdminDashboardComponent from "../components/AdminDashboardComponent";
import { getFetch } from "../api/Api";

const AdminDashboard = () => {
  const [dashboard, setDasboard] = useState({});
  const fetchData = async () => {
    const url = `${import.meta.env.VITE_API_URL_LOCAL}/getDashboardData`;
    try {
      const response = await getFetch(url);
      if (response?.status === 200) {
        setDasboard(response.data.data);
      } else {
        console.error("API Error:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <AdminDashboardComponent dashboard={dashboard} />
    </div>
  );
};

export default AdminDashboard;
