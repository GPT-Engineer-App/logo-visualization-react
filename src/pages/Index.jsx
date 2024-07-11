import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to the 3D Logo Visualization App</h1>
      <p className="mb-4">Explore the 3D logo visualization by clicking the link below.</p>
      <Link to="/logo-visualization" className="text-blue-500 underline">
        Go to 3D Logo Visualization
      </Link>
    </div>
  );
};

export default Index;