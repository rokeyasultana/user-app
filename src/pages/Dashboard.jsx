import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const role = localStorage.getItem('role');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      {role === 'admin' && (
        <div className="space-y-2">
          <Link to="/import" className="bg-blue-500 text-white px-4 py-2 rounded block text-center">
            Import Customers
          </Link>
          <Link to="/customers" className="bg-blue-500 text-white px-4 py-2 rounded block text-center">
            View Customers
          </Link>
        </div>
      )}
      {role === 'hr' && (
        <div className="space-y-2">
          <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded block text-center">
            Register User
          </Link>
        </div>
      )}
      {role === 'customer' && (
        <div className="space-y-2">
          <p className="text-lg">Welcome, Customer!</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
