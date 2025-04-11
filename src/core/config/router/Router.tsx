import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
