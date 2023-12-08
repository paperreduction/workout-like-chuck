import * as React from "react";
import { WorkoutList, WorkoutBuilder, WorkoutDetail } from './screens';


export const routes = [
  {
    path: "/workouts",
    element: <WorkoutList />,
  },
  {
    path: "/workouts/create",
    element: <WorkoutBuilder />,
  },
  {
    path: "/workouts/:id",
    element: <WorkoutDetail />,
  },
  {
    path: "/workouts/:id/edit",
    element: <WorkoutBuilder />,
  },
  {
    path: "/workouts/:id/delete",
    element: <WorkoutBuilder />,
  },
];