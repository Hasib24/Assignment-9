import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Banner from './components/Banner';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import Error from './components/Error';
import HomePage from './components/homePage/HomePage';
import JobDetails from './components/featuredJobs/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: ()=>fetch('featuredjobs.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "jobdetaiis",
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('featuredjobs.json')
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
