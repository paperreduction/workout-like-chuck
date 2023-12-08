import * as React from "react";
import { WorkoutList, WorkoutBuilder, WorkoutDetail } from './screens';
import { WorkoutProvider } from "./context";


export const routes = [
  {
    path: "/workouts",
    element: <WorkoutProvider><WorkoutList /></WorkoutProvider>,
  },
  {
    path: "/workouts/create",
    element: <WorkoutProvider><WorkoutBuilder /></WorkoutProvider>,
  },
  {
    path: "/workouts/:id",
    element: <WorkoutProvider><WorkoutDetail /></WorkoutProvider>,
  },
  {
    path: "/workouts/:id/edit",
    element: <WorkoutProvider><WorkoutBuilder /></WorkoutProvider>,
  },
  {
    path: "/workouts/:id/delete",
    element: <WorkoutProvider><WorkoutBuilder /></WorkoutProvider>,
  },
];