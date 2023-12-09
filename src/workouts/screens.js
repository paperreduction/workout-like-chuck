import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlusIcon } from '@heroicons/react/20/solid';

import { WorkoutContext } from "./context";
import { Base } from "../theme/base";


export function WorkoutList() {
  const {workouts} = useContext(WorkoutContext);

  return (
    <Base>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">Your Workouts</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all your workouts.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              to={`/workouts/create`}
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add workout
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              {!workouts.length ? (
                <div className="bg-gray-50 sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">No workouts yet!</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>You are weak. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus praesentium tenetur pariatur.</p>
                    </div>
                    <div className="mt-5">
                      <Link
                        to={`/workouts/create/`}
                        type="button"
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Add Workout
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Last Completed
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Total Completions
                    </th>
                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                      <span className="sr-only">Delete</span>
                      <span className="sr-only">Kick Butt!</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                  {workouts.map((workout) => {
                    let duration = workout.exercises.reduce((prev, current) => {return prev + current.duration}, 0);
                    return (
                      <tr key={workout.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {workout.title}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(duration*1000).toISOString().substring(14, 19)}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{workout.lastCompletedDate}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{workout.completedCount}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                          <div className="flex justify-end">
                            <Link
                              to={`/workouts/${workout.id}`}
                              className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                            >
                              Kick Butt!<span className="sr-only">, {workout.title}</span>
                            </Link>
                          </div>
                          <div className="mt-3 leading-5 text-gray-500">
                            <Link to={`/workouts/${workout.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                              Edit<span className="sr-only">, {workout.title}</span>
                            </Link> |
                            <Link to={`/workouts/${workout.id}/delete`} className="text-indigo-600 hover:text-indigo-900">
                              Delete<span className="sr-only">, {workout.title}</span>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}


function ExerciseCard({exercise, handleEdit, handleDelete}){
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="mt-1 flex items-baseline justify-between md:block lg:flex">
          <div>
            {exercise.title}
          </div>

          <div
            className="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
            {new Date(exercise.duration*1000).toISOString().substring(14, 19)}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={(e) => {e.preventDefault(); handleEdit(exercise)}}
          >
            Edit <span className="sr-only"> {exercise.title}</span>
          </a>

          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={(e) => {e.preventDefault(); handleDelete(exercise)}}
          >
            Delete <span className="sr-only"> {exercise.title}</span>
          </a>
        </div>
      </div>
    </div>
  )
}


function ExerciseForm({ exercise, handleSave, handleCancel }){
  const initialMinutes = exercise.duration ? Math.floor(exercise.duration / 60) : '';
  const initialSeconds = exercise.duration ? exercise.duration % 60 : '';

  const [title, setTitle] = useState(exercise.title);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  function saveExercise(e){
    e.preventDefault();

    handleSave({
      ...exercise, title, duration: ((parseInt(minutes || 0) * 60) + parseInt(seconds || 0))
    });

    // Reset form state
    setTitle('');
    setMinutes('');
    setSeconds('');
  }

  return (
    <form onSubmit={saveExercise} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="exercise-title"
                id="exercise-title"
                autoComplete="exercise-title"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={title}
                onChange={(e) => setTitle(e.target.value) }
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              Minutes
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="minutes"
                id="minutes"
                autoComplete="minutes"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
              Seconds
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancel}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}


export function WorkoutBuilder() {
  let { id } = useParams();
  id = (id !== undefined ? parseInt(id) : undefined);

  const { workouts, saveWorkout } = useContext(WorkoutContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [editExercise, setEditExercise] = useState(null);

  // Load the context data into local state
  useEffect(() => {
    if(id === undefined){
      return;
    }

    let workout = workouts.find((workout) => workout.id === id);
    if (!workout){
      return;
    }

    setTitle(workout.title);
    setExercises(workout.exercises);
  }, [id]);

  function handleAddExercise(index){
    setEditExercise({location: index});
  }

  function handleEditExercise(exercise){
    setEditExercise(exercise);
  }

  function handleSaveExercise(exercise){

    // Edit
    if(exercise.id !== undefined){
      setExercises((pending) => {
        let ids = pending.map((exercise) => exercise.id);
        let index = ids.indexOf(exercise.id);

        let newExercises = [...pending];
        newExercises[index] = exercise;

        return newExercises;
      });

    // Add
    }else{
      setExercises((pending) => {
        let tempId = Math.floor(Math.random() * 100);

        let newExercises = [...pending];
        newExercises.splice(exercise.location, 0, exercise);
        delete exercise.location;
        exercise.id = `~${tempId}`;

        return newExercises;
      });
    }

    setEditExercise(null);
  }

  function handleDeleteExercise(exercise){
    setExercises((pending) => {
      let ids = pending.map((exercise) => exercise.id);
      let index = ids.indexOf(exercise.id);

      let newExercises = [...pending];
      newExercises.splice(index, 1);

      return newExercises;
    });
  }

  function handleCancelExercise(){
    setEditExercise(null);
  }

  function handleSave(){
    saveWorkout({id, title, exercises});
    navigate("/workouts");
  }

  return (
    <Base>

      <div className="mb-5 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <div>
            <label htmlFor="name" className="ml-px block text-sm font-medium leading-6 text-gray-900">
              Workout Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Workout Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>

      <div className="bg-gray-50 mt-10 p-3">
        <div className="space-y-10 divide-y divide-gray-900/10">

          <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
            <div className="px-4 sm:px-0">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Workout Exercises</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Configure each exercise that's part of this workout.</p>

              <div className="mt-5">
                <div className="text-center my-5">
                  <button
                    type="button"
                    className="mx-auto rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleAddExercise(0)}
                  >
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {exercises.map((exercise, index) => {
                  return (
                    <div key={exercise.id}>
                      <ExerciseCard exercise={exercise} handleEdit={handleEditExercise} handleDelete={handleDeleteExercise} />

                      <div className="text-center my-5">
                        <button
                          type="button"
                          className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={() => handleAddExercise(index+1)}
                        >
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {editExercise && <ExerciseForm exercise={editExercise} handleSave={handleSaveExercise} handleCancel={handleCancelExercise} />}

          </div>

        </div>

      </div>
    </Base>
  );
}


function ExerciseDo({exercise, startTime, endTime, currentTime, running}){
  let display = exercise.duration;
  let status = 'pending';

  if(startTime <= currentTime && currentTime <= endTime && running){
    display = endTime - currentTime;
    status = 'running';
  }else if(currentTime >= endTime){
    display = 0;
    status = 'complete';
  }

  return (
    <div className="mt-10 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="mt-1 flex items-baseline justify-between md:block lg:flex">
          <div>
            {exercise.title}
          </div>

          <div
            className="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
            {new Date(display*1000).toISOString().substring(14, 19)}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-4 sm:px-6">
        <div className="text-sm">
          {status}
        </div>
      </div>
    </div>
  );
}


export function WorkoutDetail(){
  let { id } = useParams();
  id = parseInt(id);

  const { workouts } = useContext(WorkoutContext);
  const [title, setTitle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [intervalId, setIntervalId] = useState();
  const [clock, setClock] = useState(0);
  const [completed, setCompleted] = useState(false);

  let runningDurationTotal = 0;
  let workoutDuration = exercises.reduce((prev, current) => prev + current.duration, 0) || 1;

  // Load the context data into local state
  useEffect(() => {
    if(id === undefined){
      return;
    }

    let workout = workouts.find((workout) => workout.id === id);
    if (!workout){
      return;
    }

    setTitle(workout.title);
    setExercises(workout.exercises);
  }, [id]);

  function start(){
    let interval = setInterval(()=>{
      setClock((prev)=>prev+=1);
    }, 1000);
    setIntervalId(interval);
  }

  function pause(){
    clearInterval(intervalId);
    setIntervalId();
  }

  // Check if we've completed the workout
  useEffect(() => {
    if(completed){
      return;
    }

    if(clock < workoutDuration){
      return;
    }

    pause();
    setClock(0);
    setCompleted(true);
  }, [clock]);

  // if(!completed && clock >= workoutDuration){
  //   pause();
  //   setClock(0);
  //   setCompleted(true);
  // }

  return (
    <Base>
      <h1>{title}</h1>
      <p>Elapsed time: {new Date(clock*1000).toISOString().substring(14, 19)}</p>
      <p>
        {intervalId ? <button onClick={pause}>Pause</button> : <button onClick={start}>Start</button>}
      </p>

      {exercises.map((exercise, index) => {
        // Get the start and end times for this exercise
        let startTime = runningDurationTotal;
        let endTime = runningDurationTotal + exercise.duration;

        // Update the running total
        runningDurationTotal += exercise.duration;

        return <ExerciseDo key={exercise.id} exercise={exercise} startTime={startTime} endTime={endTime} currentTime={clock} running={!!intervalId} />;
      })}
    </Base>
  );
}
