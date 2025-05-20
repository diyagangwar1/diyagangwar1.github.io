import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Error404 from './pages/Error404.jsx'
import DellPage from './pages/DellPage.jsx';
import ValueVisionPage from './pages/ValueVisionPage.jsx';
import TinyMLPage from './pages/TinyMLPage.jsx';
import MimentePage from './pages/MimentePage.jsx';
import DotCursor from './components/DotCursor';
import TerminalIntro from './components/IntroAnimation.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dell',
    element: <DellPage />,
  },
  {
    path: '/value-vision',
    element: <ValueVisionPage />,
  },
  {
    path: '/tinyml',
    element: <TinyMLPage />,
  },
  {
    path: '/mimente',
    element: <MimentePage />,
  },
  {
    path: '*',
    element: <Error404 />,
  }
]);

function MainApp() {
  const [showTerminal, setShowTerminal] = useState(true);
  if (showTerminal) {
    return <TerminalIntro onFinish={() => setShowTerminal(false)} />;
  }
  return (
    <>
      <DotCursor />
      <RouterProvider router={router} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
