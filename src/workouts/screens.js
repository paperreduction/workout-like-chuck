import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

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


export function WorkoutBuilder() {

  return (
    <h1>Builder</h1>
  );
}


export function WorkoutDetail(){

  return (
    <h1>Do it!</h1>
  );
}
