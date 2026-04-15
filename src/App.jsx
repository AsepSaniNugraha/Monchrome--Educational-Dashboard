import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layouts/DashboardLayout';
import DashboardHome from './components/pages/dashboard/DashboardHome';
import StudentList from './components/pages/students/StudentList';
import StudentDetail from './components/pages/students/StudentDetail';
import CourseList from './components/pages/courses/CourseList';
import Gallery from './components/pages/courses/Gallery';
import Tasks from './components/pages/assessment/Tasks';
import Quiz from './components/pages/assessment/Quiz';
import Faq from './components/pages/help/Faq';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="students" element={<StudentList />} />
          <Route path="students/detail" element={<StudentDetail />} />
          <Route path="courses" element={<CourseList />} />
          <Route path="courses/gallery" element={<Gallery />} />
          <Route path="assessment" element={<Tasks />} />
          <Route path="assessment/quiz" element={<Quiz />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App