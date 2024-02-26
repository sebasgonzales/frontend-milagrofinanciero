import React from 'react'

import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/MilagroFinanciero/Login" />
  );
}

export default ProtectedRoute