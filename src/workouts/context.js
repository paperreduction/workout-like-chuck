import {createContext, useEffect, useState} from 'react';

export const WorkoutContext = createContext({});

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    /* Fetch API call to get workouts */
    const apiWorkouts = [
      {
        id: 0,
        title: 'Legs',
        lastCompletedDate: '2023-11-20',
        completedCount: 10,
        exercises: [
          {
            id: 0,
            title: 'Squat',
            duration: 3,
          },
          {
            id: 1,
            title: 'Burpee',
            duration: 3,
          },
        ]
      },
      {id: 1, title: '1" Punch', lastCompletedDate: '2023-10-10', completedCount: 2, exercises: [
          {
            id: 2,
            title: 'Squat',
            duration: 500,
          },
          {
            id: 3,
            title: 'Burpee',
            duration: 500,
          },
        ]},
      {id: 2, title: 'Look Behind You Attack', lastCompletedDate: '2023-12-02', completedCount: 5, exercises: [
          {
            id: 4,
            title: 'Squat',
            duration: 500,
          },
          {
            id: 5,
            title: 'Burpee',
            duration: 500,
          },
        ]},
    ];

    setWorkouts(apiWorkouts);
    // setWorkouts([]);
  }, []);


  return (
    <WorkoutContext.Provider
      value={{
        workouts,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}