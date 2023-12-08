import * as React from "react";
import {HomePage, AboutPage} from './screens';


export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
];