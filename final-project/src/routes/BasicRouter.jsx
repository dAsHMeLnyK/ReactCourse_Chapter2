import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import MoviesPage from '../pages/movies/MoviesPage';
import NotFoundPage from '../pages/not-found/NotFoundPage';
import UsersPage from '../pages/users/UsersPage';

const BasicRouter = () => {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      );
}

export default BasicRouter